import { Modal, Pressable, View, Text } from "react-native";

const ShowModal = ({ modalVisible, cancelModal, points }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View className = "justify-center mt-22 flex-1 ">
        <View className = " py-10 px-10 m-20 bg-blue-700 rounded-xl justify-center align-middle">
        <Text className = " text-slate-50">Adding {points} points to the user.</Text>
          <Pressable onPress={cancelModal}>
            <Text className = "my-2 bg-white p-2 text-center ">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ShowModal;

