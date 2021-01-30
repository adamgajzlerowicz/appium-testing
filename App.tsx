import React from 'react';
import {SafeAreaView, Text, StatusBar, Button, View} from 'react-native';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <View style={{padding: 50}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          accessibilityLabel="guzik"
          title={'press me please'}
          onPress={() => setIsVisible(!isVisible)}
        />
        {isVisible && <Text>Hello world! </Text>}
      </SafeAreaView>
    </View>
  );
};

export default App;
