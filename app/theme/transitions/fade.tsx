import { Animated } from "react-native";

export default function fade (current, next) {
  return Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })
}
