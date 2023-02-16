import React from 'react';
import { View } from 'react-native';
import {Routes, Route}  from 'react-router-native';

//import SpeciesList from '../species/SpeciesList'
import ProductsList from '../products/ProductsList';
import ProductsDetail from '../products/ProductsDetail';

import AppBar from '../AppBars/AppBar'
import Home from '../Home/Home'

const Main = () => {
    return (      
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path="/" element={<Home />}>                    
                </Route>                             
                <Route 
                    path="products" 
                    element={<ProductsList />} 
                    > 
                </Route>
                <Route 
                    path="productsdetail" 
                    element={<ProductsDetail />} 
                    > 
                </Route>       
            </Routes> 
        </View>
    ) 
}
export default Main

/*
  <Route 
                    path="species" 
                    element={<SpeciesList />} 
                    > 
                </Route>
                 */