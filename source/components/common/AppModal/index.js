import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon type="material" name="close" size={25} />
              <Text style={styles.title}>{title || 'ContactManager'}</Text>
              <View />
            </View>
            <View style={styles.separator} />
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View>
                <>
                  <View style={styles.separator} />
                  <View style={styles.footerItem}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Services</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
