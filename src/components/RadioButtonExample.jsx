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
