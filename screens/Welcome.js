import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Block, Text } from '../components';

export default class Welcome extends Component {
  render() {
    return (
      <Block>
        <Text>Welcome</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
