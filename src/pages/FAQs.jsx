
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Pink Container */}
      <Box
        sx={{
          backgroundColor: "#d5006d",
          padding: "80px 0",
          textAlign: "center",
          width: "100vw",
          color: "#fff",
        }}
      >
        <Typography style={{color: 'white'}} variant="h4">Hi, What can we help you with?</Typography>
      </Box>

      {/* White Container */}
      <Box
        sx={{
          backgroundColor: "grey",
          width: "80%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "60px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textAlign: "center",
          marginTop: "-60px",
          marginLeft: '462px'
        }}
      >
        <Typography color="white" variant="h5">Read and Solve your Queries ↓ </Typography>
      </Box>

      {/* FAQ Accordion */}
      <Box sx={{ width: "80%", maxWidth: "600px", margin: "20px auto", marginLeft: '462px' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Payments</Typography>
          </AccordionSummary>
          <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>At what time i need to pay the fees</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
             Payments are according to the package you have selected. If it is monthly package you need to pay each month. if it is a yearly package then u need to pay the full amount initially
            </Typography>
          </AccordionDetails>
          </Accordion>




          {/* paymnt 2nd qstn */}

          <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>how is refund managed?</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
             The exact amount of your training u had must be payed ,other will refunds.
            </Typography>
          </AccordionDetails>
          </Accordion>
          
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Training</Typography>
          </AccordionSummary>
          <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>If i miss a class can i continue the missed class or not</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
             You can continue the missed class, as u miss your class your time period of training extends.
            </Typography>
          </AccordionDetails>
          </Accordion>
          </Accordion>
      </Box>
    </div>
  );
};

export default FAQPage;
