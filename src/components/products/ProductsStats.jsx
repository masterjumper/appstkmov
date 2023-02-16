import React from 'react' 
import {View} from 'react-native'
import StyledText from './StyledText'

const parseThounsands = value =>{    
    return value == 'unknown' ? String(value) : 
        value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 
        value >= 1000000 ? `${Math.round(value/1000000)}M` : 
         `${Math.round(value/100)/10}k`     
}

const parseHigth = value =>{
    //
    return value == 'unknown' ? String(value) : 

        /* value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 

        value >= 1000000 ? `${Math.round(value/1000000)}M` :  */

         `${Math.round(value/10)/10}` 

    
}

const ProductsStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>            
            <StyledText fontWeight='bold' align='center'> {props.proimp}</StyledText>
            <StyledText align='center'>Price</StyledText>
            
        </View>        
        <View>            
            <StyledText fontWeight='bold' align='center'>{props.profecact}</StyledText>
            <StyledText >Last Update</StyledText>
            
        </View>
        
        {/* <View>            
            <StyledText fontWeight='bold' align='center'> {props.prostk}</StyledText>
            <StyledText >Stock</StyledText>
        </View>
        
        <View>            
            <StyledText fontWeight='bold' align='center'> {props.procodbar}</StyledText>
            <StyledText >CodeBar</StyledText>            
        </View> */} 
        
    </View>
    )
}

export default ProductsStats