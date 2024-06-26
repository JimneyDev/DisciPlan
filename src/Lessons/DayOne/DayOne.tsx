import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDayOne } from './DayOneContext';  // Adjust the path if necessary

export type RootStackParamList = {
    MainLesson: undefined;
    SideLesson: undefined;
    Resources: undefined;
    Quote: undefined;
    DayOne: undefined;
    Introduction: undefined;
    CheapDopamineRelease: undefined;
    CheapDopamineExcuse: undefined;
  };
  
const Stack = createNativeStackNavigator<RootStackParamList>()

const Introduction = () => {
    const navigation = useNavigation()

    const introNext = () => {
        navigation.navigate('CheapDopamineRelease');
      };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.margin}/>
                <Text style={styles.sectionTitle}>Introduction</Text>
                <View style={styles.sepLine}/>
                <Text style={styles.sectionTxt}>    So, you’ve downloaded an app on self improvement. You’re gonna get your life together, and you can finally stop being such a loser. Throughout this 60 day journey, there will be both very many, and very few expectations for you. There are only three. </Text>
                <Text style={styles.sectionTxt}>    First, you need to want this. You need to realize your faults, and you need to want to improve yourself. If you are comfortable where you are in life, then I ask of you to click off, delete this app, and go scroll some more through tiktok. </Text>
                <Text style={styles.sectionTxt}>    Second, you need to apply what you are given. If you do not work with this course, and put in the work, you will get nowhere. If you are given an activity or told to do something, you must do it. The goal of this app is to teach you discipline and help you succeed in life, not make you feel good about yourself because you clicked download. </Text>
                <Text style={styles.sectionTxt}>    Third, you must continue the principles you are taught in this course even after the 60 days are over. If you stop there, everything will be in vain. </Text>
	            <Text style={styles.sectionTxt}>    I will be instructing you in a casual manner, so this will be in first person. You can act as you are talking to someone one on one if you wish. Now, if you’re ready to step forward, and leave your current life behind, click the button below. </Text>
                <View style={styles.margin}/>
                <Pressable
                onPress={introNext}
                accessibilityLabel="Read the next article"
                >
                    <View style={styles.nextBtn}>
                        <Text style={styles.nextTxt}>Next</Text>
                    </View>
                </Pressable>
                <View style={styles.margin}/>
                <View style={styles.margin}/>
            </View>
        </ScrollView>
    )
}
const CheapDopamineRelease = () => {
    const navigation = useNavigation()

    const cheapDopamineReleaseNext = () => {
        navigation.navigate('CheapDopamineExcuse');
      };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.margin}/>
                <Text style={styles.sectionTitle}>Cheap Dopamine</Text>
                <Text style={styles.sectionTitle}>Release</Text>
                <View style={styles.sepLine}/>
                <Text style={styles.sectionTxt}>    The first topic we will be discussing is cheap dopamine releases. We all know them, and sadly we all love them, they are the absolute worst enemy on any self improvement journey. Mostly, they can all fit in your pocket. This includes social media, smoking, masturbation, video games, Cafeine TV, gambling, junk food, alcohol. </Text>
                <Text style={styles.sectionTxt}>    You’ll notice that the items required for these, at least in some form, could all fit in your pocket, and even if that wasn’t true, or maybe you don’t have pockets, but there is always easy access to each and every one of them. </Text>
                <Text style={styles.sectionTxt}>    This being an almost depressing truth, it is very hard not to get addicted to at least one of these things throughout your life. That is why it is such an important thing to get rid of these distractions for a healthy life. Instead, try to be addicted to real dopamine: </Text>
                <Text style={styles.sectionTxt}>    Nourishing meals </Text>
                <Text style={styles.sectionTxt}>    Exercise </Text>
                <Text style={styles.sectionTxt}>    Accomplish things </Text>
                <Text style={styles.sectionTxt}>    Spend time in the sun </Text>
                <Text style={styles.sectionTxt}>    Experience new things </Text>
                <Text style={styles.sectionTxt}>    Rest well </Text>
                <Text style={styles.sectionTxt}> Think about these while you read the next article. </Text>
                <View style={styles.margin}/>
                <Pressable
                onPress={cheapDopamineReleaseNext}
                accessibilityLabel="Read the next article"
                >
                    <View style={styles.nextBtn}>
                        <Text style={styles.nextTxt}>Next</Text>
                    </View>
                </Pressable>
                <View style={styles.margin}/>
                <View style={styles.margin}/>
            </View>
        </ScrollView>
    )
}
const CheapDopamineExcuse = () => {
    const navigation = useNavigation()
    const { setDayOneDone } = useDayOne();

    const cheapDopamineExcuseComplete = () => {
        navigation.navigate('MainLesson');
        setDayOneDone(true);
      };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.margin}/>
                <Text style={styles.sectionTitle}>Cheap Dopamine</Text>
                <Text style={styles.sectionTitle}>Excuses</Text>
                <View style={styles.sepLine}/>
                <Text style={styles.sectionTxt}>    This will be a shorter one, but before you settle down for the day, you need to drill into your head that just because it isn’t necessarily a cheap dopamine release doesn’t mean it’s good.</Text>
                <Text style={styles.sectionTxt}>    A common thing for people to do is make excuses to stop what they’re doing and label they’re doing as productive. This includes things like podcasts, music, and even working out, if you put it above everything else (Unless of course you’re an MMA fighter, but you aren’t).</Text>
                <Text style={styles.sectionTxt}>    These are still being used as distractions and cheap ways to release dopamine instead of work. Do better. And do the activity below too.</Text>
                <View style={styles.margin}/>
                <View style={styles.activityCard}>
                    <Text style={styles.activityHeader}>Activity</Text>
                    <Text style={styles.activityTxt}>Throughout the rest of your day, do as best as you can to stay away from cheap dopamine releases</Text>
                </View>
                <View style={styles.margin}/>
                <Pressable
                onPress={cheapDopamineExcuseComplete}
                accessibilityLabel="Read the next article"
                >
                    <View style={styles.nextBtn}>
                        <Text style={styles.nextTxt}>Complete</Text>
                    </View>
                </Pressable>
                <View style={styles.margin}/>
                <View style={styles.margin}/>
            </View>
        </ScrollView>
    )
}

const DayOne = () => {
  return (
    <Stack.Navigator initialRouteName='Introduction'>
        <Stack.Screen 
            name="Introduction"
            component={Introduction}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="CheapDopamineRelease"
            component={CheapDopamineRelease}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="CheapDopamineExcuse"
            component={CheapDopamineExcuse}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
  )
}

export default DayOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#34495e',
        width: 412,
      },
      card: {
        backgroundColor: "#353b48",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 5
      },
    sectionTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#dcdde1",
        margin: 3,
    },
    sectionTxt: {
        fontSize: 24,
        color: "#dcdde1",
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    nextBtn: {
        width: 340,
        height: 50,
        backgroundColor: "#57606f",
        margin: 4,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#dcdde1",
    },
    activityCard: {
        width: 340,
        height: 150,
        backgroundColor: '#34495e',
        margin: 4,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#a4b0be",
        borderWidth: 1,
    },
    activityHeader: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#dcdde1",
    },
    activityTxt: {
        fontSize: 18,
        color: "#dcdde1",
        margin: 7,
    },
    margin: {
        margin: 10,
    },
    sepLine: {
        width: 300,
        height: 1,
        backgroundColor: '#dcdde1',
        borderRadius: 8,
        marginTop: 2,
        marginBottom: 6,
      },
})