import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, listBlogPosts, deleteBlogPost } = useContext(Context);

  useEffect(() => {
    listBlogPosts();

    // Runs anytime return to this screen
    const listener = navigation.addListener("didFocus", () => {
      listBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  // Add a (+) button on navigation header
  navigation.setOptions({
    title: "Blog List",
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.plus} name="plus" />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => `${post.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather
                  style={styles.icon}
                  name="trash"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icosn: {
    fontSize: 24,
  },
  plus: {
    fontSize: 35,
    marginRight: 10,
  },
});

export default IndexScreen;
