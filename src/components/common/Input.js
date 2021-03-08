import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
   return (
     <View>
      <Text>{props.label}</Text>
      <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      style={{ height: 20, width: 100 }}
      />
     </View>
   );
};

export default Input;