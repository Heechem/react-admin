import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../data/mockData';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useTheme } from '@emotion/react';

import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import { green } from '@mui/material/colors';
import { SecurityOutlined } from '@mui/icons-material';
import { tokens } from '../them';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column-cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={'60%'}
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsIcon />}
            {access === 'manager' && <SecurityOutlined />}

            {access === 'user' && <LockOpenIcon />}
            <Typography
              color={colors.grey[100]}
              sx={{ ml: '5px' }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Header
        title={'Team'}
        subtitle={'Managing team memebers'}
      />
      <Box
        m="40px 0 0 0 "
        Height="75dvh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column-cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
