import React, { Component, useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

class RadarImage extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0



  styles = StyleSheet.create({
    container: {
      position : "absolute",
      borderColor : "#000",
      borderWidth : 2,
      borderColor : "green",
      backgroundColor: "#fff",
    },
  });

  
  render() {
    var tempAncho = this.props.ancho/3
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' , backgroundColor : "#000", position : "relative"}}>
      <View style={[
        this.styles.container,
        {
          top : this.props.superior,
          width : this.props.ancho,
          height : this.props.ancho/2,
          borderTopLeftRadius : this.props.ancho/2,
          borderTopRightRadius : this.props.ancho/2,
        }
      ]}>
    </View>
    <View style={[
        this.styles.container,
        {
          top : this.props.superior+(tempAncho/2),
          width : this.props.ancho-tempAncho,
          height : (this.props.ancho-tempAncho)/2,
          borderTopLeftRadius : (this.props.ancho-tempAncho)/2,
          borderTopRightRadius : (this.props.ancho-tempAncho)/2,
        }
      ]}>
    </View>
    <View style={[
        this.styles.container,
        {
          top : this.props.superior+tempAncho,
          width : (this.props.ancho-(tempAncho*2)),
          height : (this.props.ancho-tempAncho*2)/2,
          borderTopLeftRadius : (this.props.ancho-tempAncho*2)/2,
          borderTopRightRadius : (this.props.ancho-tempAncho*2)/2,
        }
      ]}>
    </View>
    </View>
    );
  }
}

export default RadarImage;