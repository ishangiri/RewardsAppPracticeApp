import { Dimensions, StyleSheet, View, Text, Platform } from 'react-native';
import React, { useCallback, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import constants from '../../constants';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT * 0.9; // 80% of screen height
const INITIAL_TRANSLATE_Y = -SCREEN_HEIGHT * 0.45; // 10% of screen height

const BottomSheet = React.forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(INITIAL_TRANSLATE_Y);
  const active = useSharedValue(false);

  const scrollTo = useCallback((destination) => {
    'worklet';
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const context = useSharedValue({ y: 0 });


  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = Math.max(
        Math.min(event.translationY + context.value.y, INITIAL_TRANSLATE_Y),
        MAX_TRANSLATE_Y
      );
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT * 0.5) {
        scrollTo(INITIAL_TRANSLATE_Y);
      } else {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y, INITIAL_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View  style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
      <View style = {styles.line} />
       <View  className = "flex-row justify-center p-5">
<Text className = "text-2xl text-center text-[#003893]">Here are some new exclusive products!</Text>
       </View>
       <ScrollView >
        
       {children}

       </ScrollView>
    
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor:constants.white,
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
     zIndex : Platform.OS === 'ios' ? undefined : 1,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  
});

export default BottomSheet;