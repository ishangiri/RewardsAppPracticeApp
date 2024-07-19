import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { PointsContext } from "../../context/PointsContext";

function CircularProgressBar() {
  const { points } = useContext(PointsContext);
  const [color, setColor] = useState("green");
  const [fill, setFill] = useState(0);
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    // Animate the fill
    Animated.timing(animatedValue, {
      toValue: points,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    // Update color based on points
    if (points >= 500) {
      setColor("#FFD700"); // Gold
    } else if (points > 200) {
      setColor("#4169E1"); // Royal Blue
    } else if (points >= 100) {
      setColor("#FF6347"); // Tomato Red
    } else {
      setColor("#32CD32"); // Lime Green
    }
  }, [points]);

  // Use animated value to update fill
  animatedValue.addListener(({ value }) => {
    setFill(value);
  });

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        style={styles.circularBar}
        size={250}
        width={25}
        fill={fill}
        tintColor={color}
        backgroundColor="#E0E0E0"
        lineCap="round"
        rotation={0}
        duration={1000}
      >
        {(fill) => (
          <View style={styles.innerCircle}>
            <Animated.Text style={[styles.pointsText, { color }]}>
              {fill.toFixed(0)}
            </Animated.Text>
            <Text style={styles.pointsLabel}>POINTS</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  circularBar: {
    marginVertical: 10,
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  pointsText: {
    fontSize: 60,
    fontWeight: "bold",
  },
  pointsLabel: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
});

export default CircularProgressBar;