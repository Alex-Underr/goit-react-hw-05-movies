import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import { CircleLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
export default function AppBar() {
  return (
    <>
      <Container>
        <Navigation />
      </Container>
      <Suspense fallback={<CircleLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </>
  );
}
