import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Launch = () => {
  return (
    <View style={styles.container}>
      <Text>nutri</Text>
      <img className='logo' src={'/icons/Leaves.svg'}/>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontFamily: 'Sora',
    color: '#556B2F'
  },

  logo: {
    height: '30px',
    width: '30px'    
  }
});

export default Launch;