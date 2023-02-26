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
import { useQuery } from "react-query";
import ListApi from "./../services/Api/List.Api";
const MyLists: React.FunctionComponent = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "getMyLists",
    () => ListApi.MyLists("96009406-3FC0-4D94-FB49-08DAFAEB2E18"),
    {
      refetchOnWindowFocus: false,
      //enabled: false,
    }
  );

  const [myLists, setMyLists] = React.useState<any[]>([]);
  React.useEffect(() => {
    if (data) {
      setMyLists(data);
      console.log("Returned data ", data);
    }
  }, [data]);
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
              {myLists.map((item: any, index: number) => (
                <Typography
                  key={index}
                  fontSize="16px"
                  fontFamily="Lulo-Clean-One-Bold"
                  color="#EBE8D8"
                  mb={5.5}
                >
                  {item.title}
                </Typography>
              ))}

              <Typography
                display={myLists.length > 0 ? "none" : "block"}
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