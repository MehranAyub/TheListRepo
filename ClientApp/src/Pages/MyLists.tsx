import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  TextareaAutosize,
  Paper,
  List,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const MyLists: React.FunctionComponent = () => {
  return (
    <Container component="div" maxWidth="xs" style={{ height: "100vh" }}>
      <Box
        mt={12}
        style={{
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          fontSize="28px"
          fontFamily="Lulo-Clean-One-Bold"
          color="#EC6B40"
          component="h1"
          variant="h5"
        >
          My Lists
        </Typography>
        <Box mt={7} height="58vh">
          <Paper
            sx={{
              overflow: "auto",
              backgroundColor: "black",
            }}
          >
            <List
              sx={{
                maxHeight: 400,
                backgroundColor: "black",
              }}
            >
              {/* <Typography
                fontSize="16px"
                fontFamily="Lulo-Clean-One-Bold"
                color="#EBE8D8"
              >
                Wedding list{" "}
              </Typography>
              <Typography
                mt={7}
                fontSize="16px"
                fontFamily="Lulo-Clean-One-Bold"
                color="#EBE8D8"
              >
                Wedding list{" "}
              </Typography>
              <Typography
                mt={7}
                fontSize="16px"
                fontFamily="Lulo-Clean-One-Bold"
                color="#EBE8D8"
              >
                Wedding list{" "}
              </Typography> */}
              <Typography
                mt="50%"
                fontSize="8px"
                fontFamily="Lulo-Clean-One-Bold"
                color="#EBE8D8"
              >
                You have not made any lists yet.
              </Typography>
            </List>
          </Paper>
        </Box>
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              maxWidth: "220px",
              fontSize: "12px",
              backgroundColor: "none",
              color: "#EC6B40",
              fontFamily: "Lulo-Clean-One-Bold",
              textAlign: "center",
              border: "2px solid #EC6B40",
              borderRadius: 0,
              width: "100%",
            }}
          >
            start a new List
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MyLists;
