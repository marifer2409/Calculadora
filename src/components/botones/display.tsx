import { StyleSheet, Text, View } from 'react-native';

interface DisplayProps {
  operation: string;
  result: string;
}

export const Display = ({ operation, result }: DisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.operationText}>{operation}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingBottom: 20,
    width: '100%',
  },
  operationText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 28,
    fontWeight: '400',
    marginBottom: 4,
  },
  resultText: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: '500',
  },
});