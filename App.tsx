import { View, Text } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  )
}