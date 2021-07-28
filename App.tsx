import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, SafeAreaView, Text } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  const [count, setCount] = React.useState(0);
  const { t } = useTranslation();

  React.useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text>{t('hello.world')}</Text>
      <Text>{t('text.count', { value: count })}</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title={t('button.increment')}
      />
    </SafeAreaView>
  );
};

export default App;
