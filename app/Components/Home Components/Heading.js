import { useContext } from "react";
import { View, Text } from "react-native";
import { PointsContext } from "../../context/PointsContext";
const Heading = () => {

    const {name} = useContext(PointsContext);

    return (
        <View className = "bg-blue-500 px-4 py-4 mx-1 mt-10 rounded-b-lg">
              <Text className = "text-slate-700 text-lg">
           <Text className = "text-3xl text-blue-900" > Welcome, {name} </Text> Your reward points are shown inside the circular bar.
              </Text>
        </View>
    )

}


export default Heading;