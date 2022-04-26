import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryCard, TrendingCard } from '../../components';
import { COLORS, dummyData, icons, images, SIZES } from '../../constants';
import styles from './styles';

const Home = () => {
    const navigation = useNavigation();
    const renderItem = ({item}) =>
    {
        return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{
                  marginHorizontal: SIZES.padding,
              }}
              onPress={ () => navigation.navigate("Recipe", { item })} />
        )
    }
    const renderHeader = () =>
    {
        return (
            <View
              style={styles.renderHeader}>
                {/* Text */}
                <View
                  style={styles.renderHeaderText}>
                    <Text
                      style={styles.renderHeaderName}>Hello Cooker,</Text>
                    <Text
                      style={styles.renderHeaderQuestion}>What do you want to cook today?</Text>
                </View>
                {/* Image */}
                <TouchableOpacity
                  onPress={() => console.log('Profile')}>
                    <Image
                      source={images.profile}
                      style={styles.renderHeaderProfileImage} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderSearchBar = () =>
    {
      return (
        <View
          style={styles.renderSearchBar}>
            <Image
              source={icons.search}
              style={styles.iconsSearch} />
            <TextInput
              placeholder="Search Recipes"
              placeholderTextColor={COLORS.gray}
              style={styles.textInputSearch} />
        </View>
      )
    }

    const renderSeeRecipeCard = () =>
    {
      return (
        <View
          style={styles.renderSeeRecipeCard}>
            {/* Image */}
            <View
              style={styles.imageSeeRecipeCardContainer}>
                <Image
                  source={images.recipe}
                  style={styles.imageSeeRecipeCard} />
            </View>
            {/* Text */}
            <View
              style={styles.textSeeRecipeCardContainer}>
                <Text
                  style={styles.textSeeRecipeCard}>
                    You have 12 recipes that you haven't tried yet
                </Text>
                <TouchableOpacity
                  style={styles.textSeeRecipeCardButton}
                  onPress={() => console.log('See Recipe')}>
                    <Text
                      style={styles.textSeeRecipeCardButtonText}>See Recipes</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
    }

    const renderTrendingSection = () =>
    {
      const renderItemTrending = ({item, index}) =>
      {
        return (
          <TrendingCard
            recipeItem={item}
            containerStyle={{
              marginLeft: index === 0 ? SIZES.padding : 0,
            }}
            onPress={() => navigation.navigate("Recipe", { item })} />
        )
      }
      return (
        <View
          style={styles.renderTrendingSection}>
            {/* Title */}
            <Text
              style={styles.titleTrendingSection}>Trending Recipe</Text>
            <FlatList
              data={dummyData.trendingRecipes}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItemTrending} />
        </View>
      )
    }
    const renderCategoryHeader = () =>
    {
      return (
        <View
          style={styles.renderCategoryHeader}>
            {/* Section Title */}
            <Text
              style={styles.titleCategorySection}>Categories</Text>
            <TouchableOpacity>
                <Text
                  style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
        </View>
      )
    }
    const ListHeaderComponent = (
        <View>
            {/* Header */}
            {renderHeader()}
            {/* Search Bar */}
            {renderSearchBar()}
            {/* See Recipe Card */}
            {renderSeeRecipeCard()}
            {/* Trending Section */}
            {renderTrendingSection()}
            {/* Category Header */}
            {renderCategoryHeader()}
        </View>
    )
    return (
        <SafeAreaView
          style={styles.container}>
            <FlatList
              data={dummyData.categories}
              keyExtractor={(item) => `${item.id}`}
              contentContainerStyle={{paddingBottom: 50}}
              keyboardDismissMode="on-drag"
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ListHeaderComponent}
              renderItem={renderItem}
              ListFooterComponent={
                  <View>

                  </View>
              } />
        </SafeAreaView>
    )
}

export default Home;