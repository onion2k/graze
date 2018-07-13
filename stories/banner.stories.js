import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Banner from '../src/components/Banner';

storiesOf('Banner', module)
  .add('with text', () => (
    <Banner onClick={action('clicked')}>Hello Button</Banner>
  ))
  .add('with some emoji', () => (
    <Banner onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Banner>
  ));