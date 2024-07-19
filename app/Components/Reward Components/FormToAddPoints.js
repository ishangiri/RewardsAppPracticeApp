import { TextInput } from "react-native-paper";
import { useContext, useState } from "react";
import { Button, View } from "react-native";
import { PointsContext } from "../../context/PointsContext";
import React from "react";
import ShowModal from "./Modal";

function FormToAddPoints() {
  const [text, setText] = useState("");
  const [points, setLocalPoints] = useState("");
  const [visible, setVisible] = useState(false);

  const { addPoints, setName } = useContext(PointsContext);

  function submitPoints() {
    addPoints(points);
    setName(text);
    setLocalPoints("");
    setText("");
    setVisible(true);
  }

  function handlePoints(value) {
    const numericValue = parseInt(value, 10);
    setLocalPoints(isNaN(numericValue) ? 0 : numericValue);
  }

  function cancelModal(){
    setVisible(false);
  }

  return (
    <>
      <ShowModal modalVisible={visible} cancelModal={cancelModal} points={points} />
      <View className="px-4 py-2">
        <View className="my-2">
          <TextInput label="Name" value={text} onChangeText={setText} />
        </View>
        <View className="my-2">
          <TextInput
            label="Points"
            value={points}
            onChangeText={handlePoints}
          />
        </View>
        <Button title="Submit" onPress={submitPoints} />
      </View>
    </>
  );
}

export default FormToAddPoints;
