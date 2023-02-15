import React from "react"
import { View , StyleSheet} from "react-native"
//import StyledText from './StyledText'
import ProductsHeader from './ProductsHeader'
import ProductsStats from './ProductsStats'
import theme from "../../theme"

const Products = props => (    
    <View key={props.id} style={styles.container}>
            <ProductsHeader {...props}/>
            <ProductsStats {...props}/>
    </View>
)

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
        /* backgroundColor:Platform.select({
            android:theme.colors.primary,
            ios:'orange',
            default:'purple'
        }), */
        alignSelf:'flex-start',
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }

})
export default Products