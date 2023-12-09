import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, withTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {styles} from './LoginViewStyle';

interface PaymentScreenProps {
  theme: ThemeProp;
}

const doThis = () => {
  console.log('do this');
};

const doThat = () => {
  console.log('doThat');
};

const testFunc = () => {
  if ('yes') {
    doThis();
  } else {
    doThat();
  }
};

useEffect(() => {
  testFunc();
}, []);

const LoginView: React.FC<PaymentScreenProps> = ({theme}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{backgroundColor: theme.colors?.primary}}>
          <Text variant="headlineLarge" style={styles.header}>
            Modest App
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(LoginView);
