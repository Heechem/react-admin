import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../them';
import ProgressCircle from './ProgressCircle';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100dvw"
      m="0 30px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight={'bold'}
            sx={{
              color: colors.grey[100],
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[100],
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h"
          fontStyle="italic"
          sx={{
            color: colors.greenAccent[100],
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
