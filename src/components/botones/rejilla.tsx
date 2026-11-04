import { StyleSheet, View } from 'react-native';
import { Boton } from './boton';

interface RejillaProps {
  onPressButton: (label: string) => void;
}

export const Rejilla = ({ onPressButton }: RejillaProps) => {
  return (
    <View style={styles.gridContainer}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="AC" variant="action" onPress={() => onPressButton('AC')} />
        <Boton label="+/-" variant="action" onPress={() => onPressButton('+/-')} />
        <Boton label="%" variant="action" onPress={() => onPressButton('%')} />
        <Boton label="÷" variant="operator" onPress={() => onPressButton('÷')} />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" onPress={() => onPressButton('7')} />
        <Boton label="8" onPress={() => onPressButton('8')} />
        <Boton label="9" onPress={() => onPressButton('9')} />
        <Boton label="×" variant="operator" onPress={() => onPressButton('×')} />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" onPress={() => onPressButton('4')} />
        <Boton label="5" onPress={() => onPressButton('5')} />
        <Boton label="6" onPress={() => onPressButton('6')} />
        <Boton label="-" variant="operator" onPress={() => onPressButton('-')} />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" onPress={() => onPressButton('1')} />
        <Boton label="2" onPress={() => onPressButton('2')} />
        <Boton label="3" onPress={() => onPressButton('3')} />
        <Boton label="+" variant="operator" onPress={() => onPressButton('+')} />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="0" isDoubleWidth onPress={() => onPressButton('0')} />
        <Boton label="," onPress={() => onPressButton(',')} />
        <Boton label="=" variant="operator" onPress={() => onPressButton('=')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    backgroundColor: 'rgba(50, 30, 90, 0.4)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16,
    paddingBottom: 32,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});