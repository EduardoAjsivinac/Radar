import React, {Component} from "react";
import {View, StyleSheet, Text, Button, FlatList, ListItem} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RadarImage from './components/RadarImage'
import PointRadar from "./components/PointRadar";
import RadarBar from "./components/RadarBar";

const Tab = createMaterialTopTabNavigator();

function Radar1Screen({ navigation }) {
  const  puntos = [
    {grados: "-25", distancia : "26"},
    {grados: "0", distancia : "26"}
  ]
  const styles = StyleSheet.create({
    container: {
      position : "absolute",
      borderColor : "#000",
      borderWidth : 2,
      borderColor : "green",
      backgroundColor: "#fff",
    },
    
  });

  //<RadarBar superior = {25} ancho = {180}/>
  return (
    <View>
      <RadarImage superior = {25} ancho = {360}/>
      <RadarBar superior = {25} ancho = {360}/>
      {parseData(puntos)}
    </View>
  );
}



function Radar2Screen({ navigation }) {

  const  puntos = [
    {grados: "45", distancia : "26"}
  ]


  const styles = StyleSheet.create({
    container: {
      position : "absolute",
      borderColor : "#000",
      borderWidth : 2,
      borderColor : "green",
      backgroundColor: "#fff",
    },
    
  });
  return (
    
    <View>
      <RadarImage superior = {25} ancho = {360}/>

      {parseData(puntos)}
    </View>
  );
}


function parseData(elementos){
  if (elementos){
    return elementos.map((data,i)=>{
      return (
        <PointRadar key = {i} top={getY(data)} left={getX(data)}/>
        )
    })
  }

}

function getX(data){
  return Math.sin(data.grados*Math.PI/180)*data.distancia*(4.5)
}

function getY(data){
  return Math.cos(data.grados*Math.PI/180)*data.distancia*(4.5)
}

export default class App extends Component
{
  render()
  {
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Radar 1" component={Radar1Screen} />
          <Tab.Screen name="Radar 2" component={Radar2Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

