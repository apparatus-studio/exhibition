import { TComponents } from '@sandbox/ui'
/* eslint-disable import/no-extraneous-dependencies */
import * as AnimationGigCongratulations from '@apparatus/exhibition-animations-gig-congratulations/meta'
import * as AnimationGigIntro from '@apparatus/exhibition-animations-gig-intro/meta'
import * as AnimationGigTimer from '@apparatus/exhibition-animations-gig-timer/meta'

export const components: TComponents = {
  AnimationGigCongratulations: () => Promise.resolve(AnimationGigCongratulations),
  AnimationGigIntro: () => Promise.resolve(AnimationGigIntro),
  AnimationGigTimer: () => Promise.resolve(AnimationGigTimer),
}
