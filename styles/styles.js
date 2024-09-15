import { StyleSheet } from 'react-native';

const colors = {
  primary: '#1E90FF',
  secondary: '#FF6347',
  background: '#F0F4F8',
  surface: '#FFFFFF',
  textPrimary: '#2E3A59',
  textSecondary: '#52616B',
  accent: '#FFD700',
  error: '#FF3B30',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    color: colors.textPrimary,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.textSecondary,
    fontSize: 16,
    paddingVertical: 5,
    marginBottom: 15,
    color: colors.textPrimary,
  },
  dateText: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 10,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: colors.surface,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  sumContainer: {
    marginVertical: 15,
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sumText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioLabel: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;