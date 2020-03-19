import * as React from "react"
import { observer } from "mobx-react-lite"
import { NavigationProp } from "@react-navigation/native"
// import { useStores } from "../models/root-store"
import { RootNavigator } from "./root-navigator"

let currentNavigation: NavigationProp<any> | undefined

export const StatefulNavigator: React.FunctionComponent<{}> = observer(() => {
  return <RootNavigator />
})
