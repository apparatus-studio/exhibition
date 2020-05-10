import { TComponentConfig } from 'autoprops'
import { AnimationGigTimer, TAnimationGigTimer } from './src'

export const config: TComponentConfig<TAnimationGigTimer> = {
  props: {
    play: [true],
    onRing: [() => console.log('RIIIING')],
  },
  required: ['onRing'],
}

export const Component = AnimationGigTimer

export { default as packageJson } from './package.json'
