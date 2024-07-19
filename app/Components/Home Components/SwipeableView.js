import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import CardComponent from "./CardComponent";
import dummy_products from "../../dummy_products";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const SwipeableView = () => {
  const initialPosition = SCREEN_HEIGHT * 0.85;
  const translateY = useRef(new Animated.Value(initialPosition)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      translateY.extractOffset();
     
      const shouldExpand = nativeEvent.translationY < -80;
      Animated.spring(translateY, {
        toValue: shouldExpand ? -SCREEN_HEIGHT * 0.5 : initialPosition,
        useNativeDriver: false,
      }).start();
    }
  };


  const clampedTranslateY = translateY.interpolate({
    inputRange: [-SCREEN_HEIGHT * 0.30, 0],
    outputRange: [-SCREEN_HEIGHT * 0.30, 0],
    extrapolate: "clamp",
  });

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: clampedTranslateY }] },
        ]}
      >
        <Text style={styles.content}>Here are some new deals for you!</Text>

        <FlatList
          data={dummy_products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardComponent
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )}
          contentContainerStyle={styles.flatListContent}
          className = "p-5"
         
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: SCREEN_HEIGHT * 0.45,
    width: "100%",
    height: SCREEN_HEIGHT,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  content: {
    padding: 20,
    fontSize: 18,
    textAlign: "center",
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default SwipeableView;
