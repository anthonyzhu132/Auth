import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justiftyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardItem }