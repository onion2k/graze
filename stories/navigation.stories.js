import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navigation from '../src/components/Navigation';

storiesOf('Navigation', module)
  .add('with text', () => (
    <Navigation onClick={action('clicked')}>Hello Button</Navigation>
  ))
  .add('with some emoji', () => (
    <Navigation onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Navigation>
  ));