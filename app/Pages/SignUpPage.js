import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native-paper';

const SignUpPage = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Perform signup logic here...

    // Navigate to the main tabs layout after signup
    router.replace('(tabs)');
  };

  const handleLogIn = () => {
    // Navigate to the Log In page
    router.push('/Pages/LogInPage');
  };

  return (
    <View className="flex-1 justify-center items-center  100 px-4">
      <View className="w-full max-w-sm bg-[#DC143C] -400 p-8 rounded-lg">
        <TextInput
          mode='outlined'
          label="Email"
          value={text}
          onChangeText={setText}
          className="mb-4"
        />
        <TextInput
          mode='outlined'
          label="Password"
          value={password}
          onChangeText={setPassword}
          className="mb-4"
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <View className="flex-row justify-center items-center mt-4">
          <Text className="text-white mr-2">Already have an account?</Text>
          <Button title='Log In' onPress={handleLogIn} />
        </View>
      </View>
    </View>
  );
};

export default SignUpPage;



