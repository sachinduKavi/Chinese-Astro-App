import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Cell(prams: any) {

  return (
    <View style={styles.container}>
      {prams.children}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CACACA',
        justifyContent: 'center',
        alignItems: 'center'
    }
})





