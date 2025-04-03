import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import WheelPickerExpo from 'react-native-wheel-picker-expo'
import { StyleSheet } from 'react-native'
import { setDetails } from '@/redux/details-slice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'

export default function FlyDatePicker() {
    const dispatch: AppDispatch = useDispatch()
    const details = useSelector((state: RootState) => state.detailsSlice)

    let dateArray: Array<string>
    useEffect(() => {
        dateArray = details.date.toString().split(',')
        console.log(dateArray)
    })
  return (
    <View style={styles.container}>
        <WheelPickerExpo 
            width={'30%'}
            initialSelectedIndex={0}
            items={Array.from({length: 32}, (_, index) => index).map((item, index) => {return {label: (index + 1).toString(), value:  (index + 1)}})}
            onChange={(e) => dispatch(setDetails({...details, date: `Date: 2001/03/${e.item.value},${dateArray[1]}`}))}
        />

        <WheelPickerExpo 
            width={'30%'}
   
            initialSelectedIndex={12}
            items={Array.from({length: 24}, (_, index) => index).map((item, index) => {return {label:  (index + 1).toString(), value:  (index + 1)}})}
            onChange={(e) => dispatch(setDetails({...details, date: `${dateArray[0]},Time: ${e.item.value}`}))}
        />

        <WheelPickerExpo 
            width={'30%'}
   
            initialSelectedIndex={9}
            items={Array.from({length: 60}, (_, index) => index).map((item, index) => {return {label:  (index + 1).toString(), value:  (index + 1)}})}
            onChange={() => {}}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 0,
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})