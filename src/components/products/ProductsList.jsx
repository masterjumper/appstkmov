import React, { useEffect, useState}  from 'react';
import {SafeAreaView, FlatList, View, StyleSheet, TextInput, ActivityIndicator, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAsync, get_fil, get_all } from '../../features/products/productsSlice'

import Products from './Products';
import url from '../../constants/url';
import {Link} from 'react-router-native';

const ProductsList = () => {
  const[search, setSearch] = useState([]);

  const list = useSelector(state => state.products)  
  
  let dispatch = useDispatch();

  const [currentUrl, setcurrentUrl] = useState(url.urlproducts)  
  
  const renderLoader = () => {
    return (      
      <View styles={styles.loader}>
        {
          currentUrl == null ?  '' : <ActivityIndicator size={'large'}/>
        }
      </View>   
    )
  }

  const loadMoreItems = () => {    
    //setcurrentUrl(list.next)
  }

  useEffect(() => { 
    //if(list.next){
      dispatch(getAsync(currentUrl));       
      setSearch([])  
    //}
  //},[dispatch, currentUrl]);
  },[]);

  const searchFilter=(text)=>{    
    if(text){       
      dispatch(get_fil(text, list));
      setSearch(text);
    }else{                  
      setSearch(text);     
      dispatch(get_all());
    }
  }
  
  return (
    <SafeAreaView>
      
        <View styles={styles.container}> 
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder='Search Here'
          underlineColorAndroid="transparent"
          onChangeText={(text)=>searchFilter(text)}
        />        
        <FlatList contentContainerStyle={{ paddingBottom: 250 }}            
            data={list.filtered.map((item)=>item)}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item:item }) => (
              <TouchableOpacity activeOpacity={0.01}>
                  <Link to={'/productsdetail'} state={{item}}>
                    <Products {...item} />
                  </Link>
              </TouchableOpacity>
            )}            
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={renderLoader}                        
            onEndReached = {loadMoreItems}
            onEndReachedThreshold={0.5}
            refreshing={list.refreshing}                       
        />
        </View>    
    </SafeAreaView>
  );
};

{/* <Link to={'/speciesdetail'} state={{item}}  > 
                    <Products {...item} />
                   </Link> */}

const styles = StyleSheet.create({
  separator: {
    height: 5,
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,        
  },
  loader:{    
    margin:'center',
    alignItems:'center',    
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
  
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ProductsList;