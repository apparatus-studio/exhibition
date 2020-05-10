import React, { useEffect, useRef, FC } from 'react'
import LottieView from 'lottie-react-native'
import { Animated, Easing, View } from 'react-native'
import animationJSON from './animation.json'

export const AnimationGigCongratulations: FC<{}> = () => {
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
    <View style={{ position: 'relative', width: 256, height: 256 }}>
      <LottieView
        source={animationJSON}
        progress={fadeAnim}
        loop
        style={{
          width: 256,
          height: 256,
        }}
      />
    </View>
  )
}
