import React, { useRef } from "react";
import { View, StyleSheet, FlatList, ScrollView, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../Components/Home Components/BottomSheet";
import dummy_products from ".././dummy_products";
import CardComponent from ".././Components/Home Components/CardComponent";
import CircularProgressBar from ".././Components/Home Components/CircularProgressBar";
import Heading from ".././Components/Home Components/Heading";
import FABButton from "../Components/FAB";

function HomePage() {
  const bottomSheetRef = useRef(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Heading />
          <CircularProgressBar />
        </View>
      </SafeAreaView>
    
      <BottomSheet ref={bottomSheetRef}>
        <ScrollView>
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
            className="p-5 pb-80"
            scrollEnabled={false}
          />
        </ScrollView>
      </BottomSheet>
      <FABButton />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    zIndex: 1, // Ensure this content is above the BottomSheet
  },
});

export default HomePage;
