import { StatusBar } from 'expo-status-bar';
import {NativeRouter} from 'react-router-native'
import Main from './src/components/Main/Main';
import { store } from './src/store/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
      <>
        <Provider store={store}>
          <StatusBar style='light'/>
          <NativeRouter>
            <Main />
          </NativeRouter>   
        </Provider>
      </>
  );
}