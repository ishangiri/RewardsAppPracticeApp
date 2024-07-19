import * as React from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const FABButton = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [qrValue, setQRValue] = React.useState('');

  const handlePress = () => {
    setQRValue('https://youtube.com'); // Set the value you want to encode in the QR code
    setModalVisible(true);
  };

  return (
    <View>
      <FAB
        label='Scan QR'
        style={styles.fab}
        onPress={handlePress}
        backgroundColor = "#003893"
        color='#FFFFFF'
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.overlay} />
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your visits are recorded.</Text>
            <QRCode value={qrValue} size={300} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
             <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 100, // Ensure high elevation on Android
    zIndex: 2, // Ensure zIndex on iOS
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to dim the view
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default FABButton;
