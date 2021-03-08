import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardItem from '../components/common/CardItem';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem />
        <CardItem />
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