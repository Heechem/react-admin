import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext } from 'react';
import { colorModeContext, tokens } from '../../them';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);
  return (
    <Box
      display="flex"
      justifyContent={'space-between'}
      p={2}
    >
      {/* {searchbar} */}
      <Box
        display={'flex'}
        backgroundColor={colors.primary[400]}
        borderRadius={'3px'}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search"
        />
        <IconButton
          type="button"
          sx={{ p: 1 }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display={'flex'}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
