import React,{useEffect} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler, Alert} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 

const imgURL = 'https://starwars-visualguide.com/assets/img/species/'

const SpeciesDetail = (props) => {
    let specie = useLocation()
    let navigate = useNavigate ()
    useEffect(() => {
        const backAction = () => {
         navigate('/species')          
        };

        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    return (    
        <View style={styles.container}>
            <View style={{flexDirection:'row', paddingBottom:1}}>
                <View style={{ flexGrow:0 }}>
                <ImageBackground imageStyle={{ borderRadius: 6}} source= {{ uri:`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}}>
                {<Image style={styles.image} source= {{ uri:
                    `${imgURL + specie.state.item.url.split('/')[specie.state.item.url.split('/').length - 2]}.jpg`
                        }}></Image>}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language} fontWeight='bold'>{specie.state.item.name.toUpperCase()}</StyledText>                                    
                </View>   
            </View>
            <View style={{justifyContent:'space-around'}}>

                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Language:</StyledText><Text>  {specie.state.item.language}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >AVG Height:</StyledText><Text> {parseHigth(specie.state.item.average_height)}</Text>
                </View>        
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Classification:</StyledText><Text> {specie.state.item.classification}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Designation:</StyledText><Text> {specie.state.item.designation}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>AVG lifespan:</StyledText><Text> {specie.state.item.average_lifespan} yrs.</Text>
                </View>                                
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Eye Colors:</StyledText><Text> {specie.state.item.eye_colors}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Hair Colors:</StyledText><Text> {specie.state.item.hair_colors}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Skin Colors:</StyledText><Text> {specie.state.item.skin_colors}</Text>
                </View>
                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({  
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },  
    language:{
        color: theme.colors.white,
        padding:4,
        backgroundColor:theme.colors.primary,
        alignSelf:'center',
        marginTop:4,
        marginBottom:4,
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:150,
        height:150,
        borderRadius:4,
    }
})

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

         `${Math.round(value/10)/10} mts.` 

    
}

export default SpeciesDetail