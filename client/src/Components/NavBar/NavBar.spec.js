import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav.jsx';

describe('<Nav/>', () => {
  beforeEach( () => {
    render(
      <BrowserRouter>
        <Nav/>
    </BrowserRouter>
  )
});
  test('Render Home', () => {
    const component = screen.getByText('Home');
    expect(component).toBeInTheDocument();
  });
  test('Render About', () => {
    const component = screen.getByText('About');
    expect(component).toBeInTheDocument();
  });

});
