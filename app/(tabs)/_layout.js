import { Tabs } from "expo-router";
import "../../global.css";
import { Text } from "react-native";
import PointsProvider from "../context/PointsContext";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

function TabsLayout() {
  return (
    <PointsProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerLeft: () => <Text className="mx-3 font-extrabold text-center text-[#003893]">Nepalese Indo Bazar Rewards</Text>,
            headerRight: () => (
              <Text className="mx-3">
                <Link href="./User"><FontAwesome name="user" size={30} color="#003893" /></Link>
              </Text>
            ),
            title : "Home",
            headerTitle: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="RoutingTabs/Rewards"
          options={{ headerTitle: "Rewards", title: "Rewards" }}
        />
        <Tabs.Screen
          name="RoutingTabs/Activity"
          options={{ headerTitle: "Activity", title: "Activity" }}
        />
      </Tabs>
    </PointsProvider>
  );
}

export default TabsLayout;
