// must define React to let runner load standard "REACT"
import React, {Component} from 'react';
// View components from react native if we use "View" and "Text" tags
import { AppRegistry, Text, View, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, Input, ThemeProvider } from 'react-native-elements';

// icon
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = {
  Button: {
    containerStyle: {
        // marginTop: 50,
        margin: 10,
    },
  },

  Input: {
    containerStyle: {
        marginLeft: 100,
        marginRight: 100,
    }
  },

}

const styles = {
  shadowBox : {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 2 },
  },
}
export default class extends Component {

  constructor(props){
    super(props)
    this.state = {

    }


    this.state.list = [
      'Thao',
      'Cung la Thao nhung chu dai hon',
      'Van la Thao'
    ]
  }

  renderChild(){
    return (
      <View> </View>
    )
  }

  render(){
    return (
      <View style={{flex: 10, backgroundColor: "black"}} >
        <View style={{flex: 2.5}}></View>
        <View style={{flex: 5}}>
          <Swiper
            showsButtons={false}
            showsPagination={false}
            loadMinimal={true}
            >
            <View style={{flex: 1, ...styles.shadowBox,  alignItems: "center", justifyContent: "center"}}>
              <Text>Hello world</Text>
            </View>

            <View style={{flex: 1, ...styles.shadowBox,  alignItems: "center", justifyContent: "center"}}>
              <Text>Helli world</Text>
            </View>

            <View style={{flex: 1, ...styles.shadowBox,  alignItems: "center", justifyContent: "center"}}>
              <Text>Hella</Text>
            </View>
          </Swiper>
        </View>
        <View style={{flex: 2.5}}></View>
      </View>
    )
  }
}

// AppRegistry.registerComponent('myproject', () => Swiper)

// export to make the render function 'visible' to the web runner
// export default SimpleLayout;
//
// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, View } from 'react-native'
//
// import Swiper from 'react-native-swiper';
//
// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
//
// export default class SwiperComponent extends Component {
//   render() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     )
//   }
// }
//
// AppRegistry.registerComponent('myproject', () => SwiperComponent)
