import React from 'react' 
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'

const ProductsStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>            
            <StyledText style={styles.properties}> {props.proimp}</StyledText>
            <StyledText  style={styles.propertiesTitle}>Precio</StyledText>            
        </View>        
        <View>            
            <StyledText style={styles.properties}>{props.profecact}</StyledText>
            <StyledText style={styles.propertiesTitle}>Fecha Actualizacion</StyledText>            
        </View>        
    </View>
    )
}

const styles = StyleSheet.create({          
    properties: {
        fontSize: 18,
        fontWeight: 'bold',        
        align:'center'
    },
    propertiesTitle: {
        fontSize: 16,
        //fontWeight: 'bold',
        align:'center'
    },
})

export default ProductsStats