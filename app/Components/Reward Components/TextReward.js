import { View, Text } from "react-native";
import { Link } from "expo-router";

const TextReward = () => {
    return (
      <View className = "rounded-md bg-slate-400 py-2 px-2 mx-4 mt-4 ">
        <Text className = "text-center">
            Add your rewards points from here <Link href="../RoutingTabs/Rewards" className= "text-red-600"> Rewards. </Link>
        </Text>
       
      </View>
    )
}
export default  TextReward;