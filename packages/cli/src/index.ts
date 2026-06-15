#!/usr/bin/env node
import { confirm, intro, isCancel, outro, text } from '@clack/prompts'
import { execa } from 'execa'
import fsExtra from 'fs-extra'
import { resolve } from 'node:path'
import { cac } from 'cac'

const { ensureDir, pathExists, writeFile } = fsExtra
const cli = cac('w1c')

cli
  .command('create [dir]', 'Create a small app that consumes @w1c/components')
  .option('--install', 'Install dependencies after writing files')
  .action(async (dir: string | undefined, options: { install?: boolean }) => {
    intro('W1C scaffold')

    const targetInput =
      dir ??
      (await text({
        message: 'Project directory',
        placeholder: 'my-w1c-app',
        defaultValue: 'my-w1c-app'
      }))

    if (isCancel(targetInput)) {
      outro('Cancelled')
      return
    }

    const targetDir = resolve(String(targetInput))
    if ((await pathExists(targetDir)) && !(await confirm({ message: 'Directory exists. Continue?' }))) {
      outro('Cancelled')
      return
    }

    await ensureDir(`${targetDir}/src`)
    await writeFile(
      `${targetDir}/package.json`,
      `${JSON.stringify(
        {
          name: String(targetInput),
          private: true,
          type: 'module',
          scripts: {
            dev: 'vite',
            build: 'vite build',
            preview: 'vite preview'
          },
          dependencies: {
            '@w1c/components': 'workspace:*'
          },
          devDependencies: {
            vite: '^8.0.16',
            typescript: '~6.0.2'
          }
        },
        null,
        2
      )}\n`
    )
    await writeFile(
      `${targetDir}/index.html`,
      '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>W1C App</title><script type="module" src="/src/main.ts"></script></head><body><my-element><h1>W1C</h1></my-element></body></html>\n'
    )
    await writeFile(`${targetDir}/src/main.ts`, "import '@w1c/components'\n")

    if (options.install) {
      await execa('pnpm', ['install'], { cwd: targetDir, stdio: 'inherit' })
    }

    outro(`Created ${targetDir}`)
  })

cli.help()
cli.parse()
