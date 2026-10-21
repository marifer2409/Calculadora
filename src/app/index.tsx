import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Display } from '../components/botones/display';
import { Rejilla } from '../components/botones/rejilla';

export default function Index() {
  // Configurado para dar resultado 0 con la operación correspondiente
  const [operation, setOperation] = useState('20 × 0');
  const [result, setResult] = useState('0');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón de cambio de tema (Sol / Luna) */}
      <View style={styles.themeToggleContainer}>
        <View style={styles.themeSwitch}>
          <TouchableOpacity
            style={[styles.themeOption, theme === 'light' && styles.themeActive]}
            onPress={() => setTheme('light')}
          >
            <Text style={{ color: '#FFF' }}>☀️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.themeOption, theme === 'dark' && styles.themeActive]}
            onPress={() => setTheme('dark')}
          >
            <Text style={{ color: '#FFF' }}>🌙</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pantalla principal */}
      <Display operation={operation} result={result} />

      {/* Rejilla de botones */}
      <Rejilla />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B2A63', // Fondo morado degradado/oscuro según el prototipo
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  themeToggleContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  themeSwitch: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 4,
  },
  themeOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  themeActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
});