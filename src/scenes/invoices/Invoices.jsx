import { DataGrid } from '@mui/x-data-grid';

import { mockDataContacts, mockDataInvoices } from '../../data/mockData';

import { Box, useTheme, Typography } from '@mui/material';

import Header from '../../components/Header';
import { tokens } from '../../them';

const Invoices = () => {
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
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'cost',
      headerName: 'Costs',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header
        title={'Invoices'}
        subtitle={'List of invoice balance'}
      />
      <Box
        m="40px 0 0 0 "
        height="75vh"
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
            backgroundColor: colors.primary[600],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[600],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
