import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route: { name } }) =>({
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle:
              {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  elevation: 0,
                  borderTopColor: 'transparent',
                  backgroundColor: COLORS.white, 
              },
              tabBarIcon: ({focused}) =>
              {  
                  if ( name === "Home") 
                    return <TabIcon focused={focused} icon={icons.home} />
                  if ( name === 'Search')
                    return <TabIcon focused={focused} icon={icons.search} />
                  if ( name === "Bookmark") 
                    return <TabIcon focused={focused} icon={icons.bookmark} />
                  if ( name === 'Settings')
                    return <TabIcon focused={focused} icon={icons.settings} /> 
              }

          })}>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Home}
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default Tabs;