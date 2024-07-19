import { View, Text } from "react-native";
import FormToAddPoints from "../../Components/Reward Components/FormToAddPoints";
import SwipeableView from "../../Components/Home Components/SwipeableView";
import { GestureHandlerRootView } from "react-native-gesture-handler";
function Rewards(){
    return(
    <View>
       <FormToAddPoints />
      
    </View>
   

    )
}

export default Rewards;