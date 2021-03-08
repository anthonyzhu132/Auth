import React, { Component } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardItem from '../components/common/CardItem';
import Input from '../components/common/Input';

class LoginForm extends Component {
  state = { email: '', password: '' };

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