import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({    
  vista:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',    
  }
});

const Home = () => {
  return (
    <View style={styles.vista} > 
        <Image source={require('../../../assets/darth.png')}></Image>     
        {/* <Image source={require('../../../assets/home.png')}></Image> */}
    </View>    
  );
};

export default Home;