import React from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "../../styles/HomeStyle";
import NewsBlock from "../../components/News/NewsBlock";
import News from "../../helper/News";

const HomePage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Híreink</Text>
        {News.map((news: any) => (
          <NewsBlock
            key={news.id}
            id={news.id}
            title={news.title}
            date={news.date}
            uri={news.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;
