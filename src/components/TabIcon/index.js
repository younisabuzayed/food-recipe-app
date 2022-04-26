import { 
    View, 
    Text,
    Image
 } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS } from '../../constants'

const TabIcon = ({focused, icon}) => {
  return (
    <View
      style={styles.container}>
        <Image
          source={icon}
          style={{
              ...styles.icon,
              tintColor: focused ? COLORS.darkGreen : COLORS.lightLime, 
          }} />
        {focused && <View style={styles.LineIndex} />}
    </View>
  )
}

export default TabIcon