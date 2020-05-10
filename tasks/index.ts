import plugin from '@start/plugin'
import {
  CheckChromeScreenshots,
  CheckFirefoxScreenshots,
  CheckIosScreenshots,
  CheckAndroidScreenshots,
  CheckIosWebScreenshots,
  CheckAndroidWebScreenshots,
  Sandbox,
  CheckChromePerfSnapshots,
} from '@bubble-dev/start-preset'

export * from '@bubble-dev/start-preset'

export const checkChromeScreenshots = CheckChromeScreenshots()
export const checkFirefoxScreenshots = CheckFirefoxScreenshots()
export const checkAndroidScreenshots = CheckAndroidScreenshots()
export const checkIosScreenshots = CheckIosScreenshots()
export const checkIosWebScreenshots = CheckIosWebScreenshots()
export const checkAndroidWebScreenshots = CheckAndroidWebScreenshots()
export const checkChromePerfSnapshots = CheckChromePerfSnapshots()

export const sandbox = Sandbox({
  entryPointPath: './tasks/sandbox/index.tsx',
  htmlTemplatePath: './tasks/sandbox/templates/dev.html',
})

export const run = (file: string) =>
  plugin('main', () => async () => {
    const { resolve } = await import('path')
    const { main } = await import(resolve(file))

    await main()
  })
