import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardItem from '../components/common/CardItem';
import Input from '../components/common/Input';


class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  //Attempts to sign in with user's provided email and password
  //If there is no user, sign user up with email and password
  //If error, give error message

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: ''});

     firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Input
          secureTextEntry={false}
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry={true}
            label="password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardItem>
      </Card>
    );
  };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;