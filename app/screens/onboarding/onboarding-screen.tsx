/* eslint-disable react-native/no-inline-styles */
import React,  { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle , View, Text, TouchableOpacity, Image , ImageStyle } from "react-native"
import { Screen } from "../../components"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"



import Onboarding from 'react-native-onboarding-swiper';


const ROOT: ViewStyle = {
  backgroundColor: color.palette.tercearyColor,
  flex: 1,
}

const ONBOARDING_IMAGE1: ImageStyle = {
  width: 325,
  height: 360,
  marginLeft: -10,
  marginTop: -100, 
  marginBottom: -50
 }

const ONBOARDING_IMAGE2: ImageStyle = {
  width: 400,
  height: 250,
  marginTop: -150
}

const Dots = ({selected}) => {
  const backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);



export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "demo">> = observer(({ navigation }) => {
  return (
    <Screen style={ROOT} preset="scroll">
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("login")}
        onDone={() => navigation.replace("login")}
        titleStyles={{fontSize: 30 }}
        subTitleStyles={{fontSize: 20 }}
        pages={[
          {
            backgroundColor: color.palette.primaryColor,
            image: <Image style={ONBOARDING_IMAGE1} source={require('../../../assets/images/onboarding2.png')} />,
            title: 'Welcome to ACPedia!',
            subtitle: 'A place where you can learn everything about Animal Crossing.',
          },
          {
            backgroundColor: color.palette.secondaryColor,
            image: <Image style={ONBOARDING_IMAGE2} source={require('../../../assets/images/onboarding1.png')} />,
            title: 'Enjoy learning about your favorite game!',
            subtitle: 'Villagers, plants, bugs, fish, items and more!',
          },
          
        ]}
      />
    </Screen>
  )
})


export default OnboardingScreen;

