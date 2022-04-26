import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native'
import React from 'react'
import styles from './styles'

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
          ...styles.card,
          ...containerStyle,
        }}
      onPress={onPress} >
        {/* Image */}
        <Image
          source={categoryItem.image}
          resizeMode="cover"
          style={styles.image} />
        {/* Details */}
        <View
          style={styles.detailsContainer}>
            {/* Name */}
            <Text
              style={styles.name}>{categoryItem.name}</Text>
            {/* Servings */}
            <Text
              style={styles.servings}>
                {categoryItem.duration} | {categoryItem.serving} Serving
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard