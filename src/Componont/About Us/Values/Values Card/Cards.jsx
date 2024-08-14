import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import props from './Data';

function Cards(props) {
    return <>
        
      <div className='flex w-[600px] h-56 rounded-lg' style={{backgroundColor: '#dfeaf0'}}>
      <div className='h-36 w-[500px]  p-5'>
      <img className='h-32 w-32' src={props.img} />
       
        </div>
        <div className='flex  flex-col  justify-center  gap-5 p-5'>
          <h1 className='text-xl text-black font-bold'>
          {props.Heading}
          </h1>
          <Typography variant="body2" color="text.secondary">
          {props.Content}
          </Typography>
        </div>
      </div>
  
    </>
}

export default Cards;