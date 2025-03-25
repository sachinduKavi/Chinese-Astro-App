import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

interface AppbarCustomProps {
  title: string;
  children?: React.ReactNode;
}

export default class AppbarCustom extends Component<AppbarCustomProps> {
  render() {

    const {title} = this.props
    return (
 
        <Appbar.Header 
            style={{backgroundColor: '#A57B38', elevation: 4}} >
            <Appbar.Action icon="home"  onPress={() => {}} color="white"/>
            <Appbar.Content title={title} titleStyle={{color: 'white', textAlign: 'center'}}/>
            <Appbar.Action icon="share"  onPress={() => {}} color="white"/>
        </Appbar.Header>
    
    )
  }
}
