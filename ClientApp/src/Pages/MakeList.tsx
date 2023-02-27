import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Divider,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProductApi from "../services/Api/Product.Api";
import ListApi from "../services/Api/List.Api";
import { useMutation, useQuery } from "react-query";
import PageLoader from "../components/PageLoader";
import * as ModelSlice from "../models/ModelSlice";
import { useParams } from "react-router-dom";

const MakeList: React.FunctionComponent = () => {
  let { occasion, title, date, note } = useParams();

  console.log("Initial Data", occasion, title, note, date);
  const { data, isLoading, isError, refetch } = useQuery(
    "getAllProducts",
    () => ProductApi.GetAllProducts(search),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const {
    mutate,
    isLoading: adding,
    data: mutationData,
  } = useMutation((body) => ListApi.createList(body), {
    onSuccess: () => onListAdded(),
    onError: () => console.log("Could not add List"),
  });
  const [products, setProducts] = React.useState<ModelSlice.Product[]>([]);
  const [myList, setMyList] = React.useState<any[]>([]);
  const [myLinks, setMyLinks] = React.useState<ModelSlice.List[]>([]);
  const [savedList, setSavedList] = React.useState<any>([]);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [search, setSearch] = React.useState<string>("");

  const [link, setLink] = React.useState<any>({
    link: "",
    title: "",
    quantity: 0,
  });
  const [value, setValue] = React.useState("YOURITEMS");
  const [openLinkDialog, setOpenLinkDialog] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onListAdded = () => {
    console.log("List Added successfully");
  };
  const handleClose = () => {
    setOpenLinkDialog(false);
    setErrorMessage(false);
  };
  const handleSubmit = () => {
    console.log("Links Value", link);
    if (link.link !== "" && link.name !== "" && link.quantity > 0) {
      handleClose();
      return setMyLinks([...myLinks, { ...link }]);
    }
    setErrorMessage(true);
  };
  const handleSave = () => {
    let list = {} as any;
    list = {
      id: savedList !== null ? savedList.id : null,
      title: title,
      occasion: occasion,
      date: date,
      note: note,
      listItems: myList,
      linkItems: myLinks,
      userId: "96009406-3FC0-4D94-FB49-08DAFAEB2E18",
    };

    mutate(list);
  };

  const handleLinkValue = (event: any) => {
    setLink({ ...link, [event.target.name]: event.target.value });
  };
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  React.useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);
  React.useEffect(() => {
    const timeOutId = setTimeout(() => refetch(), 1000);
    return () => clearTimeout(timeOutId);
  }, [search]);

  React.useEffect(() => {
    if (mutationData) {
      if (mutationData.status === 0) {
        setSavedList(mutationData.entity);
        setMyLinks(mutationData.entity.linkItems);
        setMyList(mutationData.entity.listItems);
      }
      console.log("Returned Data after saving list", mutationData);
    }
  }, [mutationData]);

  React.useEffect(() => {
    console.log("List Items", myList, "Link Itrems", myLinks);
  }, [myList]);

  const addItem = (item: any) => {
    setMyList([
      ...myList,
      {
        title: item.title,
        quantity: item.quantity,
        image: item.image,
        price: item.price,
        storeLink: item.storeLink,
      },
    ]);
    console.log("List", myList);
  };

  return (
    <>
      <Container component="div" maxWidth="lg">
        <PageLoader isLoading={isLoading || adding}></PageLoader>
        <Box
          pt={12}
          style={{
            height: "125vh",
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
              {occasion}{" "}
            </Typography>
            <Typography mt={1} color="#EBE8D8" variant="body2">
              {date}{" "}
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
                      backgroundColor:
                        value === "YOURITEMS" ? "none" : "#EBE8D8",

                      fontFamily: "Lulo-Clean-One-Bold",
                      textAlign: "center",
                      border: "2px solid #EBE8D8",
                      borderRadius: 0,
                      width: "50%",
                      "&.MuiTab-root	": {
                        color: value === "YOURITEMS" ? "#EBE8D8" : "black",
                      },
                    }}
                    label="YOUR ITEMS"
                    value="YOURITEMS"
                  />
                  <Tab
                    sx={{
                      fontSize: "12px",
                      backgroundColor:
                        value === "YOURITEMS" ? "#EBE8D8" : "none",
                      fontFamily: "Lulo-Clean-One-Bold",
                      textAlign: "center",
                      border: "2px solid #EBE8D8",
                      borderRadius: 0,
                      width: "50%",
                      "&.MuiTab-root	": {
                        color: value === "YOURITEMS" ? "black" : "#EBE8D8",
                      },
                    }}
                    label="ADD ITEMS"
                    value="ADDITEMS"
                  />
                </TabList>
              </Box>
              <TabPanel value="YOURITEMS" sx={{ mt: 3, p: 0 }}>
                <Box sx={{ ml: { xs: 0, md: 10 } }} height="58vh">
                  <Paper
                    sx={{
                      overflow: "auto",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        mt: 20,
                        display:
                          myLinks.length || myList.length > 0
                            ? "none"
                            : "block",
                        fontSize: "14px",
                        color: "#EBE8D8",
                        textAlign: "center",
                      }}
                    >
                      No items added yet{" "}
                    </Typography>
                    <List
                      sx={{
                        maxHeight: 400,
                        backgroundColor: "black",
                      }}
                    >
                      <>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          textAlign="left"
                          color="#EBE8D8"
                          spacing={2}
                          pl={2}
                        >
                          {myList.map((item: any, index: number) => (
                            <Grid key={index} item xs={6} md={3}>
                              <Box>
                                <img
                                  style={{ width: "129px", height: "153px" }}
                                  alt=""
                                  src={
                                    "https://localhost:7216/Assets/" +
                                    item.image
                                  }
                                ></img>
                                <Typography
                                  noWrap
                                  sx={{
                                    fontSize: "14px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    width: "17ch",
                                  }}
                                >
                                  {item.title}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                  }}
                                >
                                  {item.price}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    color: "#EC6B40",
                                  }}
                                >
                                  1 Piece
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                        <Typography
                          sx={{
                            mt: 5,
                            display: myLinks.length > 0 ? "block" : "none",
                            fontSize: "16px",
                            color: "#EC6B40",
                            textAlign: "left",
                            fontFamily: "Lulo-Clean-One-Bold",
                          }}
                        >
                          Your Links
                        </Typography>
                        {myLinks.map((item: any, index: number) => (
                          <React.Fragment key={index}>
                            <Box
                              sx={{
                                mt: 2,
                                display: "flex",
                                direction: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "#EBE8D8",
                                }}
                              >
                                {item.title}
                              </Typography>

                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "#EC6B40",
                                }}
                              >
                                {item.quantity + " "}Piece
                              </Typography>
                            </Box>
                            <Divider
                              sx={{
                                border: "0.5px solid #EBE8D8",
                              }}
                            />
                          </React.Fragment>
                        ))}
                      </>
                    </List>
                  </Paper>
                </Box>

                <Grid
                  container
                  justifyContent="center"
                  display="flex"
                  direction="row"
                  width="100%"
                  sx={{ position: "fixed", bottom: 0, left: 0 }}
                >
                  <Grid
                    sx={{ backgroundColor: "#EBE8D8" }}
                    width="100%"
                    item
                    xs={6}
                    md={4}
                  >
                    <Button
                      disabled={
                        (myList.length <= 0 && myLinks.length <= 0) ||
                        (myList.every((item) => item.id) &&
                          myLinks.every((item) => item.id))
                      }
                      sx={{
                        fontSize: "12px",
                        color: "#EC6B40",
                        fontFamily: "Lulo-Clean-One-Bold",
                        textAlign: "center",
                        borderRadius: 0,
                        width: "100%",
                        height: "8vh",
                      }}
                      onClick={() => {
                        handleSave();
                      }}
                    >
                      SAVE
                    </Button>
                  </Grid>
                  <Grid item md={4} xs={6} sx={{ backgroundColor: "#EBE8D8" }}>
                    <Button
                      sx={{
                        fontSize: "12px",
                        backgroundColor: "#EBE8D8",
                        color: "#7F7F7F",
                        fontFamily: "Lulo-Clean-One-Bold",
                        textAlign: "center",
                        borderRadius: 0,
                        width: "100%",

                        height: "8vh",
                      }}
                    >
                      SHARE
                    </Button>
                  </Grid>
                </Grid>

                {/* <Box
                      sx={{
                        backgroundColor: "#EBE8D8",
                        position: "fixed",
                        bottom: 0,
                      }}
                      component="div"
                      mt={2}
                    >
                      <Button
                        disabled={myList.length <= 0 && myLinks.length <= 0}
                        sx={{
                          fontSize: "12px",
                          color: "#EC6B40",
                          fontFamily: "Lulo-Clean-One-Bold",
                          textAlign: "center",
                          borderRadius: 0,
                          width: "50%",
                          height: "8vh",
                        }}
                        onClick={() => {
                          handleSave();
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

                          height: "8vh",
                        }}
                      >
                        SHARE
                      </Button>
                    </Box> */}
              </TabPanel>
              <TabPanel value="ADDITEMS" sx={{ mt: 3, p: 0 }}>
                <Box>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiInputLabel-root": { color: "#EBE8D85C" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          borderColor: "#EBE8D8",
                          borderRadius: "0px",
                        },
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "#EBE8D8",
                        },
                      },
                      input: { color: "#EBE8D8" },
                      mt: "20px",
                    }}
                    name="occasion"
                    onChange={handleSearch}
                    value={search}
                    label="Search for items"
                    variant="outlined"
                  />
                  <Typography
                    sx={{
                      fontFamily: "Lulo-Clean-One-Bold",
                      mt: 3,
                      fontSize: "16px",
                      color: "#EBE8D8",
                      textAlign: "left",
                    }}
                  >
                    FEATURED Items{" "}
                  </Typography>
                </Box>
                <Box sx={{ ml: { xs: 0, md: 10 }, mt: 3 }} height="58vh">
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
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        textAlign="left"
                        color="#EBE8D8"
                        spacing={2}
                        pl={2}
                      >
                        {products.map((item: any, index: number) => (
                          <Grid key={index} item xs={6} md={3}>
                            <Box>
                              <img
                                style={{ width: "129px", height: "153px" }}
                                alt=""
                                src={
                                  "https://localhost:7216/Assets/" + item.image
                                }
                              ></img>

                              <Typography
                                noWrap
                                sx={{
                                  fontSize: "14px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  width: "17ch",
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                }}
                              >
                                {item.price}
                              </Typography>
                              <Box
                                width="129px"
                                sx={{ backgroundColor: "#EBE8D8" }}
                              >
                                <Button
                                  sx={{
                                    fontSize: "14px",
                                    color: "black",
                                    fontFamily: "Lulo-Clean-One-Bold",
                                    textAlign: "center",
                                    borderRadius: 0,
                                    width: "100%",
                                  }}
                                  onClick={() => {
                                    console.log("Item Added", item.id);
                                    addItem(item);
                                  }}
                                >
                                  ADD
                                </Button>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </List>
                  </Paper>
                </Box>
                <Box
                  maxWidth="lg"
                  mt={2}
                  sx={{
                    justifyContent: "center",
                    bottom: 0,
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
                    onClick={() => {
                      setOpenLinkDialog(true);
                    }}
                  >
                    Paste your link{" "}
                  </Button>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Dialog
          maxWidth={"sm"}
          open={openLinkDialog}
          onClose={handleClose}
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: "#EBE8D8",
            },
          }}
        >
          <DialogTitle
            sx={{
              textAlign: "left",
              fontFamily: "Lulo-Clean-One-Bold",
              fontSize: "16px",
              lineHeight: "19.2px",
            }}
          >
            ADD a Link of any product from any website.
          </DialogTitle>
          <DialogContent>
            <p
              style={{ color: "red", display: errorMessage ? "block" : "none" }}
            >
              Please fill all fields*
            </p>
            <TextField
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "black" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "black", borderRadius: 0 },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "black",
                  },
                },
                mt: 3,
              }}
              name="link"
              onChange={handleLinkValue}
              value={link.link}
              label="Item Link"
              variant="outlined"
            />
            <TextField
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "black" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "black", borderRadius: 0 },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "black",
                  },
                },
                mt: 3,
              }}
              name="title"
              onChange={handleLinkValue}
              value={link.name}
              label="Name"
              variant="outlined"
            />
            <TextField
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "black" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "black", borderRadius: 0 },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "black",
                  },
                },
                mt: 3,
              }}
              type="number"
              name="quantity"
              onChange={handleLinkValue}
              value={link.quantity}
              label="Quantity"
              variant="outlined"
            />
            <Box
              mt={3}
              sx={{
                display: "flex",
                direction: "row",
                backgroundColor: "#EBE8D8",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <Button
                sx={{
                  width: "48%",
                  color: "#EC6B40",
                  backgroundColor: "none",
                  border: "2px solid #EC6B40",
                  borderRadius: 0,
                  fontSize: "14px",
                  fontFamily: "Lulo-Clean-One-Bold",
                }}
                autoFocus
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  borderRadius: 0,
                  width: "48%",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#EC6B40",
                  },
                  backgroundColor: "#EC6B40",
                  fontSize: "14px",
                  fontFamily: "Lulo-Clean-One-Bold",
                }}
                onClick={handleSubmit}
              >
                ADD
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
};

export default MakeList;
