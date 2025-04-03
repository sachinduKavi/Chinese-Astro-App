import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Scafflod from '@/components/ui/Scafflod'
import AppbarCustom from '@/components/ui/AppbarCustom'
import { StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { detailsInterface } from '@/redux/details-slice'

import Image1 from '@/assets/graphs/a1.png';
import Image2 from '@/assets/graphs/2.png';
import Image3 from '@/assets/graphs/3.png';
import Image4 from '@/assets/graphs/4.png';
import Image5 from '@/assets/graphs/5.png';
import Image6 from '@/assets/graphs/6.png';
import DefaultImage from '@/assets/images/c2.png';

export default function Generate() {
  const details: detailsInterface = useSelector((state: RootState) => state.detailsSlice)
  const { width, height } = Dimensions.get('window');
  const [image, setImage] = useState<any>(DefaultImage);

  const getImage = (time: number) => {
    if (time < 1) return Image1;
    if (time < 3) return Image2;
    if (time < 5) return Image3;
    if (time < 7) return Image4;
    if (time < 9) return Image5;
    if (time < 11) return Image6;
    return DefaultImage;
  }

  useEffect(() => {
    const dateArray = details.date.toString().split(',');
    const timeString = dateArray[1]?.split(':')[1]?.trim(); // Extracting the number after "Time: "
    const time = parseInt(timeString, 10); // Convert to a number
    
    console.log("Extracted Time:", time); // Check the value

    if (!isNaN(time)) {
      setImage(getImage(time));
    }
  }, [details.date]);

  return (
    <Scafflod appbar={<AppbarCustom title="Generate" />}>
      <>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell1}><Text>Details</Text></View>
            <View style={styles.tableCell2}><Text>{details.details}</Text></View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}><Text>Method</Text></View>
            <View style={styles.tableCell2}><Text>{details.method}</Text></View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}><Text>Date</Text></View>
            <View style={styles.tableCell2}><Text>{details.date}</Text></View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}><Text>Sign</Text></View>
            <View style={styles.tableCell2}><Text>{details.sign}</Text></View>
          </View>
        </View>

        <Image source={image} style={{ width, height: 500, resizeMode: 'contain' }}/>
      </>
    </Scafflod>
  )
}

const styles = StyleSheet.create({
  table: {
    margin: 10,
    elevation: 0.5,
    backgroundColor: 'white',
  },
  tableCell1: { flex: 1 },
  tableCell2: { flex: 2 },
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
});
