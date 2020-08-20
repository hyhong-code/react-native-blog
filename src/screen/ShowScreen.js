import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { id: route.params.id })}
      >
        <EvilIcons name="pencil" size={35} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{blogPost.title}</Text>
      <Text style={{ fontSize: 18 }}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
