import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Banner from '../src/components/Banner';

storiesOf('Banner', module)
  .add('Random image', () => (
    <Banner />
  ))