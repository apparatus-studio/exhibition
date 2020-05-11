import React, { useEffect, useRef, FC } from 'react'
import LottieView from 'lottie-react-native'
import { Animated, Easing } from 'react-native'
import animationJSON from './animation'

export type TAnimationGigCongratulations = {
  height?: number,
  width?: number,
}

export const AnimationGigCongratulations: FC<TAnimationGigCongratulations> = ({
  height,
  width,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  const timing = Animated.loop(
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }
    )
  )

  useEffect(() => {
    timing.start()
  }, [])

  return (
    <LottieView
      source={animationJSON}
      progress={fadeAnim}
      loop
      style={{
        width: width ?? 256,
        height: height ?? 256,
      }}
    />
  )
}
