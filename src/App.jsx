// App.jsx
import React from 'react';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json'; // Use Polaris translations
import RadioButtonExample from './components/RadioButtonExample';


const App = () => (
  <AppProvider i18n={enTranslations}>
    <div style={{ padding: '20px' }}>
      <RadioButtonExample/>
    </div>
  </AppProvider>
);

export default App;
