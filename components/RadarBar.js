import React, { Component, useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Dimensions} from "react-native";


class RadarBar extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.Value(0)
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds

    Animated.loop( Animated.sequence([
      Animated.timing(this.state.fadeAnim, {
        toValue: 0.3,
        duration: 700,
        useNativeDriver : true,
      }),
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver : true,
      })
    ])).start();
  };


  
  render() {
    this.fadeIn();
    return (
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' , backgroundColor : "#000", position : "relative"}}>
        <Animated.View
          style={[
            styles.container,
            {
              // Bind opacity to animated value
              opacity: this.state.fadeAnim,
              top : this.props.superior,
              width : this.props.ancho,
              height : this.props.ancho/2,
                borderTopLeftRadius : this.props.ancho/2,
                borderTopRightRadius : this.props.ancho/2,
            }
          ]}
        >
            
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      position : "absolute",
      borderColor : "#000",
      borderWidth : 2,
      borderColor : "green",
      backgroundColor: "green",
    },
  });
export default RadarBar;