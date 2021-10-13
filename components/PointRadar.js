import React, { Component, useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Dimensions} from "react-native";

class PointRadar extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.Value(0)
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds

    Animated.loop( Animated.sequence([
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver : true,
      }),
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver : true,
      })
    ])).start();
  };


  
  render() {
    this.fadeIn();
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: this.state.fadeAnim,
              top : 200-this.props.top,
              left : (Dimensions.get('window').width/2) + this.props.left-5,
            }
          ]}
        >
          <Text>1</Text>
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    position: "absolute",
    height : 10,
    width : 10,
    borderRadius: 10,
    backgroundColor: "green",
    top : 50,
    left: 50
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  }
});

export default PointRadar;