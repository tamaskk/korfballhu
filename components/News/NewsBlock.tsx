import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../../styles/NewBlockStyle';
import { Link } from 'expo-router';

interface NewsBlockProps {
    title: string;
    date: string;
    uri: string;
    id: number;
} 

const NewsBlock = ({title, date, uri, id}: NewsBlockProps) => {
  return (
    <View style={styles.container}>
        {/* <Link href={`/news/${id}`} > */}
      <Image
        source={{
          uri: uri,
        }}
        style={styles.image}
      />
      <View style={styles.modal}>
      <Text style={styles.header}>{title}</Text>
        <View style={styles.details}>
            <Text style={styles.detailsText}>{date}</Text>
            <Text style={styles.detailsText}>0 hozzászólás</Text>
        </View>
      </View>
        {/* </Link> */}
    </View>
  );
};

export default NewsBlock;
