import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Editor from '../src/components/Editor';

storiesOf('Editor', module)
  .add('with text', () => (
    <Editor onClick={action('clicked')}>Hello Button</Editor>
  ))
  .add('with some emoji', () => (
    <Editor onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Editor>
  ));