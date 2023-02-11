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
const StartList: React.FunctionComponent = () => {
  return (
    <Container component="div" maxWidth="xs" style={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100%",
          textAlign: "center",
        }}
      >
        <Grid item>
          <Box component="div" mt={2}>
            <Typography
              fontSize="28px"
              fontFamily="Lulo-Clean-One-Bold"
              color="#EC6B40"
              component="h1"
              variant="h5"
            >
              START A LIST
            </Typography>
          </Box>

          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#EBE8D8" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#EBE8D8" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#EBE8D8",
                },
              },
              mt: "20px",
            }}
            label="What's the occasion?"
            variant="outlined"
          />
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#EBE8D8" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#EBE8D8" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#EBE8D8",
                },
              },
              mt: "20px",
            }}
            label="Name Your List"
            variant="outlined"
          />
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#EBE8D8" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#EBE8D8" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#EBE8D8",
                },
              },
              mt: "20px",
            }}
            label="Date of occasion?"
            variant="outlined"
          />

          <Box mt={2} sx={{ display: "flex", justifyContent: "right" }}>
            <Button
              sx={{
                color: "#EC6B40",
                fontSize: "16px",
                fontFamily: "Lulo-Clean-One-Bold",
              }}
            >
              Continue <ArrowForwardIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StartList;
