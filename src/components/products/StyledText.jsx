import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,    
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },  
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textAlignCenter:{
    textAlign:'center',
  }
});

const StyledText = ({align, color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,    
    align === 'center' && styles.textAlignCenter,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <Text style={textStyle} {...props} />;
};

export default StyledText;