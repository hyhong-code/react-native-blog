import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({
  onSubmit,
  initialVal = { title: "", content: "" },
}) => {
  const [formData, setFormData] = useState(initialVal);
  const { title, content } = formData;

  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, title: text }))
        }
      />
      <Text style={styles.label}>Enter content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, content: text }))
        }
      />
      <Button onPress={() => onSubmit(title, content)} title="Save Blog Post" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
