import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import Container from 'components/Container/Container';

import { Outlet } from 'react-router-dom';
export default function AppBar() {
  return (
    <>
      <Container>
        <Navigation />
      </Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
// loader
