import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  InputBase,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const MakeList: React.FunctionComponent = () => {
  return (
    <Container component="div" maxWidth="xs" style={{ height: "100vh" }}>
      <Grid
        container
        mt={12}
        display="flex"
        direction="column"
        style={{
          height: "100%",
          textAlign: "center",
        }}
      >
        <Grid item justifyContent="flex-start">
          <Box component="div">
            <Typography
              fontSize="28px"
              fontFamily="Lulo-Clean-One-Bold"
              color="#EC6B40"
              component="h1"
              variant="h5"
            >
              WEDDING LIST
            </Typography>
            <Typography mt={1} color="#EBE8D8" variant="body2">
              5th March 2022
            </Typography>
          </Box>
          <Box mt={5}>
            <Button
              sx={{
                fontSize: "12px",
                backgroundColor: "none",
                color: "#EBE8D8",
                fontFamily: "Lulo-Clean-One-Bold",
                textAlign: "center",
                border: "2px solid #EBE8D8",
                borderRadius: 0,
                width: "50%",
              }}
            >
              YOUR ITEMS
            </Button>
            <Button
              sx={{
                fontSize: "12px",
                backgroundColor: "#EBE8D8",
                color: "black",
                fontFamily: "Lulo-Clean-One-Bold",
                textAlign: "center",
                border: "2px solid #EBE8D8",
                borderRadius: 0,
                width: "50%",
              }}
            >
              ADD ITEMS
            </Button>
          </Box>

          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default MakeList;
