import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View, Keyboard } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numericGuess = parseInt(guess);

    if (isNaN(numericGuess)) {
      setFeedback('Vänligen ange ett giltigt heltal!');
      return;
    }

    Keyboard.dismiss();

    if (numericGuess < randomNumber) {
      setFeedback('För lågt!');
    } else if (numericGuess > randomNumber) {
      setFeedback('För högt!');
    } else {
      setFeedback('Rätt gissat! Ett nytt tal har genererats.');
      setRandomNumber(generateRandomNumber());
    }

    setGuess('');
  };

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <Text style={styles.title}>🎯🤔 Gissningslek</Text>
        <TextInput
          style={styles.input}
          placeholder="Skriv ett tal mellan 1 och 100"
          keyboardType="number-pad"
          value={guess}
          onChangeText={setGuess}
        />
        <Button title="Gissa" onPress={handleGuess} />
        <Text style={styles.feedback}>{feedback}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6fa',
  },
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 250,
    marginBottom: 12,
    paddingLeft: 12,
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  feedback: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
  },
});


