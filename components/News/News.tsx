import React from 'react'
import { View } from 'react-native'
import NewsBlock from './NewsBlock'
import { styles } from '../../styles/NewsStyle'

const News = () => {
  return (
    <View style={styles.container}>
        <NewsBlock />
    </View>
  )
}

export default News