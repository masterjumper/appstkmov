import React from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import StyledText from './StyledText'
import { Link, useLocation } from 'react-router-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.appBar.primary,    
    //backgroundColor: 'black',    
    flexDirection:'row',    
  },
  scroll:{
    paddingBottom:15,
    paddingHorizontal:5,    
  },
  text:{    
    color: '#999',
    paddingHorizontal: 10
  },
  active:{    
    //color: theme.appBar.textPrimary
    color: 'yellow'
  }  
});

const AppBarTab = ({children, to})=>{
  const { pathname } = useLocation()
  const active = pathname === to
  
  const textStyles = [    
    styles.text,
    active && styles.active   
  ]

  return(
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles} >
        {children}
      </StyledText>        
    </Link>
  )
}

const AppBar = () => { 

  return (
    <View style={ styles.container }>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab active to="/">Home</AppBarTab>
        {/* <AppBarTab active to="/species">Species</AppBarTab> */}
        <AppBarTab active to="/products">Products</AppBarTab>
      </ScrollView>
    </View>)
}

export default AppBar