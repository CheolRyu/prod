import React from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading, Asset } from 'expo';
import Navigation from './navigation';
import { Block } from './components';
import * as constants from './constants';

//import all used images here!!!
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png')
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  handleResourceAsync = async () => {
    //we are catching all images
    // for better performance on the app.
    const catchImage = images.map(img => {
      Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(catchImage);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourceAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return (
      <Block style={styles.container}>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
