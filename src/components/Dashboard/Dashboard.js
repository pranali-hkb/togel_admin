import React from "react";
import dashboardstyle from "./Dashboard.module.css";
import Typography from "@mui/material/Typography";
import MovingIcon from "@mui/icons-material/Moving";





import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Dashboard() {
  return (
    // <div className={dashboardstyle.mainsec}>
    //   <div className={dashboardstyle.innersection}>
    //     <div className={dashboardstyle.innerbox}>
    //       <div className={dashboardstyle.innercard1}>
    //         <Typography variant="h1">Super Master </Typography>
    //         <Typography variant="h2">No of Super Master </Typography>
    //         <Typography variant="h3">3 </Typography>
    //       </div>
    //     </div>

    //     <div className={dashboardstyle.innerbox}>
    //       <div className={dashboardstyle.innercard2}>
    //         <Typography variant="h1">Super Master </Typography>
    //         <Typography variant="h2">No of Super Master </Typography>
    //         <Typography variant="h3">3 </Typography>
    //       </div>
    //     </div>

    //     <div className={dashboardstyle.innerbox}>
    //       <div className={dashboardstyle.innercard3}>
    //         <Typography variant="h1">Super Master </Typography>
    //         <Typography variant="h2">No of Super Master </Typography>
    //         <Typography variant="h3">3 </Typography>
    //       </div>
    //     </div>
        
    //   </div>
    // </div>



<>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <Item> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
      <Typography >Super Master </Typography>
            <Typography >No of Super Master </Typography>
           <Typography >3 </Typography>
      </CardContent>
      
    </Card></Item>
        </Grid>
        <Grid item sm={12} md={4}>
          <Item> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
      <Typography >Super Master </Typography>
            <Typography >No of Super Master </Typography>
           <Typography >3 </Typography>
      </CardContent>
      
    </Card></Item>
        </Grid>

        <Grid item sm={12} md={4}>
          <Item> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
      <Typography >Super Master </Typography>
            <Typography >No of Super Master </Typography>
           <Typography >3 </Typography>
      </CardContent>
      
    </Card></Item>
        </Grid>
        
      </Grid>
    </Box>
</>

    
  );
}

export default Dashboard;
