import { Box } from "@mui/material";
import { Button, Typography } from "@mui/material";

import NewsCard from "./NewsCard";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NewsProps {
  newsData: any[];
}

const News: React.FC<NewsProps> = ({ newsData }) => {
  return (
    <>
      <Box
        sx={{
          flex: { xs: "1", md: "7" },
          p: 2,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <Typography
            variant="h5"
            color="000000"
            sx={{
              display: "block",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Jobie's News Update
          </Typography>
          <Box flexGrow={1}></Box>
          <Button
            variant="outlined"
            startIcon={<SortIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              height: "45px",
              marginRight: "35px",
              borderRadius: "20px",
              display: { xs: "none", sm: "flex" },
            }}
          >
            Newest
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          {newsData.map((news, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "48%",
                },
              }}
            >
              <NewsCard key={index} {...news} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default News;
