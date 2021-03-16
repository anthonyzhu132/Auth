import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';
import Button from './components/common/Button';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    const firebaseCofig = {
      apiKey: "AIzaSyAJNBgaWqwOVYtxMsF7lE5wbAjh9xzo70U",
      authDomain: "auth-ebd5b.firebaseapp.com",
      projectId: "auth-ebd5b",
      storageBucket: "auth-ebd5b.appspot.com",
      messagingSenderId: "223253966324",
      appId: "1:223253966324:web:9f7207787272156e155da1",
      measurementId: "G-TT2BQKB7Z7"
    }

     firebase.initializeApp(firebaseCofig);

     firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      };
     })
  }

  renderContent() {
    if(this.state.loggedIn) {
      return (
        <Button>
          Log out 
        </Button>
      )
    } else {
      <LoginForm/>
    }
  }

  render() {
    return (
    <View>
      <Header headerText="Authentication"/>
      {this.renderContent()}
    </View>
    );
  };
};

export default App;