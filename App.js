import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState(0);

  const add = () => {
    let result = parseInt(text1) + parseInt(text2);
    return result;

  };
  const sub = () => {
    let result = parseInt(text1) - parseInt(text2);
    return result;
  };

  return (
    <><View style={styles.container}>
      <Text>{result}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text1 => setText1(text1)} value={text1} />
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text2 => setText2(text2)} value={text2} />
      <StatusBar style="auto" />
    </View>
      <View style={styles.container2}>
        <Button onPress={() => setResult(add)} title="+" />
        <Button onPress={() => setResult(sub)} title="-" />
        <StatusBar style="auto" />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 250,
    height: 100
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});