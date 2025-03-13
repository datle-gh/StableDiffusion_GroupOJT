import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import sparkles from '../../../assets/image/AiInputImage/sparkles.png';
import send from '../../../assets/image/AiInputImage/send.png';

const PromptInput: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* Thay Icon bằng Image */}
      <Image source={sparkles} style={styles.iconLeft} />
      <TextInput
        placeholder="Describe the image you want to generate"
        placeholderTextColor="gray"
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
      />
      <Image source={send} style={styles.iconRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 10,
  },
  iconLeft: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  iconRight: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default PromptInput;