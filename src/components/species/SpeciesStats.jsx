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

const SpeciesStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>            
            <StyledText fontWeight='bold' align='center'> {parseHigth(props.average_height)}</StyledText>
            <StyledText align='center'>AVG Height</StyledText>
            
        </View>        
        <View>            
            <StyledText fontWeight='bold' align='center'>{props.classification}</StyledText>
            <StyledText >Classification</StyledText>
            
        </View>
        
        <View>            
            <StyledText fontWeight='bold' align='center'> {props.designation}</StyledText>
            <StyledText >Designation</StyledText>
        </View>
        
        <View>            
            <StyledText fontWeight='bold' align='center'> {props.average_lifespan}</StyledText>
            <StyledText >AVG lifespan</StyledText>            
        </View> 
        
    </View>
    )
}

export default SpeciesStats