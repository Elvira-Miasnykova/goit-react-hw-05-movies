import { Link } from './AppBar.styled'
import { Box } from 'Box';
//import { Home } from 'pages/Home';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
    return (
        <Box as='header'>
        <Box as='nav'>
          {navItems.map(({ href, text }) => (
            <Link to={href} key={href}>{text}</Link>
          ))}
        </Box>
      </Box>
    );
}
