import React,  { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { observer } from "mobx-react-lite"
import { ViewStyle , View, Text } from "react-native"
import { Screen } from "../../components"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
  alignItems: 'center', 
  justifyContent: 'center'
}

export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "login">>  = observer(function LoginScreen({navigation}) {
  return (
    <Screen style={ROOT} preset="scroll">
     <View>
       <Text> LOGIN SCREEN</Text>
     </View>
    </Screen>
  )
})
