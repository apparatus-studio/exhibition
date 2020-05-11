import React, { useEffect, useRef, FC } from 'react'
import bodymovin, { AnimationItem } from 'lottie-web'
import timerJSON from './timer'
import needlesJSON from './needles'

export type TAnimationGigTimer = {
  play?: boolean,
  onRing: () => void,
}

export const AnimationGigTimer: FC<TAnimationGigTimer> = ({ play, onRing }) => {
  const ref = useRef<any>()
  const ref2 = useRef<any>()
  const firstTime = useRef(true)
  const animation = useRef<AnimationItem>()
  const animation2 = useRef<AnimationItem>()

  useEffect(() => {
    if (ref.current instanceof HTMLElement) {
      animation.current = bodymovin.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: play,
        animationData: needlesJSON,
      })

      animation2.current = bodymovin.loadAnimation({
        container: ref2.current,
        renderer: 'svg',
        autoplay: false,
        animationData: timerJSON,
      })
      animation2.current?.addEventListener('complete', () => {
        onRing()
      })
    }
  }, [])

  useEffect(() => {
    if (animation.current) {
      if (play !== undefined && play) {
        animation.current.play()
      } else {
        animation.current.pause()

        if (!firstTime.current) {
          animation2.current?.goToAndPlay(0)
        }
      }

      firstTime.current = false
    }
  }, [play])

  return (
    <div style={{ position: 'relative', width: 128, height: 128 }}>
      <div
        ref={ref}
        style={{ width: 128, height: 128, position: 'absolute', top: 0, left: 0 }}
      />
      <div
        ref={ref2}
        style={{ width: 128, height: 128, position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  )
}
