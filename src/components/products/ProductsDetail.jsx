import React,{useEffect, useState} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler, Alert, TextInput, SafeAreaView} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { set_item } from '../../features/products/productsSlice'
//const imgURL = 'https://starwars-visualguide.com/assets/img/Products/'
import url from '../../constants/url';

const ProductsDetail = (props) => {
    let product = useLocation()
    let navigate = useNavigate()
    let dispatch = useDispatch();

    const [currentUrl, setcurrentUrl] = useState(url.urlproducts)
    const [newProImp, setNewProImp] = useState(product.state.item.proimp);
/*     const handleChange = (e) => {
        //event.persist()
        setState({proimp:e})     
    } */

    const handleChangeProImp=(text)=>{
        if(text){ 
            //console.log('text ' + text)        
            setNewProImp(text)
            //dispatch(set_item(currentUrl , newProImp));
            console.log('newProImp' + newProImp)
        }else{
          //setSearch(text);     
          //dispatch(get_all());
        }
    }

    const handleChangeProImponblur=(text)=>{
        if(text){ 
          setNewProImp(text)                    
          console.log('On blur newProImp ' + newProImp)
          dispatch(set_item(currentUrl , newProImp))
        }else{
          //setSearch(text);     
          //dispatch(get_all());
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
                {/* <Formik
                    initialValues={{ title: '', body: '', rating: '' }}
                    //validationSchema={reviewSchema}
                    onSubmit={(values, actions) => {
                        //actions.resetForm(); 
                        //addReview(values);
                    }}
                > */}                    
                    <View style={{flexDirection:'row', paddingBottom:1}}>
                        <View style={{ flexGrow:0 }}>
                        {/* <ImageBackground imageStyle={{ borderRadius: 6}} source= {{ uri:`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}}> */}
                        {/*<Image style={styles.image} source= {{ uri:
                            `${imgURL + product.state.item.url.split('/')[product.state.item.url.split('/').length - 2]}.jpg`
                                }}></Image>*/}
                        {/* </ImageBackground>          */}
                        <Image style={styles.image} source= {{ 
                            uri:`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`
                                }}></Image>
                        </View>
                        <View style={{ flex:1, paddingLeft:10 }}>                
                            <StyledText style={styles.language} fontWeight='bold'>{product.state.item.prodsc.toUpperCase()}</StyledText>                                    
                        </View>   
                    </View>
                    <View style={{justifyContent:'space-around'}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>            
                            {/* <StyledText fontWeight='bold'>Price:</StyledText><Text>  {product.state.item.proimp}</Text> */}
                            <Text style={styles.titleText}>Price:</Text> 
                                <TextInput                                    
                                    style={styles.textInputStyle}
                                    //value={product.state.item.proimp}
                                    //placeholder='Search Here'
                                    underlineColorAndroid="transparent"                                                                        
                                    value={newProImp}                                    
                                    onChangeText={(text)=>handleChangeProImp(text)}                                    
                                    onBlur={(text)=>handleChangeProImp(text)}
                                    keyboardType='numeric'
                                />
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}> 
                            <Text style={styles.titleText}>Code Bar:</Text>           
                            <TextInput
                                    style={styles.textInputStyle}
                                    value={product.state.item.procodbar}
                                    //placeholder='Search Here'
                                    underlineColorAndroid="transparent"
                                    //onChangeText={(text)=>changeInput(text)}
                                />                    
                        </View>        
                        
                        <View style={{flexDirection:'row', alignItems:'center'}}> 
                            <Text style={styles.titleText}>Last Update:</Text>           
                            <TextInput
                                    style={styles.textInputStyle}
                                    value={product.state.item.profecact}
                                    //placeholder='Search Here'
                                    underlineColorAndroid="transparent"
                                    //onChangeText={(text)=>changeInput(text)}
                                />                    
                        </View>                        
                        <View style={{flexDirection:'row', alignItems:'center'}}>            
                            <StyledText fontWeight='bold'>Stock:</StyledText><Text> {product.state.item.prostk}</Text>
                        </View>
                    </View>                    
                {/* </Formik>  */}               
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
        overflow:'hidden'        
    },
    image:{
        width:150,
        height:150,
        borderRadius:4,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    textInputStyle:{
    height:40,
    borderWidth:1,
    paddingLeft:10,
    margin:5,
    borderColor:'black',
    backgroundColor:'grey',
    borderRadius: 6
    },
})

export default ProductsDetail