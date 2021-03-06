import React, { useEffect, useRef, FC } from 'react'
import bodymovin, { AnimationItem } from 'lottie-web'
import animationJSON from './animation'

export type TAnimationGigCongratulations = {
  height?: number,
  width?: number,
}

export const AnimationGigCongratulations: FC<TAnimationGigCongratulations> = ({
  height,
  width,
}) => {
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
    <div
      ref={ref}
      style={{
        height: height ?? 256,
        width: width ?? 256,
      }}
    />
  )
}
