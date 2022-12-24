import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
