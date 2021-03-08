import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componenetWillMount() {
     firebase.initializeApp({
      apiKey: "AIzaSyAJNBgaWqwOVYtxMsF7lE5wbAjh9xzo70U",
      authDomain: "auth-ebd5b.firebaseapp.com",
      projectId: "auth-ebd5b",
      storageBucket: "auth-ebd5b.appspot.com",
      messagingSenderId: "223253966324",
      appId: "1:223253966324:web:9f7207787272156e155da1",
      measurementId: "G-TT2BQKB7Z7"
     });
  }
  
  render() {
    <View>
      <Header headerText="Authentication" />
      <Text> An App</Text>
    </View>
  };
};

export default App;