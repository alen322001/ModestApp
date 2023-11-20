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

interface PaymentScreenProps {
  theme: ThemeProp;
}

const HomeView: React.FC<PaymentScreenProps> = ({theme}) => {
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
          <Text variant="headlineLarge">Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(HomeView);
