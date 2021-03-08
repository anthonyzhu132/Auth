import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardItem from '../components/common/CardItem';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <TextInput style={{ height: 20, width: 100 }}>

          </TextInput>
        </CardItem>
        <CardItem>
          <TextInput>
            
          </TextInput>
        </CardItem>
        <CardItem>
          <Button>
            Log in
          </Button>
        </CardItem>
      </Card>
    );
  };
};

export default LoginForm;