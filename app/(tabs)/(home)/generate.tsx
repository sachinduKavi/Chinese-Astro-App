import { View, Text } from 'react-native'
import React from 'react'
import Scafflod from '@/components/ui/Scafflod'
import AppbarCustom from '@/components/ui/AppbarCustom'
import { StyleSheet } from 'react-native'
import Cell from '@/components/Cell'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { detailsInterface } from '@/redux/details-slice'

export default function generate() {

  const details:detailsInterface  = useSelector((state: RootState) => state.detailsSlice)

  return (
    <Scafflod appbar={<AppbarCustom title="Generate" />}>
      <>
  
        
        <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Details</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>{details.details}</Text>
                  </View>
                </View>
        
                <View style={styles.spacer}></View>
        
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Method</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>{details.method}</Text>
                  </View>
                </View>
        
                <View style={styles.spacer}></View>
        
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Date</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>{details.date}</Text>
                  </View>
                </View>
        
                <View style={styles.spacer}></View>
        
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Sign</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>{details.sign}</Text>
                  </View>
                </View>
              </View>


        <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row'}}>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
            </View>
            <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row'}}>
                <Cell></Cell>
                <Cell>
                    <Image source={require('@/assets/images/logo-1.png')} style={{width: 140, height: 140}}/>
                </Cell>
                <Cell></Cell>
            </View>

            <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row'}}>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
            </View>
        </View>





      </>

    </Scafflod>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        aspectRatio: 1,
        flexDirection: 'column'
    },

    table: {
        margin: 10,
        elevation: 0.5,
        backgroundColor: 'white',
      },
      tableCell1: {
        flex: 1,
      },
      tableCell2: {
        flex: 2,
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      
      spacer: {
        height: 1,
        backgroundColor: 'rgba(202, 202, 202, 0.4)',
        marginHorizontal: 10,
      },
})

