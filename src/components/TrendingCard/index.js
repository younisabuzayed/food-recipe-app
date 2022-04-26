import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    Image,
    Platform
 } from 'react-native';
import { COLORS, icons } from '../../constants';
import styles from './styles';

const RecipeCardDetails = ({ recipeItem }) =>
{
  return (
    <View
      style={styles.recipeCardDetails}>
        {/* Name & Bookmark */}
        <View
          style={styles.nameAndBookmarkContainer}>
            <Text
              style={styles.recipeCardDetailsName}>{recipeItem.name}</Text>
            <Image
              source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
              style={styles.iconBookmark} />
        </View>
        {/* Duration & Serving */}
        <Text
              style={styles.durationAndServings}>
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
    </View>
  )
}
const RecipeCardInfo = ({recipeItem}) =>
{
    if (Platform.OS === 'ios')
    {
        return (
            <BlurView
              style={styles.recipeCardInfo}
              blurType="dark">
                <RecipeCardDetails
                  recipeItem={recipeItem} />
            </BlurView>
        )
    }
    else
    {
        return (
            <View
              style={{
                  ...styles.recipeCardInfo,
                  backgroundColor: COLORS.transparentDarkGray,
                  }} >
    
            </View>
        )
    }
}
const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
          ...styles.button,
          ...containerStyle,
      }}>
        {/* Background Image */}
        <Image
          source={recipeItem.image}
          style={styles.backgroundImage} />
        {/* Category */}
        <View
          style={styles.categoryContainer}>
            <Text
              style={styles.category}>{recipeItem.category}</Text>
        </View>
        {/* Card Info */}
        <RecipeCardInfo
          recipeItem={recipeItem} />
    </TouchableOpacity>
  )
}

export default TrendingCard