import * as React from "react"
import { Image, Platform, View } from "react-native"

import { Api } from "../../services/api"
import { save } from "../../utils/storage"
import { color } from "../../theme"
import { BulletItem, Button, Header, Text, Screen, Wallpaper } from "../../components"
import { PrimaryNavigatorParamList } from "../../navigation/navigators/primary-navigator"

import { RouteProp, NavigationProp } from "@react-navigation/native"

import {
  DEMO,
  FULL,
  HINT,
  LOVE,
  TITLE,
  HEART,
  HEADER,
  IGNITE,
  TAGLINE,
  DEMO_TEXT,
  CONTAINER,
  HEADER_TITLE,
  LOVE_WRAPPER,
} from "./demo.styles"

export const heart = require("./assets/heart.png")
export const logoIgnite = require("./assets/logo-ignite.png")

interface DemoScreenProps {
  children?: React.ComponentType
  route: RouteProp<PrimaryNavigatorParamList, "Demo">
  navigation: NavigationProp<PrimaryNavigatorParamList, "Demo">
}

export const DemoScreen: React.FC<DemoScreenProps> = ({ navigation }) => {
  const goBack = React.useMemo(() => () => navigation.goBack(), [navigation])

  const demoReactotron = React.useMemo(
    () => async () => {
      console.tron.log("Your Friendly tron log message")
      console.tron.logImportant("I am important")
      console.tron.display({
        name: "DISPLAY",
        value: {
          numbers: 1,
          strings: "strings",
          booleans: true,
          arrays: [1, 2, 3],
          objects: {
            deeper: {
              deeper: {
                yay: "👾",
              },
            },
          },
          functionNames: function hello() {
            /* dummy function */
          },
        },
        preview: "More control with display()",
        important: true,
        image: {
          uri:
            "https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4",
        },
      })
      // make an API call for the demo
      // Don't do API like this, use store's API
      const demo = new Api()
      demo.setup()
      demo.getUser("1")
      // Let's do some async storage stuff
      await save("Cool Name", "Boaty McBoatface")
    },
    [],
  )

  return (
    <View testID="DemoScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text style={TITLE} preset="header" tx="demoScreen.title" />
        <Text style={TAGLINE} tx="demoScreen.tagLine" />
        <BulletItem text="Load up Reactotron!  You can inspect your app, view the events, interact, and so much more!" />
        <BulletItem text="Integrated here, Navigation with State, TypeScript, Storybook, Solidarity, and i18n." />
        <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="demoScreen.reactotron"
            onPress={demoReactotron}
          />
          <Text style={HINT} tx={`demoScreen.${Platform.OS}ReactotronHint`} />
        </View>
        <Image source={logoIgnite} style={IGNITE} />
        <View style={LOVE_WRAPPER}>
          <Text style={LOVE} text="Made with" />
          <Image source={heart} style={HEART} />
          <Text style={LOVE} text="by Infinite Red" />
        </View>
      </Screen>
    </View>
  )
}
