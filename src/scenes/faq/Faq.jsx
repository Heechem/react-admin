import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { tokens } from '../../them';
import Header from '../../components/Header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="FAQ"
        subtitle="Frequently asked questions"
      />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo
            eos quo reiciendis qui sapiente! Rem pariatur nobis commodi!
            Temporibus iusto facilis tempora enim expedita obcaecati! Ad
            assumenda dolorum non!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo
            eos quo reiciendis qui sapiente! Rem pariatur nobis commodi!
            Temporibus iusto facilis tempora enim expedita obcaecati! Ad
            assumenda dolorum non!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo
            eos quo reiciendis qui sapiente! Rem pariatur nobis commodi!
            Temporibus iusto facilis tempora enim expedita obcaecati! Ad
            assumenda dolorum non!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo
            eos quo reiciendis qui sapiente! Rem pariatur nobis commodi!
            Temporibus iusto facilis tempora enim expedita obcaecati! Ad
            assumenda dolorum non!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Question 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo
            eos quo reiciendis qui sapiente! Rem pariatur nobis commodi!
            Temporibus iusto facilis tempora enim expedita obcaecati! Ad
            assumenda dolorum non!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            Question 6
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe illo
            eos quo reiciendis qui sapiente! Rem pariatur nobis commodi!
            Temporibus iusto facilis tempora enim expedita obcaecati! Ad
            assumenda dolorum non!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
