
import React from 'react' 
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import theme from '../../theme'

const ProductsHeader = props =>{
    return (
        <View style={{flexDirection:'row', paddingBottom:1}}>
                <View style={{ flexGrow:0 }}>               
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language}>{props.prodsc.toUpperCase()}{props.proid}</StyledText>                    
                </View>
        </View>        
    )}

const styles = StyleSheet.create({    
    language:{
        color: theme.colors.white,
        padding:4,
        backgroundColor:theme.colors.primary,
        alignSelf:'flex-start',
        marginTop:4,
        marginBottom:4,
        borderRadius:4,
        overflow:'hidden',
        fontSize: 18,
        fontWeight: 'normal',        
    },
})

export default ProductsHeader