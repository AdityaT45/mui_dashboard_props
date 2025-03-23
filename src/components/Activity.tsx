import { Box } from "@mui/material";

import {  Avatar, Button,  Card,  CardContent,  CardMedia,  Divider,  Grid,  Typography,} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Activity = () => {
  return (
    <>
      <Box
        sx={{
          flex: { xs: "1", md: "3" },
       
          p: 2,
          borderRadius: 2,
          display:{md:"none",lg:"block"}
        }}
      >
        
          <Box >
            <Box
              
              mb={2}
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <Typography
                variant="h5"
                color="000000"
                sx={{
                  display: "flex",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Jobie's Activity
              </Typography>
              <Box flexGrow={1}></Box>
              <Button
                variant="outlined"
                sx={{
                  height: "45px",
                  marginRight: "35px",
                  borderRadius: "20px",
                  bgcolor: "#dbd8e1",
                  border: "none",
                  color: "black",
                  display:{md:"none",lg:"flex"}
                }}
              >
                Clear
              </Button>
            </Box>
          </Box>
          <Box  sx={{ bgcolor: "#ffffff", p: 2, borderRadius: "20px" }}
          >
            <Typography
              variant="h5"
              color="000000"
              sx={{
                display: "block",
                fontWeight: 700,
                textDecoration: "none",
                ml:1
              }}
            >
              today
            </Typography>
            <Grid sx={{ mt: 2 }}>
              <Card sx={{ display: "flex", border: "none", boxShadow: "none" }}>
                <CardMedia>
                  <Box sx={{ p: 3, pl: 2 }}>
                    <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                      <KeyboardArrowDownIcon />
                    </Avatar>
                  </Box>
                </CardMedia>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="subtitle1">
                      Highspeed Studios added a newe open position for UI
                      Designer
                    </Typography>
                    <Typography
                      variant="button"
                      color="#D6D6D6"
                      sx={{
                        fontWeight: 400,
                        textDecoration: "none",
                      }}
                    >
                      4 days ago
                    </Typography>
                    <Divider />
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
              </Card>

              <Card sx={{ display: "flex", border: "none", boxShadow: "none" }}>
                <CardMedia>
                  <Box sx={{ p: 3, pl: 2 }}>
                    <Avatar sx={{ bgcolor: "green" }} variant="rounded">
                      <KeyboardArrowDownIcon />
                    </Avatar>
                  </Box>
                </CardMedia>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="subtitle1">
                      Highspeed Studios added a newe open position for UI
                      Designer
                    </Typography>
                    <Typography
                      variant="button"
                      color="#D6D6D6"
                      sx={{
                        fontWeight: 400,
                        textDecoration: "none",
                      }}
                    >
                      4 days ago
                    </Typography>
                    <Divider />
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
              </Card>
              <Card sx={{ display: "flex", border: "none", boxShadow: "none" }}>
                <CardMedia>
                  <Box sx={{ p: 3, pl: 2 }}>
                    <Avatar sx={{ bgcolor: "orange" }} variant="rounded">
                      <KeyboardArrowDownIcon />
                    </Avatar>
                  </Box>
                </CardMedia>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="subtitle1">
                      Highspeed Studios added a newe open position for UI
                      Designer
                    </Typography>
                    <Typography
                      variant="button"
                      color="#D6D6D6"
                      sx={{
                        fontWeight: 400,
                        textDecoration: "none",
                      }}
                    >
                      4 days ago
                    </Typography>
                    <Divider />
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
              </Card>
              <Card sx={{ display: "flex", border: "none", boxShadow: "none" }}>
                <CardMedia>
                  <Box sx={{ p: 3, pl: 2 }}>
                    <Avatar sx={{ bgcolor: "purple" }} variant="rounded">
                      <KeyboardArrowDownIcon />
                    </Avatar>
                  </Box>
                </CardMedia>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="subtitle1">
                      Highspeed Studios added a newe open position for UI
                      Designer
                    </Typography>
                    <Typography
                      variant="button"
                      color="#D6D6D6"
                      sx={{
                        fontWeight: 400,
                        textDecoration: "none",
                      }}
                    >
                      4 days ago
                    </Typography>
                    <Divider />
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 5,
                  pb: 1,
                  boxShadow: "none",
                }}
              >
                <Typography
                  variant="button"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  view more
                </Typography>
              </Card>
            </Grid>
          </Box>

          <Grid item xs={12} sx={{ mt: 3 }}>
            <Card
              sx={{
                bgcolor: "primary.main",
                border: "none",
                boxShadow: "none",
                borderRadius: "20px",
                p: 5,
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#ffffff",
                }}
              >
                Power up your profile's streght with Jobie's Pro
              </Typography>

              <Typography
                component="div"
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#ffffff",
                  mt: 4,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ffffff",
                  color: "primary.main",
                  borderRadius: "20px",
                  mt: 3,
                }}
                endIcon={<ArrowForwardIcon />}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ fontWeight: 600, textDecoration: "none" }}
                >
                  Learn More
                </Typography>
              </Button>
            </Card>
          </Grid>
        
      </Box>
    </>
  );
};

export default Activity;
