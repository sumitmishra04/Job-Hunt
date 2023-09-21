import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox.component';

describe('Checkbox component', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(
      <Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />
    );

    const labelElement = getByText('Test Checkbox');

    expect(labelElement).toBeInTheDocument();
  });

  it('handles checkbox checked state', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Checkbox label="Test Checkbox" checked={false} onChange={onChangeMock} />
    );

    const checkboxInput = getByRole('checkbox');

    fireEvent.click(checkboxInput);

    expect(checkboxInput).toBeChecked();
    expect(onChangeMock).toHaveBeenCalledWith(true);

    fireEvent.click(checkboxInput);
  });

  it('handles checkbox unchecked state', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Checkbox label="Test Checkbox" checked={false} onChange={onChangeMock} />
    );

    const checkboxInput = getByRole('checkbox');
    expect(checkboxInput).not.toBeChecked();

    fireEvent.click(checkboxInput);
    expect(checkboxInput).toBeChecked();
  });
});
