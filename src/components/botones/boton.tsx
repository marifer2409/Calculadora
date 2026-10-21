import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotonProps {
  label: string;
  onPress?: () => void;
  variant?: 'number' | 'action' | 'operator';
  isDoubleWidth?: boolean;
}

export const Boton = ({ label, onPress, variant = 'number', isDoubleWidth = false }: BotonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'action' && styles.actionButton,
        variant === 'operator' && styles.operatorButton,
        isDoubleWidth && styles.doubleWidth,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, variant === 'operator' && styles.operatorText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
    flex: 1,
    margin: 6,
  },
  doubleWidth: {
    flex: 2.15,
  },
  actionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
  },
  operatorButton: {
    backgroundColor: 'rgba(147, 133, 222, 0.45)',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
  operatorText: {
    color: '#D8CEFF',
    fontSize: 24,
  },
});