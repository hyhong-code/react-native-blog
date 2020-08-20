import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

const IndexScreen = (props) => {
  const { blogPosts, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={() => dispatch({ type: "ADD_POST" })} title="Add Post" />
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
