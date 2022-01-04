import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Greeting() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 30, borderColor: 'grey', borderWidth: 1 }}
        placeholder='Write your name...'
        onChangeText={(name) => setName(name)}
      />
      <Text style={{ marginTop: 10 }}>
        Welcome to this CI/CD course, {name}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
