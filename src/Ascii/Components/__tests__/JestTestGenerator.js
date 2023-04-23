import React from 'react';
import { render } from '@testing-library/react';
import Generator from '../Generator';

describe('Generator component', () => {
  it('renders without crashing', () => {
    render(<Generator />);
  });
});