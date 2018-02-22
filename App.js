import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Newstand for the overwhelmed</Text>
        <Text>Developed by Joyce</Text>
        <Text>woot woot.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4e19d",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
