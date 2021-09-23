import React, {useContext, useState, useRef} from 'react';
import {Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import { CONTACT_LIST } from '../../constants/routesName';

const CreateContact = () => {
  const {navigate} = useNavigation();
  const {
    contactDispatch,
    contactState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);

  const [form, setForm] = useState({});
  const [localFile, setLocalFile] = useState(null);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log(`form: >> `, form)
    createContact(form)(contactDispatch)(() => {
      navigate(CONTACT_LIST)
    });
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  }

  const openSheet = () => {
    if(sheetRef.current) {
      sheetRef.current.open();
    }
  }

  const closeSheet = () => {
    if(sheetRef.current) {
      sheetRef.current.close();
    }
  }

  const onFileSelect = (image) => {
    closeSheet();
    setLocalFile(image)
    console.log('image', image);
  }

  console.log(`loading:>`, loading)
  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      toggleValueChange={toggleValueChange}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelect={onFileSelect}
      localFile={localFile}
    />
  );
};

export default CreateContact;
