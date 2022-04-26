import React from 'react';
import {
    View,
    Text,
    Animated,
    Image,
    Platform,
    TouchableOpacity,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { BlurView } from '@react-native-community/blur';
import { COLORS, icons } from '../../constants';
import { Viewers } from '../../components';


const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({selectedRecipe}) =>
{
    return (
        <View
          style={styles.recipeCreatorCardDetail}>
            {/* Profile Photo */}
            <View
              style={styles.imageProfileContainer}>
                <Image
                  source={selectedRecipe?.author?.profilePic}
                  style={styles.imageProfile}/>
            </View>
            {/* Labels */}
            <View
              style={styles.labelsContainer}>
                <Text
                  style={styles.labelByText}>Recipe by: </Text>
                <Text
                  style={styles.labelNameText}>{selectedRecipe?.author?.name}</Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={styles.recipeCreatorCardDetailBtn}
              onPress={() => console.log('View Profile')}>
                <Image
                  source={icons.rightArrow}
                  style={styles.iconRightArrow} />
            </TouchableOpacity>
        </View>
    )
}
const RecipeCreatorCardInfo = ({selectedRecipe}) =>
{
    if (Platform.OS === "ios")
    {
        return (
            <BlurView
              style={styles.recipeCreatorCardInfo}
              blurType='dark'>
                <RecipeCreatorCardDetail
                  selectedRecipe={selectedRecipe} />
              </BlurView>
        )
    }
    else
    {
        <View
          style={{
              ...styles.recipeCreatorCardInfo,
              backgroundColor: COLORS.transparentBlack9,
          }}></View>
    }
}
const Recipe = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [selectedRecipe, setSelectedRecipe] = React.useState(null);

    const scrollY = React.useRef(new Animated.Value(0)).current;
    const onScroll = 
        Animated.event([
            {
                nativeEvent: 
                {
                    contentOffset: 
                    { 
                        y: scrollY
                    }
                }
            }
          ], {
              useNativeDriver: false
          })
    

    React.useEffect(() =>
    {
        const { item } = route.params;
        setSelectedRecipe(item);
    }, []);


    const renderItem = ({item}) =>
    {
        return (
            <View
              style={styles.renderItem}>
                {/* Icon */}
                <View
                  style={styles.renderItemIconContainer}>
                    <Image
                      source={item.icon}
                      style={styles.renderItemIcon} />
                </View>
                {/* Description */}
                <View
                  style={styles.renderItemDesc}>
                    <Text
                      style={styles.renderItemDescText}>{item.description}</Text>
                </View>
                {/* Quantity */}
                <View
                  style={styles.renderItemQuantity}>
                    <Text
                      style={styles.renderItemQuantityText}>{item.quantity}</Text>
                </View>
            </View>
        )
    }
    const renderRecipeCardHeader = () =>
    {
        const transform = [
            {
                translateY: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75 ]
                })
            },
            {
                scale: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [2, 1, 0.75 ]
                })
            }
        ]
        return (
            <View
              style={styles.renderRecipeCardHeader}>
                {/* Background Image */}
                <Animated.Image
                  source={selectedRecipe?.image}
                  style={{
                      ...styles.image,
                      height: HEADER_HEIGHT,
                      transform,
                      }}
                  resizeMode="contain" />
                {/* Recipe Creator Card Info */}
                <Animated.View
                  style={{
                      ...styles.recipeCreatorContainer,
                      transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 170, 250],
                                outputRange: [0, 0, 180],
                                extrapolate:'clamp',
                            })
                        }
                      ]
                      }}>
                    <RecipeCreatorCardInfo
                      selectedRecipe={selectedRecipe} />
                </Animated.View>
            </View>
        )
    }

    const renderRecipeInfo = () =>
    {
        return (
            <View
              style={styles.renderRecipeInfo}>
                {/* Recipe */}
                <View
                  style={styles.recipeInfoTitleContainer}>
                    <Text
                      style={styles.recipeInfoName}>{selectedRecipe?.name}</Text>
                    <Text
                      style={styles.recipeInfoServing}>{selectedRecipe?.duration} | {selectedRecipe?.serving} Serving</Text>
                </View>
                {/* Viewers */}
                <View
                  style={styles.viewersContainer}>
                    <Viewers
                      viewersList={selectedRecipe?.viewers} />
                </View>
            </View>
        )
    }

    const renderIngredientHeader = () =>
    {
      return (
        <View
          style={styles.renderIngredientHeader}>
            <Text
              style={styles.ingredientHeaderTitle}>Ingredients</Text>
            <Text
              style={styles.ingredientHeaderItems}>{selectedRecipe?.ingredients?.length} items</Text>
        </View>
      )
    }

    const ListHeaderComponent = (
        <View>
            {/* Header */}
            {renderRecipeCardHeader()}
            {/* Info */}
            {renderRecipeInfo()}
            {/* Ingredients Title */}
            {renderIngredientHeader()}
        </View>
    );

    const renderHeaderBar = () =>
    {
        return (
            <View
              style={styles.renderHeaderBar}>
                {/* Screen Overlay */}
                <Animated.View
                  style={{
                      ...styles.overlay,
                      opacity: scrollY.interpolate({
                          inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                          outputRange: [0, 1],
                      })
                  }} />
                {/* Header Bar Title  */}
                <Animated.View
                  style={{
                      ...styles.headerBarTitle,
                      opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                        outputRange: [0, 1],
                      }),
                      transform: [
                          {
                              translateY: scrollY.interpolate({
                                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                outputRange: [50, 0],
                                extrapolate:'clamp'
                              })
                          }
                      ]
                  }}>
                    <Text
                      style={styles.labelByText}>Recipe by: </Text>
                    <Text
                      style={styles.labelNameText}>{selectedRecipe?.author?.name}</Text>
                </Animated.View>
                {/* Back Button  */}
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}>
                    <Image
                      source={icons.back}
                      style={styles.iconBack} />
                </TouchableOpacity>
                {/* Bookmark */}
                <TouchableOpacity
                  style={styles.bookmarkButton}
                  onPress={() => navigation.goBack()}>
                    <Image
                      source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                      style={styles.iconBookmark} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View
          style={styles.container}>
            <Animated.FlatList
              data={selectedRecipe?.ingredients}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={onScroll}
              renderItem={renderItem}
              contentContainerStyle={{ paddingBottom: 100}}
              ListHeaderComponent={ListHeaderComponent} />
            {/* Header Bar  */}
            {renderHeaderBar()}
        </View>
    )
}

export default Recipe;