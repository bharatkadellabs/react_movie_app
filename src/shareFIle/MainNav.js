import  React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';



// const useStyles =makeStyles({
//     root:{
//         width :500,
//         position:"fixed",
//         bottom : 0,
//         backgroundColor :"#2d313a",
//         zIndex:100,
//     }
// })
export default function SimpleBottomNavigation() {
    // const classes =useStyles();
  const [value, setValue] = React.useState(0);
  const navigate =useNavigate();

    useEffect(() => {
        if(value===0) navigate('/');
        else if (value === 1) navigate("/movies");
        else if (value === 2) navigate("/series");
        else if (value === 3) navigate("/search");
    }, [value, navigate]);



  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
       
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{ backgroundColor :"#000836e1", position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction to="./" style={{color:"white"}} label="Trending" icon={<RestoreIcon />} />
        <BottomNavigationAction to='./movies' style={{color:"white"}} label="Movies" icon={<FavoriteIcon />} />
        <BottomNavigationAction to='./series' style={{color:"white"}} label="Tv-Series" icon={<LocationOnIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<LocationOnIcon />} />

      </BottomNavigation>
    </Box>
  );
}
