import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Review from '../src/components/Review';

storiesOf('Review', module)
  .add('with text', () => (
    <Review onClick={action('clicked')}>Hello Button</Review>
  ))
  .add('with some emoji', () => (
    <Review onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Review>
  ));