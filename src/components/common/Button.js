import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress, text} style={buttonStyle}>
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    backgroundRadius: 5,
    borderColor: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    maginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10, 
    paddingBottom: 10
  }
}

export default Button;