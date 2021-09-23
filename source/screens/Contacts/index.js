import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContectsComponent from '../../components/ContactsComponents';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactDispatch,
    contactState: {
      getContacts: {data, loading}
    },
  } = useContext(GlobalContext);
  

  useEffect(() => {
    getContacts()(contactDispatch)
  }, []);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" size={25} name="menu" style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <ContectsComponent
      data={data}
      loading={loading}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;
