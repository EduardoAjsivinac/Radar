import React, {Component} from "react";
import {View, StyleSheet, Text, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RadarImage } from './components/RadarImage'

const Tab = createMaterialTopTabNavigator();
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


function HomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
    top: {
      flex: 0.3,
      backgroundColor: "grey",
      borderWidth: 5,
      borderTopLeftRadius: 200,
      borderTopRightRadius: 175,
    },
    middle: {
      flex: 0.3,
      backgroundColor: "beige",
      borderWidth: 5,
    },
    bottom: {
      position: "absolute",
      left: 75,
      top : 75,
      backgroundColor: "pink",
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      width: 5,
      height: 5,
    },
  });

  return (
     <View style={styles.container}>
        <View style={styles.top} >
          <View style={styles.bottom}/>
        </View>
        <RadarImage/>
      </View>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default class App extends Component
{
  render()
  {
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

