import { Box, Card, CardMedia, Typography } from "@mui/material";


import bannerImage from "./banner.png";

interface BannerProp{
  banner:{
    bannerImg:string,
    bannerNews:string,
    bannerName:string,
    bannerDate:number,
    bannerDescription:string
  }
}


const Banner:React.FC<BannerProp> = ({banner}) => {
  return (
    <>
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          
        }}
      >
        <Box
          sx={{
            borderRadius: "20px",
            bgcolor: "#ffffff" ,
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: { xs: "block", md: "block" },
            
          }}
        >
            <Card 
              sx={{
                width: "100%",
                height: "200px",
                borderRadius: "20px",
                boxShadow: "none",
                bgcolor: "#ffffff" 
              }}
            >
              <CardMedia component="img" sx={{}} image={bannerImage} />
            </Card>
          </Box>
          <Box   sx={{
            width: { xs: "100%", md: "30%" },
            display: { xs: "none", md: "block" },
          }}>
            <Card
              sx={{
                width: "100%",
                height: "200px",
                boxShadow: "none",
                display: { xs: "block", md: "flex" },
              }}
            >
              <CardMedia sx={{ p: 2 }}>
                <Typography
                  variant="button"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    textDecoration: "none",
                    display:""
                  }}
                >
                  
                  FEATURED
                </Typography>
                <Typography
                  variant="h6"
                  color="000000"
                  sx={{
                    display: "block",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {banner.bannerNews}
                </Typography>

                <Typography
                  variant="button"
                  color="#D6D6D6"
                  sx={{
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {banner.bannerName} &nbsp;&nbsp;&nbsp;&nbsp; {banner.bannerDate} days ago
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#7B7B7B"
                  sx={{
                    fontWeight: 400,
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {banner.bannerDescription}
                </Typography>
              </CardMedia>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
