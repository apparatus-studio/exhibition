import React, { useEffect, useRef, FC } from 'react'
import bodymovin, { AnimationItem } from 'lottie-web'
import animationJSON from './animation.json'

export type TAnimationGigCongratulations = {}

export const AnimationGigCongratulations: FC<TAnimationGigCongratulations> = () => {
  const ref = useRef<any>()
  const animation = useRef<AnimationItem>()

  useEffect(() => {
    if (ref.current instanceof HTMLElement) {
      animation.current = bodymovin.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationJSON,
      })
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: 256, height: 256 }}>
      <div
        ref={ref}
        style={{ width: 256, height: 256, position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  )
}
