import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'




export default class Scafflod extends Component<{
    appbar: React.ReactNode, 
    children: React.ReactNode
}> {
  render() {
    const {appbar, children} = this.props;
    return (
      <View style={styles.screen}>
         {appbar}
         {children}   
      </View>
    )
  }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#EEF0F4'
        // justifyContent: 'center',
        // alignItems: 'center',
    },

})
