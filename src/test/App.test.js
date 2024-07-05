import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/store';
import { App } from '../components/App/index';

describe('App', () => {
  test('renders home page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      screen.queryByText('Home')
    });

    expect(screen.queryByText('Home')).not.toBeNull()
  });

  test('renders error page for unknown route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/unknown']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByText('404 Error')).not.toBeNull()
  });

  test('renders contact page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Contact']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Contact Us')).not.toBeNull()
    });
  });

  test('renders cart page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Cart']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Cart is empty')).not.toBeNull()
    });
  });

  test('renders product page', async () => {
    const productId = '1';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/Product/${productId}`]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByText(`Similar items`)).not.toBeNull()
    });
  });

  test('renders shop page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Shop']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Filter')).not.toBeNull()
    });
  });

});