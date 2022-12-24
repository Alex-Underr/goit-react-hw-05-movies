import styles from './Navigation';
import { StyledLink } from './Navigation.styled';
const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};
export default Navigation;
