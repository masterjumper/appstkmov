
import React from 'react' 
import {View, Image, StyleSheet, ImageBackground} from 'react-native'
import StyledText from './StyledText'
import theme from '../../theme'
const imgURL = 'https://starwars-visualguide.com/assets/img/species/'


const SpeciesHeader = props =>{
    return (
        <View style={{flexDirection:'row', paddingBottom:1}}>
                <View style={{ flexGrow:0 }}>
                <ImageBackground imageStyle={{ borderRadius: 6}} source= {{ uri:`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}}>
                {<Image style={styles.image} source= {{ uri:
                    `${imgURL + props.url.split('/')[props.url.split('/').length - 2]}.jpg`
                        }}></Image>}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText fontWeight='bold'>{props.name.toUpperCase()}</StyledText>                
                    <StyledText style={styles.language}>Language: {props.language}</StyledText>
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
        overflow:'hidden'        
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }
})

export default SpeciesHeader