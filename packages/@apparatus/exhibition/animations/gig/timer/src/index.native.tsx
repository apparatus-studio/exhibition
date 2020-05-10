import React, { useEffect, useRef, FC } from 'react'
import LottieView from 'lottie-react-native'
import { Animated, Easing, View } from 'react-native'
import needlesJSON from './needles.json'
import timerJSON from './timer.json'

export type TAnimationGigTimer = {
  play?: boolean,
  onRing: () => void,
}

export const AnimationGigTimer: FC<TAnimationGigTimer> = ({ play, onRing }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeAnim2 = useRef(new Animated.Value(0)).current
  const firstTime = useRef(true)

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

  const timing2 = Animated.timing(
    fadeAnim2,
    {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
      easing: Easing.linear,
    }
  )

  useEffect(() => {
    if (play !== undefined && play) {
      fadeAnim.setValue(0)
      timing.start()
    } else {
      fadeAnim2.setValue(0)
      timing.stop()

      if (!firstTime.current) {
        timing2.start(() => {
          onRing()
        })
      }
    }

    firstTime.current = false
  }, [play])

  return (
    <View style={{ position: 'relative', width: 128, height: 128 }}>
      <View style={{ position: 'absolute', width: 128, height: 128, top: 0, left: 0 }}>
        <LottieView
          source={timerJSON}
          progress={fadeAnim2}
          loop
          style={{
            width: 128,
            height: 128,
          }}
        />
      </View>
      <View style={{ position: 'absolute', width: 128, height: 128, top: 0, left: 0 }}>
        <LottieView
          source={needlesJSON}
          progress={fadeAnim}
          loop
          style={{
            width: 128,
            height: 128,
          }}
        />
      </View>
    </View>
  )
}
