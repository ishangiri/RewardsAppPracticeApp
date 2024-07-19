// User.js
import React, { useState } from 'react';
import { View, Image, Pressable, Alert, Text, StyleSheet } from 'react-native';
import { launchCameraAsync, useCameraPermissions , PermissionStatus} from 'expo-image-picker';

import { Avatar } from 'react-native-paper';




const User = () => {

  const [pickedImage, setImage] = useState();

  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

async function verifyPermissions(){

   if (cameraPermissionInformation.status ===  PermissionStatus.UNDETERMINED){
               const permissionResp = await requestPermission();
               return permissionResp.granted;       
      } 

      if(cameraPermissionInformation.status === PermissionStatus.DENIED){
         Alert.alert("You need to grant camera permission");
         return false;
      }
        return true;
}

 async function opneCamera(){
  const hasPermission = await verifyPermissions();

  if(!hasPermission){
    return;
  }

  const image = await launchCameraAsync({
    allowsEditing: true,
    aspect : [16,9],
    quality : 0.5,

  });

  setImage(image);
  
 }

 let imagePreview = <Text>No image taken yet.</Text>

  if (pickedImage){
    imagePreview = <Image  source={{uri:pickedImage}} />
  }

  return (
    <View>
    <View className = "flex-row justify-center my-8">
      <Pressable onPress={opneCamera}>   
         <Avatar.Image size={90} source={{uri: pickedImage}} />
      </Pressable>
    </View>

<View className = "flex-row  h-40 justify-center align-middle bg-slate-600 rounded-lg">

{imagePreview}
   </View>
   </View>
  );
};

export default User;

const styles = StyleSheet.create({
  image : {
    width : "100%",
    height : "100%",
  }
})