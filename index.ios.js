// place code in here for IOS!!

//import a libraryto help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// './' means it starts from the current folder
//Create a component
const App = ()=>(
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//Render it to the device
AppRegistry.registerComponent('albums', ()=> App);