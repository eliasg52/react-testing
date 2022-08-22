import { render, screen } from '@testing-library/react';
import { Greet } from './greets';

test('component should render the text hello and if a name its passed, rende this too', () => {
  render(<Greet name="Elias" />);
  const textElement = screen.getByText(`Hello Elias`);
  expect(textElement).toBeInTheDocument();
});
