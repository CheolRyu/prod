import React, { Component } from 'react';
import { Image, FlatList, StyleSheet } from 'react-native';
import { Button, Block, Text } from '../components';
import { theme } from '../constants';

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  state = {};
  renderIllustrations() {
    const { illustations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => <Image source={item.source} resizeMode="contain" style={{}} />}
      />
    );
  }
  renderSteps() {
    return (
      <Block>
        <Text> * * *</Text>
      </Block>
    );
  }
  render() {
    return (
      <Block>
        <Block center middle flex={0.5}>
          <Text h1 center bold>
            Your Body.
            <Text h1 primary>
              {' '}
              Healthier.
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={theme.sizes.padding * 2}>
          <Button gradient onPress={() => {}}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => {}}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button onPress={() => {}}>
            <Text center caption gray>
              Terms of Service
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') }
  ]
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
