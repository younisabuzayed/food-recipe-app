import { 
    View, 
    Text, 
    TouchableOpacity,
 } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS } from '../../constants'
import LinearGradient from 'react-native-linear-gradient'

const CustomButton = ({ buttonText, buttonContainerStyle, colors = [], onPress}) => {
    if (colors.length > 0)
    {
        return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                  ...styles.container,
                  }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={colors}
                  style={buttonContainerStyle}>
                    <Text
                      style={{
                        ...styles.buttonText,
                        color: COLORS.white,
                        }}>{buttonText}</Text>

                </LinearGradient>
            </TouchableOpacity>
        )
    }
    else
    {
        return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                  ...styles.container,
                  ...buttonContainerStyle,
                  }}>
                <Text
                  style={{
                    ...styles.buttonText,
                    color: COLORS.lightGreen,
                    }}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton