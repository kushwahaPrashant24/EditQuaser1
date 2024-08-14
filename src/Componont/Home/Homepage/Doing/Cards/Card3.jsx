import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea  } from '@mui/material';
import logo from "../../../../../assets/logo.png";
import Ux from "../../../../../assets/Ux-Ui.png";


export default function Card3() {
  return (
    
   <Card sx={{ 
  maxWidth: 255, 
  backgroundImage: 'linear-gradient(to bottom, #10115d, #1c1260, #251263, #2e1366, #361369, #3b186c, #401c70, #452173, #482977, #4b317b, #4e397f, #524083)', 
  color: 'white' ,
  borderRadius: "24px",
}}>
  <CardActionArea>
    <CardMedia
      className='h-48 w-36'
      component="img"
      height="20"
      image={Ux}
      alt="green iguana"
    />
    <CardContent sx={{ padding: '8px' }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.25rem' }}>
        <h1 className='text-head2 text-center'>UX & UI Design</h1>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <p className='text-head text-center'>Elevating User Experience to Excellence</p>
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>

  
  );
}
