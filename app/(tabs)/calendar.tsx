import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import Scafflod from '@/components/ui/Scafflod'
import AppbarCustom from '@/components/ui/AppbarCustom'

export default class calendar extends Component {
  render() {
    return (
      <Scafflod appbar={<AppbarCustom title="Calendar" />}>
        <>
            <Calendar/>

        </>
      </Scafflod>
    )
  }
}
