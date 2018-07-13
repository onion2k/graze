import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/Header';

storiesOf('Header', module)
  .add('with text', () => (
    <Header onClick={action('clicked')}>Hello Button</Header>
  ))
  .add('with some emoji', () => (
    <Header onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Header>
  ));