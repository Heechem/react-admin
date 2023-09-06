import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../them';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from '../../components/StatBox';
import LineChart from '../../components/LineChart';
import { mockTransactions } from '../../data/mockData';
import ProgressCircle from '../../components/ProgressCircle';
import Bar from '../bar/Bar';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={'20px'}>
      <Box
        display={'flex'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Header
          title={'Dashboard'}
          subtitle={'Welcome to the dashboard'}
        />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadDoneIcon sx={{ mr: '10px' }} />
            Download report
          </Button>
        </Box>
      </Box>

      {/* GRID  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={'12,361'}
            subtitle="Emails sent"
            progress="0.75"
            increase={'+14%'}
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={'9,500'}
            subtitle="Sales obtained"
            progress="0.5"
            increase={'+21%'}
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={'21,420'}
            subtitle="New clients"
            progress="0.3"
            increase={'+7%'}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={'1,325,134'}
            subtitle="Inbound Traffic"
            progress="0.3"
            increase={'+43%'}
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        {/* Row 2 */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={'600'}
                color={colors.grey[200]}
              >
                Revenue generated
              </Typography>

              <Typography
                variant="h5"
                fontWeight={'bold'}
                color={colors.greenAccent[500]}
              >
                $59,342,56
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadDoneIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            height={'250px'}
            mt="-20px"
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p={'15px'}
          >
            <Typography
              color={colors.grey[400]}
              variant="h5"
              fontWeight={'600'}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((trans, i) => (
            <Box
              key={`${trans.txId}-${i}`}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              borderBottom={`4px solid ${colors.primary[500]}`}
              p={'15px'}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={'600'}
                >
                  {trans.txId}
                </Typography>
                <Typography color={colors.grey[500]}>{trans.user}</Typography>
              </Box>
              <Box color={colors.grey[300]}>{trans.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p={'5px 10px'}
                borderRadius={'4px'}
              >
                {trans.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/*ROw 3   */}

        <Box
          gridColumn={'span 4'}
          gridRow={'span 2'}
          backgroundColor={colors.primary[400]}
          p={'30px'}
        >
          <Typography
            variant="h5"
            fontWeight={'600'}
          >
            Campaign
          </Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignContent={'center'}
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $48,36954
            </Typography>
            <Typography
              variant="h5"
              fontWeight={'600'}
            >
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        {/* BarChart  */}
        <Box
          gridColumn={'span 4'}
          gridRow={'span 2'}
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight={'600'}
            sx={{ p: '30px 30px 0 30px' }}
          >
            Sales quantity
          </Typography>
          <Box
            height={'250px'}
            mt="-20px"
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* Geochart  */}
        <Box
          gridColumn={'span 4'}
          gridRow={'span 2'}
          backgroundColor={colors.primary[400]}
          p={'30px'}
        >
          <Typography
            variant="h5"
            fontWeight={'600'}
            sx={{ mb: '15px' }}
          >
            Traffic geography chart
          </Typography>
          <Box height={'200px'}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
