import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((post) => post.id === route.params.id);
  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        editBlogPost(route.params.id, title, content, () => navigation.goBack())
      }
      initialVal={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
