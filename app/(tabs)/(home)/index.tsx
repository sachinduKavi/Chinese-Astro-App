import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AppbarCustom from '@/components/ui/AppbarCustom';
import Scafflod from '@/components/ui/Scafflod';
import ButtonAstro from '@/components/ui/Button';

export default function Index() {
  const router = useRouter();

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
              <Text>Sachindu Kavishka</Text>
            </View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}>
              <Text>Gender</Text>
            </View>
            <View style={styles.tableCell2}>
              <Text>Male</Text>
            </View>
          </View>

          <View style={styles.spacer}></View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell1}>
              <Text>Age</Text>
            </View>
            <View style={styles.tableCell2}>
              <Text>24</Text>
            </View>
          </View>
        </View>

        <Image
          source={require('@/assets/images/yai-1.png')}
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

      <ButtonAstro
        title="Generate"
        active={true}
        action={() => {
          router.push('/generate');
        }}
      />
      <ButtonAstro title="Cancel" active={false} action={() => {}} />
    </Scafflod>
  );
}

const styles = StyleSheet.create({
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
});
