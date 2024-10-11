# boiler-plate-polaris-ui

To integrate the `LegacyStack` and `RadioButton` from `@shopify/polaris` into your **React + Vite + JavaScript** application, follow these steps:

### Step 1: Install `@shopify/polaris` and its dependencies

If you haven't already installed the Polaris package and its peer dependencies, you'll need to do so:

```bash
npm install @shopify/polaris
npm install @emotion/react @emotion/styled
```

### Step 2: Update your Vite config for Polaris

Polaris components require CSS from the package to function properly. You need to import the Polaris CSS file globally. Here's how:

1. Create a `vite.config.js` file (if not already present) in your project root and add necessary configuration to handle the styles from Polaris.

2. Import the Polaris global CSS in your main `index.js` or `main.js` (entry file).

```javascript
// main.jsx or index.jsx
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

// Wrap your app with AppProvider from Polaris
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
```

### Step 3: Update the `RadioButtonExample.jsx`

Since you're using **JavaScript** with Vite, you can keep your component as is but make sure you're not using TypeScript types like `(_: boolean, newValue: string)` in a JavaScript project. Here is the corrected version:

```javascript
import { LegacyStack, RadioButton } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function RadioButtonExample() {
  const [value, setValue] = useState('disabled');

  const handleChange = useCallback(
    (newValue) => setValue(newValue), // Remove type annotations
    [],
  );

  return (
    <LegacyStack vertical>
      <RadioButton
        label="Accounts are disabled"
        helpText="Customers will only be able to check out as guests."
        checked={value === 'disabled'}
        id="disabled"
        name="accounts"
        onChange={() => handleChange('disabled')}
      />
      <RadioButton
        label="Accounts are optional"
        helpText="Customers will be able to check out with a customer account or as a guest."
        id="optional"
        name="accounts"
        checked={value === 'optional'}
        onChange={() => handleChange('optional')}
      />
    </LegacyStack>
  );
}

export default RadioButtonExample;
```

### Step 4: Add this component to your main application

```javascript
import RadioButtonExample from './RadioButtonExample';

function App() {
  return (
    <div className="App">
      <RadioButtonExample />
    </div>
  );
}

export default App;
```

### Step 5: Run your Vite development server

Start the Vite server by running:

```bash
npm run dev
```

### Summary

- Installed `@shopify/polaris` and its peer dependencies.
- Imported Polaris CSS in your `main.js` or `index.js`.
- Created a `RadioButtonExample` component using Polaris's `LegacyStack` and `RadioButton`.
- Rendered the component within your main app structure.
