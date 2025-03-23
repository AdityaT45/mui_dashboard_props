import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';

import ClearAllIcon from '@mui/icons-material/ClearAll';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Badge, Fab } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


interface NotificationProp{
  notification: {
    notifications: number,
    messeges: number
  },
  profile:{
    ProfImage:string,
    ProfName:string,
    ProfRole:string
  }
}
const Appbar: React.FC<NotificationProp>=({notification,profile})=> {

 
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px",
    backgroundColor:"#e3e3e3",
    marginRight: theme.spacing(3),
    width: '100%',
    height:"45px",
    color: 'black',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.4, 4, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '25ch',
      },
    },
  }));

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none'  }}>

  
        <Toolbar disableGutters>
          < ClearAllIcon sx={{ ml:3,mr: 1 ,color:"black",fontSize: 60 }} />
          <Typography
            variant="h5"
            noWrap
            
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontWeight: 800,
    
             color:"black",
              textDecoration: 'none',
            }}
          >
            NEWS
          </Typography>
          <Box ></Box>
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search something here.."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
          <Fab color='secondary'sx={{ boxShadow: "none" ,mr:3}} > <Badge badgeContent={notification.messeges}   color='primary'><MessageIcon  sx={{ color: "#3e4651" }}/>  </Badge ></Fab>
          
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Fab color='secondary' sx={{ boxShadow: "none",mr:3 }}> <Badge badgeContent={notification.notifications}  color='primary'><NotificationsIcon sx={{ color: "#3e4651" }}/>  </Badge></Fab>
          
            
          
          </Box>
          <Box sx={{ flexGrow: 0 }}>
         
          <Avatar    alt="Remy Sharp" src={profile.ProfImage}  sx={{ boxShadow: "none",mr:2, width: 52, height: 52 }}/>
            
          </Box>

          <Box sx={{ flexGrow: 0,mr:2 }}>
         
          <Typography variant="button"   sx={{
             display: { xs: 'none', sm: 'none',md:"block" },
              fontWeight: 800,color:"black",textDecoration: 'none',}}>
                {profile.ProfName}
      

      </Typography>
      <Typography variant="caption" gutterBottom
      sx={{
        display: { xs: 'none', sm: 'none' ,md:"block"}, fontWeight: 600,color:"black",textDecoration: 'none',}}>
          {profile.ProfRole}
      
      </Typography>
            
          </Box>
        </Toolbar>
  
    </AppBar>
  );
}
export default Appbar;
