import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import {CREATE_CONTACT} from '../../constants/routesName';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';

const ContectsComponent = ({loading, data, modalVisible, setModalVisible}) => {
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 50}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    // console.log('Item: ', item);

    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={styles.char}>{first_name[0].toUpperCase()}</Text>
              <Text style={styles.char}>{last_name[0].toUpperCase()}</Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`+${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={17} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white}}>
        <AppModal
          title="My Profile"
          modalBody={<Text>Hello Form Modal</Text>}
          modalFooter={<></>}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 50}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 100}}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" color={colors.white} size={20} />
      </TouchableOpacity>
    </>
  );
};

export default ContectsComponent;
