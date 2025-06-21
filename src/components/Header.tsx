import { Box, Typography, Switch } from "@mui/material";
import { LOGO_URL, PAGE_TITLE } from "../constants/pokemon";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
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
