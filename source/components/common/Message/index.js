import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  message,
  retry,
  retryFn,
  onDismiss,
  primary,
  success,
  danger,
  info,
}) => {
  const [userDismiss, setDismiss] = useState(false);
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (info) {
      return colors.secondary;
    }
    if (success) {
      return colors.success;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <>
      {userDismiss ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: colors.white}}>{message}</Text>

            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismiss(true);
                  onDismiss();
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
