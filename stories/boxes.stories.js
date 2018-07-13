import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Boxes from '../src/components/Boxes';

storiesOf('Boxes', module)
  .add('with text', () => (
    <Boxes onClick={action('clicked')}>Hello Button</Boxes>
  ))
  .add('with some emoji', () => (
    <Boxes onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Boxes>
  ));