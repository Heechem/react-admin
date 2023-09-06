import React from 'react';
import GeographyChart from '../../components/GeographyChart';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import { useTheme } from '@emotion/react';
import { tokens } from '../../them';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="Geography Graph"
        subtitle="Simple geography chart"
      />
      <Box
        height="75dvh"
        border={`2px solid ${colors.grey[200]}`}
        borderRadius={'4px'}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
