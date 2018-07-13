import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/components/Box';

storiesOf('Box', module)
  .add('with text', () => (
    <Box onClick={action('clicked')}>Hello Button</Box>
  ))
  .add('with some emoji', () => (
    <Box>
        <div>Box</div>
    </Box>
  ));