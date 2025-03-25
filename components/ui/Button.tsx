import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { StyleSheet } from 'react-native'

export default class ButtonAstro extends Component<{
    title: string,
    active: boolean,
    action: (event: GestureResponderEvent) => void
}> {
  render() {

    const {title, active, action} = this.props

    return (
    //   <View style={styles.button}>
        <TouchableOpacity 
        onPress={action}
        style={{...styles.button, backgroundColor: active?'#F83D16': '#EEF0F4',}}>
            <Text style={{...styles.buttonText, color: active? 'white': '#F83D16'}}>{title}</Text>
        </TouchableOpacity>
    //   </View>
    )
  }
}


const styles = StyleSheet.create({
    button: {
        margin: 10,
        marginBottom: 0,
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 0,
        borderColor: '#F83D16',
    },

    buttonText: {
        fontWeight: 'bold'
    }

})
