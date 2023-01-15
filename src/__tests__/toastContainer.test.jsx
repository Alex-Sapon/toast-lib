import React from 'react';

import { render, renderHook } from '@testing-library/react';

import { Toast } from '@/components';
import { ToastContainer } from '@/components/toastContainer';
import { useToast } from '@/hooks/useToast';

it('render empty the ToastContainer component', () => {
  const { container } = render(<ToastContainer />);

  expect(container).toMatchSnapshot();
});

it('check useToast hook', () => {
  const { result } = renderHook(() => useToast());

  expect(result.current.toaster.success).toBeInstanceOf(Function);
});

it('renders the Toast component', () => {
  const { container } = render(
    <Toast
      id="1"
      title="Success"
      message="Test success message"
      autoClose={3000}
      remove={() => {}}
      position="bottom-left"
      color=""
      backgroundColor=""
      icon=""
    />,
  );

  expect(container).toMatchSnapshot();
});