import { View, Text } from 'react-native'
import React from 'react'
import Scafflod from '@/components/ui/Scafflod'
import AppbarCustom from '@/components/ui/AppbarCustom'
import { StyleSheet } from 'react-native'
import Cell from '@/components/Cell'
import { Image } from 'react-native'

export default function generate() {
  return (
    <Scafflod appbar={<AppbarCustom title="Generate" />}>
      <>
  
        
        <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Details</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>Sachindu Kavishka</Text>
                  </View>
                </View>
        
                <View style={styles.spacer}></View>
        
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Method</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>Schrödinger</Text>
                  </View>
                </View>
        
                <View style={styles.spacer}></View>
        
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Date</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>2001/03/10</Text>
                  </View>
                </View>
        
                <View style={styles.spacer}></View>
        
                <View style={styles.tableRow}>
                  <View style={styles.tableCell1}>
                    <Text>Sign</Text>
                  </View>
                  <View style={styles.tableCell2}>
                    <Text>Pisces</Text>
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
                    <Image source={require('@/assets/images/logo.png')}/>
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

