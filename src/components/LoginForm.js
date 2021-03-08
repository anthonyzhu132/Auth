import React, { Component } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardItem from '../components/common/CardItem';
import Input from '../components/common/Input';

class LoginForm extends Component {
  state = { text: ''};

  render() {
    return (
      <Card>
        <CardItem>
          <Input
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          />
        </CardItem>
        <CardItem>
          
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