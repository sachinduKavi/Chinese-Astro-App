import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AppbarCustom from '@/components/ui/AppbarCustom';
import Scafflod from '@/components/ui/Scafflod';
import ButtonAstro from '@/components/ui/Button';
import { RootState, AppDispatch } from '@/redux/store';
import { setDetails } from '@/redux/details-slice';
import { useSelector, useDispatch } from 'react-redux';
import FlyDatePicker from '@/components/FlyDatePicker';
import { Overlay } from 'react-native-elements';
import { useState } from 'react';


export default function Index() {
  const router = useRouter();

  // Global details state
  const details = useSelector((state: RootState) => state.detailsSlice);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const [overlay, setOverlay] = useState<boolean>(true)
  const [user, setUser] = useState<{
    name: string,
    gender: string,
    age: number
  }>({
    name: 'Sachindu Kavishka',
    gender: 'Male',
    age: 24
  })

  // const [details, setDetails] = React.useState<{
  //   details: string,
  //   method: string,
  //   date: string,
  //   sign: string
  // }>({
  //   details: 'Sachindu Kavishka',
  //   method: 'Schrödinger',
  //   date: '2001/03/10',
  //   sign: 'Pisces'
  // });
  const CITIES = 'Jakarta,Bandung,Sumbawa,Taliwang,Lombok,Bima'.split(',');
  return (
    <Scafflod appbar={<AppbarCustom title="Qi Men Dun Jia" />}>
      <>
        <Image
          source={require('@/assets/images/user.png')}
          resizeMode="contain"
          style={{ alignSelf: 'center', margin: 10, width: 70, height: 70 }}
        />

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell1}>
              <Text>Name</Text>
            </View>
            <View style={styles.tableCell2}>
            <TextInput style={{padding: 0, margin: 0}} value={user?.name} onChange={(e) => {
              setUser({...user, name: e.nativeEvent.text});
            }}/>
            </View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}>
              <Text>Gender</Text>
            </View>
            <View style={styles.tableCell2}>
            <TextInput style={{padding: 0, margin: 0}} value={user?.gender} onChange={(e) => {
              setUser({...user, gender: e.nativeEvent.text});
            }}/>
            </View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}>
              <Text>Age</Text>
            </View>
            <View style={styles.tableCell2}>
            <TextInput style={{padding: 0, margin: 0}} value={user?.age.toString()} onChange={(e) => {
              setUser({...user, age: parseInt(e.nativeEvent.text)});
            }}/>
            </View>
          </View>
        </View>

        <Image
          source={require('@/assets/images/yinyan.png')}
          resizeMode="contain"
          style={{ alignSelf: 'center', margin: 10, width: 70, height: 70 }}
        />
      </>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell1}>
            <Text>Details</Text>
          </View>
          <View style={styles.tableCell2}>
            <TextInput style={{padding: 0, margin: 0}} value={details?.details} onChange={(e) => {
              dispatch(setDetails({...details, details: e.nativeEvent.text}));
            }}/>
          </View>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.tableRow}>
          <View style={styles.tableCell1}>
            <Text>Method</Text>
          </View>
          <View style={styles.tableCell2}>
          <TextInput style={{padding: 0, margin: 0}} value={details?.method} onChange={(e) => {
              dispatch(setDetails({...details, method: e.nativeEvent.text}));
            }}/>
          </View>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.tableRow}>
          <View style={styles.tableCell1}>
            <Text>Date</Text>
          </View>
          <View style={styles.tableCell2}>

          <TouchableOpacity onPress={() => setOverlay(true)}>
          <TextInput style={{padding: 0, margin: 0}} value={details?.date} 
          editable={false}
          onChange={(e) => {
              dispatch(setDetails({...details, date: e.nativeEvent.text}));
            }}/>

            </TouchableOpacity>  
          
          </View>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.tableRow}>
          <View style={styles.tableCell1}>
            <Text>Sign</Text>
          </View>
          <View style={styles.tableCell2}>
          <TextInput style={{padding: 0, margin: 0}} value={details?.sign} onChange={(e) => {
              dispatch(setDetails({...details, sign: e.nativeEvent.text}));
            }}/>
          </View>
        </View>
      </View>

      <ButtonAstro
        title="Generate"
        active={true}
        action={() => {
          router.push('/generate');
        }}
      />
      <ButtonAstro title="Cancel" active={false} action={() => {}} />

      
      <Overlay isVisible={overlay} onBackdropPress={() => setOverlay(pre => !pre)}>

        <FlyDatePicker />
    
      </Overlay>
      
    </Scafflod>
  );
}

const styles = StyleSheet.create({
  popup: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%'
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
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  spacer: {
    height: 1,
    backgroundColor: 'rgba(202, 202, 202, 0.4)',
    marginHorizontal: 10,
  },

});
