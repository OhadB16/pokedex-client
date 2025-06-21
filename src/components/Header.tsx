import { Box, Typography, Switch } from "@mui/material";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const PAGE_TITLE = "Pokédex";
  const LOGO_URL = "https://img.pokemondb.net/sprites/home/normal/pikachu.png";

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={2}
      borderBottom="3px solid red"
      mb={3}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <img src={LOGO_URL} alt="logo" width={40} height={40} />
        <Typography variant="h4" fontWeight="bold">
          {PAGE_TITLE}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Box>
    </Box>
  );
};

export default Header;
