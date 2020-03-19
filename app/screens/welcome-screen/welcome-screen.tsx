import * as React from "react"
import { View, Image, SafeAreaView } from "react-native"
import { RouteProp, NavigationProp } from "@react-navigation/native"

const bowserLogo = require("./assets/bowser.png")

import { color } from "../../theme"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { PrimaryNavigatorParamList } from "../../navigation/navigators/primary-navigator"
import {
  FULL,
  TITLE,
  ALMOST,
  BOWSER,
  FOOTER,
  HEADER,
  CONTENT,
  CONTINUE,
  CONTAINER,
  HEADER_TITLE,
  CONTINUE_TEXT,
  TITLE_WRAPPER,
  FOOTER_CONTENT,

} from "./welcome.styles"

interface WelcomeScreenProps {
  children?: React.ComponentType
  route: RouteProp<PrimaryNavigatorParamList, "Welcome">
  navigation: NavigationProp<PrimaryNavigatorParamList, "Welcome">
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const nextScreen = React.useMemo(() => () => navigation.navigate("Demo"), [navigation])

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="Your new app, " />
          <Text style={ALMOST} text="almost" />
          <Text style={TITLE} text="!" />
        </Text>
        <Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />
        <Image source={bowserLogo} style={BOWSER} />
        <Text style={CONTENT}>
          This probably isn't what your app is going to look like. Unless your designer handed you
          this screen and, in that case, congrats! You're ready to ship.
        </Text>
        <Text style={CONTENT}>
          For everyone else, this is where you'll see a live preview of your fully functioning app
          using Ignite.
        </Text>
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            style={CONTINUE}
            onPress={nextScreen}
            textStyle={CONTINUE_TEXT}
            testID="next-screen-button"
            tx="welcomeScreen.continue"
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
