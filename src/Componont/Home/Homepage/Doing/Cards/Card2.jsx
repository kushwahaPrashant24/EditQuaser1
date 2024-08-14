import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from "../../../../../assets/logo.png";
import WebDesigning from "../../../../../assets/Web designing.png";

export default function Card2() {
  return (
    <Card
      sx={{
        maxWidth: 255,
        backgroundImage:
          "linear-gradient(to bottom, #10115d, #1c1260, #251263, #2e1366, #361369, #3b186c, #401c70, #452173, #482977, #4b317b, #4e397f, #524083)",
        color: "white",
        borderRadius: "24px",  // Setting the border radius with a unit
      }}
    >
      <CardActionArea>
        <CardMedia
          className='h-48'
          component="img"
          height="20"
          image={WebDesigning}
          alt="green iguana"
        />
        <CardContent sx={{ padding: '8px' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.25rem' }}>
            <h1 className='text-head2 text-center'>Website Designing</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p className='text-head text-center'>Shaping Your Distinct Online Presence</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
