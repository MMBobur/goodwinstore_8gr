import React from 'react'
import './Advertising.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1),
  ...theme.typography.body2,
  backgroundColor: 'transparent',
  color: theme.palette.text.secondary,
  borderRadius: 'none',
}));

const Advertising = () => {
  return (
    <Container style={{marginTop: '6%', marginBottom: '6%'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Item className='Item1'>
            <div className='ItemDiv1'>
              <span className='Text4'>BUY 2 ITEMS</span>
              <span className='Text1' style={{color: '#F7525A'}}>GET</span>
              <span className='Text3' style={{color: '#F7525A'}}>1 FOR FREE</span>
              <span className='Text5'>SHOP NOW</span>
              <hr className='hr' color='#9AC3E1' />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Item className='Item2'>
            <div className='ItemDiv2'>
              <span className='Text4'>PRODUCTS</span>
              <span className='Text3'>For Birds</span>
              <span className='Text3' style={{color: '#6B4B75'}}>NEW</span>
              <span className='Text3' style={{color: '#6B4B75'}}>ARRIVALS</span>
            </div>
          </Item>
          <Item className='Item3'>
            <div className='ItemDiv3'>
              <span className='Text3'>GET UP TO</span>
              <span className='Text2' style={{color: '#8D682D'}}>20% OFF!</span>
              <span className='Text5'>SHOP NOW</span>
              <hr className='hr' color='#8D682D' />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Item className='Item4'>
            <div className='ItemDiv4'>
              <span className='Text4' style={{}}>SPECIAL OFFER</span>
              <span className='Text1'>GET AN</span>
              <span className='Text2' style={{color: '#FEB557'}}>EXTRA 10%</span>
              <span className='Text4'>OF YOUR ORDER</span>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Advertising