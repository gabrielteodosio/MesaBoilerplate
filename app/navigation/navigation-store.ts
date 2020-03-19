import { Instance, types } from "mobx-state-tree"
import { RootNavigator } from "./root-navigator"
import { CommonActions, NavigationAction, getStateFromPath, getPathFromState, getActionFromState } from "@react-navigation/native"
import { NavigationEvents } from "./navigation-events"

// const DEFAULT_STATE = RootNavigator.getStateForAction(CommonActions.init(), null)

/**
 * Finds the current route.
 *
 * @param navState the current nav state
 */
function findCurrentRoute(navState) {
  const route = navState.routes[navState.index]
  if (route.routes) {
    return findCurrentRoute(route)
  }
  return route
}

/**
 * Tracks the navigation state for `react-navigation` as well as providers
 * the actions for changing that state.
 */
export const NavigationStoreModel = NavigationEvents.named("NavigationStore")
  .props({
    /**
     * the navigation state tree (Frozen here means it is immutable.)
     */
    state: types.optional(types.frozen(), null),
  })
  .preProcessSnapshot(snapshot => {
    if (!snapshot || !snapshot.state) return snapshot

    try {
      // make sure react-navigation can handle our state
      getPathFromState(snapshot.state)
      return snapshot
    } catch (e) {
      // otherwise restore default state
      return { ...snapshot, state: null }
    }
  })
  .actions(self => ({
    /**
     * Return all subscribers
     */
    actionSubscribers() {
      return self.subs
    },

    /**
     * Fires when navigation happens.
     *
     * Our job is to update the state for this new navigation action.
     *
     * @param action The new navigation action to perform
     * @param shouldPush Should we push or replace the whole stack?
     */
    dispatch(action: NavigationAction, shouldPush = true) {
      const previousNavState = shouldPush ? self.state : null
      self.state = getActionFromState(previousNavState) || self.state || self.state
      self.fireSubscribers(action, previousNavState, self.state)
      return true
    },

    /**
     * Resets the navigation back to the start.
     */
    reset() {
      self.state = null
    },

    /**
     * Finds the current route.
     */
    findCurrentRoute() {
      return findCurrentRoute(self.state)
    },
  }))
  .actions(self => ({
    /**
     * Navigate to another place.
     *
     * @param routeName The route name.
     */
    navigateTo(routeName: string) {
      self.dispatch(CommonActions.navigate(routeName))
    },
  }))

export type NavigationStore = Instance<typeof NavigationStoreModel>
