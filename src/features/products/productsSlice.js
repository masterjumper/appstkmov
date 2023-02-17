
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productsSlice = createSlice(
 
  {
    name: 'products',
    initialState:{        
        data:[],
        filtered:[],
        master:[],
        loading:true,        
        refreshing:false,        
        registered:null
    },
    reducers: {
        getList: (state, action) => {                        
            state.filtered = [...state.data, ...action.payload];
            state.master = [...state.data, ...action.payload];
            state.loading = true;            
            },        
        setRefresh:(state, action)=>{
          state.refreshing =  action.payload
        },                       
        getListFil: (state, action) => {          
            state.filtered = action.payload;
            state.loading = false; 
        },
        getListAll:(state, action)=>{          
          state.filtered = [];
          state.filtered = [...state.master];          
          state.loading = false; 
        },
        setItem:(state, action)=>{
          state.registered = true;
        }       
      //other action item of list: something     
    },
  })

  export const getAsync = (url) => async (dispatch) => {    
    if(url){            
      try {                    
          const response = await axios.get(url)
                                        .then((res) => { 
                                          dispatch(getList(res.data))
                                          dispatch(setRefresh(true))                                                                           
                                        })
      } catch (err) {
        throw new Error(err);
      }
    }else{dispatch(setRefresh(false))}
  }

export const get_fil=(fil, lista) => (dispatch) =>{  
  if(fil){    
      const filtered =  lista.master.filter(
            (item) => item.prodsc.toUpperCase().includes(fil.toUpperCase())
          );
      dispatch(getListFil(filtered))                                 
  }
}

export const get_all = () => (dispatch) =>{  
  dispatch(getListAll())
}

export const set_item = (url, proid, proimp) => async(dispatch) =>{  
  if(url){  
    try { 
          const response = await axios.put(url + '/' + proid + '/' + proimp)
                              .then((res) => {                                 
                                dispatch(setItem())
                              })
                              
        } catch (err) {
          throw new Error((err));
        }
  }  
}
// Action creators are generated for each case reducer function  
export const { getList, setNext, setRefresh, setCount, setPrevious, getListFil, getListAll, setItem } = productsSlice.actions

export default productsSlice.reducer