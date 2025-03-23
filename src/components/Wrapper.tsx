import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";
import Banner from "./Banner";
import News from "./News";
import Activity from "./Activity";


interface WrapperProps {
  data: any[];
  notification: {
    notifications: number,
    messeges: number
  },
  profile:{
    ProfImage:string,
    ProfName:string,
    ProfRole:string
  },

  banner:{
    bannerImg:string,
    bannerNews:string,
    bannerName:string,
    bannerDate:number,
    bannerDescription:string
  },

  menuItems :{
    text: string;
    icon: JSX.Element;
  }[]


}

const Wrapper: React.FC<WrapperProps> = ({ data,notification,profile,banner ,menuItems }) => {
  return (
    <Box sx={{ display: "flex", overflowX: "hidden",}}>

      <Sidebar menuItems={menuItems}></Sidebar>

      
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Appbar notification={notification} profile={profile} ></Appbar>
          
        <Banner banner={banner  }></Banner>

        
        <Box
          sx={{flex: 1,display: "flex",flexDirection: { xs: "column", md: "row" },gap: 2,p: 2}}
        >
        
          <News newsData={data}></News>
          
         <Activity></Activity>


          
          
        </Box>
      </Box>
    </Box>
  );
};

export default Wrapper;