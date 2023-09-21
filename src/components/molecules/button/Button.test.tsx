import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button.component';

test('Button renders correctly with primary prop', () => {
    render(<Button value="submit" onClick={() => {}} />);
    const buttonElement = screen.getByText('submit');
  
    expect(buttonElement).toBeInTheDocument();
  });