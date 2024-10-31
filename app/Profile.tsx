// ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeScreen, setActiveScreen] = useState<'login' | 'register' | null>(null);

  const handleOpenModal = (screen: 'login' | 'register') => {
    setActiveScreen(screen);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Brauhaus App!</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleOpenModal('login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleOpenModal('register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setActiveScreen(null);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {activeScreen === 'login' ? 'Login' : 'Register'}
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                  setActiveScreen(null);
                }}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </Pressable>
            </View>
            
            {activeScreen === 'login' ? (
              <LoginScreen onClose={() => setModalVisible(false)} />
            ) : (
              <RegisterScreen onClose={() => setModalVisible(false)} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C87A44',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
  },
});