import React, { useEffect, useState } from 'react';
import BootScreen from './components/BootScreen';
import MainUI from './components/MainUI';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <BootScreen /> : <MainUI />}
    </>
  );
}
