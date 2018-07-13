import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Banner from '../src/components/Banner';
import Flash from '../src/components/Flash';

storiesOf('Banner Flash', module)
  .add('Side', () => (
    <Banner>
        <Flash title={"Flash title content here"} />
    </Banner>
  ))