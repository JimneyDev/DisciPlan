import { Pressable, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DayOne from '../Lessons/DayOne/DayOne' 
import { useDayOne } from '../Lessons/DayOne/DayOneContext';  // Adjust the path if necessary

const { dayOneDone } = useDayOne();

let dayOneCompleted = false
let dayTwoCompleted = false
let dayThreeCompleted = false
let dayFourCompleted = false
let dayFiveCompleted = false
let daySixCompleted = false
let daySevenCompleted = false
let dayEightCompleted = false
let dayNineCompleted = false
let dayTenCompleted = false
// THIS WILL CONTINUE

if (dayOneDone){
  dayOneCompleted = true
}

let dayOneStatus = dayOneCompleted ? ("Complete") : ("Incomplete")


let currentDay = () => {
  let Day = 1
  if (dayNineCompleted) {
    Day = 10
  } else if (dayEightCompleted) {
    Day = 9
  }else if (daySevenCompleted) {
    Day = 8
  }else if (daySixCompleted) {
    Day = 7
  }else if (dayFiveCompleted) {
    Day = 6
  }else if (dayFourCompleted) {
    Day = 5
  }else if (dayThreeCompleted) {
    Day = 4
  }else if (dayTwoCompleted) {
    Day = 3
  }else if (dayOneCompleted) {
    Day = 2
  }
} // THIS WILL CONTINUE

const dayOne = () => {
  return(
    <View style={[styles.card, {backgroundColor: dayOneDone ? '#808e9b' : '#dcdde1'}]}>
            <Text style={[styles.dayTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Day One</Text>
            <View style={styles.sepLineBig}/>
            <Text style={[styles.headerTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Agenda</Text>
            <View style={styles.sepLineSmall}/>
            <Text style={[styles.agendaSectionTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Section 1</Text>
            <Text style={[styles.agendaBasicTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Lesson 1</Text>
            <Text style={[styles.agendaBasicTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Lesson 2</Text>
            <Text style={[styles.agendaBasicTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Lesson 3</Text>
            <Text style={[styles.agendaSectionTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Section 2</Text>
            <Text style={[styles.agendaBasicTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Lesson 1</Text>
            <Text style={[styles.agendaBasicTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Lesson 2</Text>
            <Text style={[styles.agendaBasicTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Lesson 3</Text>
            <Text style={[styles.statusTxt, {color: dayOneDone ? '#d1ccc0' : '#dcdde1'}]}>Status: {dayOneDone ? "Complete" : "Incomplete"}</Text>
          </View>
  )
}
const dayTwo = () => {
  return(
  <View style={[styles.card, {height: 260}]}>
          <Text style={styles.dayTxt}>Day Two</Text>
          <View style={styles.sepLineBig}/>
          <Text style={styles.headerTxt}>Agenda</Text>
          <View style={styles.sepLineSmall}/>
          <Text style={styles.agendaSectionTxt}>Section 1</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 1</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 2</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 3</Text>
          <Text style={styles.statusTxt}>Status: Incomplete</Text>
        </View>
  )
}
const dayThree = () => {
  return(
  <View style={[styles.card, {height: 340}]}>
          <Text style={styles.dayTxt}>Day Three</Text>
          <View style={styles.sepLineBig}/>
          <Text style={styles.headerTxt}>Agenda</Text>
          <View style={styles.sepLineSmall}/>
          <Text style={styles.agendaSectionTxt}>Section 1</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 1</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 2</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 3</Text>
          <Text style={styles.agendaSectionTxt}>Section 2</Text>
          <Text style={styles.agendaBasicTxt}>Lesson 1</Text>
          <Text style={styles.statusTxt}>Status: Incomplete</Text>
        </View>
        )
}
const MainLesson = () => {
  const navigation = useNavigation()
  const { dayOneDone } = useDayOne();

  const dayOnePressHandler = () => {
    navigation.navigate('DayOne');
  };

  return (
    <SafeAreaView style={styles.bgc}>
      <ScrollView>
        <View style={styles.planCard}>
          <Text style={styles.planHeadingTxt}>The Plan</Text>
          <Text style={styles.agendaBasicTxt}>To Achieve Discipline</Text>
        </View>
        <Pressable onPress={dayOnePressHandler}>
        {dayOne()}
        </Pressable>
        {dayTwo()}
        {dayThree()}              
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainLesson

const styles = StyleSheet.create({
  bgc: {
    backgroundColor: '#34495e'
  },
  planCard: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#353b48",
    width: 380,
    height: 110,
    borderRadius: 15,
    marginVertical: 12,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#353b48",
    width: 380,
    height: 360,
    borderRadius: 15,
    marginVertical: 12,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  dayTxt: {
    marginTop: 8,
    fontSize: 35,
    fontWeight: 'bold',
    color: "#dcdde1"
  },
  sepLineBig: {
    width: 350,
    height: 1,
    backgroundColor: '#7f8c8d',
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  headerTxt: {
    fontSize: 25,
    fontWeight: '500',
  },
  sepLineSmall: {
    width: 150,
    height: 1,
    backgroundColor: '#7f8c8d',
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 6,
  },
  agendaSectionTxt: {
    fontSize: 20,
    fontWeight: '400',
    margin: 2,
  },
  agendaBasicTxt: {
    fontSize: 16,
    marginBottom: 3,
  },
  statusTxt: {
    fontSize: 20,
  },
  planHeadingTxt: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#dcdde1",
    marginTop: 4
  },
  planBasicTxt: {
    fontSize: 20,
    fontWeight: '500',
    color: "#dcdde1",
  }
})