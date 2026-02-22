'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2600,
        style: {
          borderRadius: '999px',
          fontSize: '14px',
          background: '#1f2937',
          color: '#f8fafc'
        }
      }}
    />
  );
}