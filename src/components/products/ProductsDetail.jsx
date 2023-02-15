import React,{useEffect} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler, Alert} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 

//const imgURL = 'https://starwars-visualguide.com/assets/img/Products/'

const SpeciesDetail = (props) => {
    let product = useLocation()
    let navigate = useNavigate ()
    useEffect(() => {
        const backAction = () => {
         navigate('/Products')          
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
                {/*<Image style={styles.image} source= {{ uri:
                    `${imgURL + product.state.item.url.split('/')[product.state.item.url.split('/').length - 2]}.jpg`
                        }}></Image>*/}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language} fontWeight='bold'>{product.state.item.prodsc.toUpperCase()}</StyledText>                                    
                </View>   
            </View>
            <View style={{justifyContent:'space-around'}}>

                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Price:</StyledText><Text>  {product.state.item.proimp}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >Code Bar:</StyledText><Text> {parseHigth(product.state.item.procodbar)}</Text>
                </View>        
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Stock:</StyledText><Text> {product.state.item.prostk}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Update Date:</StyledText><Text> {product.state.item.profecact}</Text>
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