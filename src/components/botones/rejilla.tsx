import { StyleSheet, View } from 'react-native';
import { Boton } from './boton';

export const Rejilla = () => {
  return (
    <View style={styles.gridContainer}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="AC" variant="action" />
        <Boton label="+/-" variant="action" />
        <Boton label="%" variant="action" />
        <Boton label="÷" variant="operator" />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" />
        <Boton label="8" />
        <Boton label="9" />
        <Boton label="×" variant="operator" />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" />
        <Boton label="5" />
        <Boton label="6" />
        <Boton label="-" variant="operator" />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" />
        <Boton label="2" />
        <Boton label="3" />
        <Boton label="+" variant="operator" />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="0" isDoubleWidth />
        <Boton label="," />
        <Boton label="=" variant="operator" />
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