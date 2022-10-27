import { Link } from './AppBar.styled'
import { Box } from 'Box';
//import { Home } from 'pages/Home';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
    return (
        <Box as='header' p={2} mb={3} boxShadow="0px 5px 2px 0px rgba(0,0,0,0.75)">
        <Box as='nav'>
          {navItems.map(({ href, text }) => (
            <Link to={href} key={href}>{text}</Link>
          ))}
        </Box>
      </Box>
    );
}
