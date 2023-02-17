import React,{useEffect, useState} from "react"
import {View, StyleSheet, Text, BackHandler, TextInput, SafeAreaView} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 
import { useDispatch } from 'react-redux';
import { set_item } from '../../features/products/productsSlice'
import url from '../../constants/url';

const ProductsDetail = (props) => {
    let product = useLocation()
    let navigate = useNavigate()
    let dispatch = useDispatch();

    const [currentUrl, setcurrentUrl] = useState(url.urlproducts)
    const [newProImp, setNewProImp] = useState(product.state.item.proimp);
    const [newProId, setNewProId] = useState(product.state.item.proid);

    const handleChangeProImp=(text)=>{
        if(text){             
            setNewProImp(text)            
            dispatch(set_item(currentUrl , newProId, newProImp))            
        }else{
            setNewProImp(text);               
        }
    }

    const handleChangeProImpOnBlur=(text)=>{
        if(text){                                  
            dispatch(set_item(currentUrl , newProId, newProImp))                        
        }
    }
    
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
        
        <SafeAreaView>
            <View style={styles.container}>                                                   
                    <View style={{flexDirection:'row', paddingBottom:1}}>                        
                        <View style={{ flex:1, paddingLeft:10 }}>                
                            <StyledText style={styles.language}>{product.state.item.prodsc.toUpperCase()}</StyledText>                                    
                        </View>   
                    </View>
                    <View style={{justifyContent:'space-around'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>                                        
                            <Text style={styles.titleText}>Precio:</Text> 
                                <TextInput                                    
                                    style={styles.textInputStyle}                                    
                                    underlineColorAndroid="transparent"                                                                        
                                    value={newProImp}                                    
                                    onChangeText={(text)=>handleChangeProImp(text)}                                    
                                    onBlur={(text)=>handleChangeProImpOnBlur(text)}
                                    keyboardType='numeric'
                                />
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}> 
                            <Text style={styles.titleText}>Fecha Actualizacion: {product.state.item.profecact}</Text>                                       
                        </View>                            
                    </View>                    
            </View>
        </SafeAreaView>    
        
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
        overflow:'hidden',
        fontSize: 20,
        fontWeight:'bold',                     
    },    
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    textInputStyle:{
        fontSize: 20,        
        height:40,
        borderWidth:1,
        paddingLeft:10,
        margin:10,
        borderColor:'black',
        backgroundColor:'silver',
        borderRadius: 6,
        flex:1
    },
})

export default ProductsDetail