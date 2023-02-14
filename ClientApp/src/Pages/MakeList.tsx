import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  InputBase,
  Typography,
  Paper,
  List,
  Tab,
} from "@mui/material";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const MakeList: React.FunctionComponent = (props) => {
  const [value, setValue] = React.useState("YOURITEMS");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container component="div" maxWidth="lg">
      <Box
        pt={12}
        style={{
          height: "110vh",
          textAlign: "center",
        }}
      >
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
        <Box mt={3}>
          <TabContext value={value.toString()}>
            <Box>
              <TabList
                centered
                sx={{ alignContent: "center" }}
                onChange={handleChange}
              >
                <Tab
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
                  label="YOUR ITEMS"
                  value="YOURITEMS"
                />
                <Tab
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
                  label="ADD ITEMS"
                  value="ADDITEMS"
                />
              </TabList>
            </Box>
            <TabPanel value="YOURITEMS" style={{ padding: 0 }}>
              <Box height="58vh">
                <Paper sx={{ overflow: "auto" }}>
                  <List></List>
                </Paper>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#EBE8D8",
                  height: "8%",
                }}
                component="div"
                mt={2}
              >
                <Button
                  sx={{
                    fontSize: "12px",
                    color: "#7F7F7F",
                    fontFamily: "Lulo-Clean-One-Bold",
                    textAlign: "center",
                    borderRadius: 0,
                    width: "50%",
                  }}
                >
                  SAVE
                </Button>
                <Button
                  sx={{
                    fontSize: "12px",
                    backgroundColor: "#EBE8D8",
                    color: "#7F7F7F",
                    fontFamily: "Lulo-Clean-One-Bold",
                    textAlign: "center",
                    borderRadius: 0,
                    width: "50%",
                  }}
                >
                  SHARE
                </Button>
              </Box>
            </TabPanel>
            <TabPanel value="ADDITEMS" style={{ padding: 0 }}>
              <Box height="58vh">
                <Paper sx={{ overflow: "auto" }}>
                  <List></List>
                </Paper>
              </Box>
              <Box
                maxWidth="lg"
                mt={2}
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography
                  textAlign="center"
                  fontSize="12px"
                  fontFamily="Lulo-Clean-One-Bold"
                  color="#EBE8D8"
                >
                  Can’t find what you’re looking for?
                </Typography>
                <Button
                  sx={{
                    maxWidth: "270px",
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
                  Paste your link{" "}
                </Button>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
};

export default MakeList;
