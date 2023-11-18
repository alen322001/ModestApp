import React from 'react';
import {View} from 'react-native';
import {Text, withTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {styles} from './LoginViewStyle';

interface PaymentScreenProps {
  theme: ThemeProp;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({theme}) => {
  return (
    <View style={{backgroundColor: theme.colors?.primary}}>
      <Text variant="headlineLarge" style={styles.header}>
        Modest App
      </Text>
    </View>
  );
};

export default withTheme(PaymentScreen);
