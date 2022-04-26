import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import { COLORS, images } from '../../constants';
import styles from './styles';

const descriptionDetail = "Discover more than 1200 food recipes in your hands and cooking it easily!"
const Login = () => {
    const navigation = useNavigation();
    const renderHeader = () =>
    {
        return (
            <View
              style={styles.renderHeader}>
                <ImageBackground
                  source={images.loginBackground}
                  resizeMode='cover'
                  style={styles.imageBackground}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={[
                          COLORS.transparent,
                          COLORS.black
                      ]}
                      style={styles.linearGradient}>
                        <Text
                          style={styles.title}>
                          Cooking a Delicious Food Easily
                        </Text>
                    </LinearGradient>
                </ImageBackground>

            </View>
        )
    }

    const renderDetail = () =>
    {
      return (
        <View
          style={styles.renderDetail}>
            {/* Description */}
            <Text
              style={styles.description}>{descriptionDetail}</Text>
            {/* Buttons */}
            <View
              style={styles.buttonsContainer}>
                {/* Login  */}
                <CustomButton
                  buttonText="Login"
                  colors={[COLORS.darkGreen, COLORS.lime]}
                  buttonContainerStyle={styles.buttonLogin}
                  onPress={() => navigation.replace('Main')} />
                {/* Sign Up */}
                <CustomButton
                  buttonText="Sgin Up"
                  onPress={() => navigation.replace('Main')}
                  buttonContainerStyle={styles.buttonSignUp} />
            </View>
            <CustomButton />
        </View>
      )
    }
    return (
        <View
          style={styles.container}>
            {/* Header */}
            {renderHeader()}
            {/* Detail */}
            {renderDetail()}
        </View>
    )
}

export default Login;