import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerStlye}>
      <Text>
        <ActivityIndicator />
      </Text>
    </View>
  );
};

const styles = {
  spinnerStlye = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Spinner;
