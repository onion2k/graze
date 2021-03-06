import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Boxes from '../src/components/Boxes';

storiesOf('Boxes', module)
  .add('with text', () => (
    <Boxes onClick={action('clicked')}>Hello Button</Boxes>
  ))
  .add('with some emoji', () => (
    <Boxes>
        <div>Box</div>
    </Boxes>
  ));