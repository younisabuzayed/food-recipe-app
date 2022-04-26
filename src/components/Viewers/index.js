import { 
    View,
    Text,
    Image,
 } from 'react-native'
import React from 'react'
import styles from './styles'

const Viewers = ({ viewersList }) => {
  if ( viewersList?.length === 0 )
  {
      return (
        <View
          style={styles.noViewers}>
            <Text
              style={styles.noViewersText}>Be the first one to try this</Text>
        </View>
      )
  }
  else if ( viewersList?.length <= 4 )
  {
      return (
        <>
            {/* Profile Image */}
            <View
              style={styles.more4Viewers}>
                { viewersList?.map((item, index) => {
                    return (
                        <View
                          key={index}
                          style={{
                              ...styles.more4ViewersList,
                              marginLeft: index === 0 ? 0 : -20,
                              }}>
                            <Image
                              source={item.profilePic}
                              style={styles.more4ViewersImage} />
                        </View>
                    )
                })}
            </View>
            {/* Text */}
            <Text
              style={styles.more4ViewersNumber}>{viewersList?.length} people</Text>
            <Text
              style={styles.more4ViewersNumber}>Already try this!</Text>
        </>
      )
  }
  else
  {
      return (
        <>
        <View
          style={styles.viewers}>
              {/* Profile */}
             { viewersList?.map((item, index) => {
                if (index <= 2)
                {
                    return (
                        <View
                            key={index}
                            style={{
                                ...styles.more4ViewersList,
                                marginLeft: index === 0 ? 0 : -20,
                                }}>
                            <Image
                                source={item.profilePic}
                                style={styles.more4ViewersImage} />
                        </View>
                    )
                } 
                if (index === 3)
                {
                    return (
                        <View
                          key={index}
                          style={styles.viewersNumber}>
                            <Text
                              style={styles.viewersNumberText}>{viewersList?.length - 3}+</Text>
                        </View>
                    )
                }
                })
            }
        </View>
        {/* Text */}
        <Text
            style={styles.more4ViewersNumber}>{viewersList?.length} people</Text>
        <Text
            style={styles.more4ViewersNumber}>Already try this!</Text>
        </>
      )
  }
}

export default Viewers