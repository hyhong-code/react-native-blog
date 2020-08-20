import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

const IndexScreen = (props) => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add Post" />
      <FlatList
        data={blogPosts}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
