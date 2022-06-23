import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '0px',
  borderRadius: '0px',
  textAlign: 'center',
  boxSizing: 'border-box',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (

    <Container sx={{ width: '100%' , py:'5%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} sm={3} md={3} lg={3} rowSpacing={0}>
          <Item>
            <div style={{backgroundColor:'black', width:'100%'}} >
              <a href='https://goodwinstore-default.myshopify.com/pages/home-page-pets'>
                <Typography sx={{ position: 'relative', '&:hover':{opacity:0.8}}}>
                  <Typography><img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/files/banner-pets-01_360x.png?v=1617529369' style={{ marginBottom: '-8px',width:'100%' }} /></Typography>
                  <Typography sx={{ position: 'absolute', left: '30%', bottom: '13%', fontSize: {xs:10, sm:11, md:16}, color:'black' }}><b>ALL FOR DOG</b></Typography>
                </Typography>
              </a>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3} >
          <Item>
            <div style={{backgroundColor:'black',marginBottom:'17%'}}>
              <a href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' >
                <Typography sx={{ position: 'relative' , '&:hover':{opacity:0.8} }}>
                  <Typography><img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/files/banner-pets-06_360x.png?v=1617529362' style={{ marginBottom: '-8%',width:'100%' }} /></Typography>
                  <Typography sx={{ position: 'absolute', left: '30%', bottom: '18%', fontSize: {xs:10, sm:11, md:16}, color:'black',fontWeight:'bold' }}>ALL FOR FISH</Typography>
                </Typography>
              </a>
            </div>
          </Item>
          <Item>
            <div style={{backgroundColor:'black'}}>
              <a href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' >
                <Typography sx={{ position: 'relative' , '&:hover':{opacity:0.8} }}>
                  <Typography><img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/files/banner-pets-02_360x.png?v=1617529361' style={{width:'100%',marginBottom: '-8px'}} /></Typography>
                  <Typography sx={{ textAlign: 'center', position: 'absolute', left: '25%', bottom: '17%', fontSize: {xs:10, sm:11, md:16}, color:'black' }}><b>ALL FOR RABBIT</b></Typography>
                </Typography>
              </a>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3} >
          <Item>
            <div style={{backgroundColor:'black'}}>
              <a href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' >
                <Typography sx={{ position: 'relative' , '&:hover':{opacity:0.8} }}>
                  <Typography><img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/files/banner-pets-04_360x.png?v=1617529362' style={{width:'100%', marginBottom:'-8px'}} /></Typography>
                  <Typography sx={{ textAlign: 'center', position: 'absolute', left: '30%', bottom: '12%', fontSize: {xs:10, sm:11, md:16}, color:'black' }}><b>ALL FOR CAT</b></Typography>
                </Typography>
              </a>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <Item>
            <div style={{backgroundColor:'black',marginBottom:'13%'}}>
              <a href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' >
                <Typography sx={{ position: 'relative' , '&:hover':{opacity:0.8} }}>
                  <Typography><img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/files/banner-pets-05_360x.png?v=1617529361' style={{ width:'100%', marginBottom:'-8px' }} /></Typography>
                  <Typography sx={{ position: 'absolute', left: '30%', bottom: '15%', fontSize: {xs:10, sm:11, md:15}, color:'black' }}><b>ALL FOR BIRD'S</b></Typography>
                </Typography>
              </a>
            </div>
          </Item>
          <Item>
            <div style={{backgroundColor:'black'}}>
              <a href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' >
                <Typography sx={{ position: 'relative' , '&:hover':{opacity:0.8} }}>
                  <Typography><img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/files/banner-pets-03_360x.png?v=1617529361' style={{width:'100%', marginBottom:'-8px'}} /></Typography>
                  <Typography sx={{ position: 'absolute', left: '25%', bottom: '15%', fontSize: {xs:10, sm:11, md:16}, color:'black' }}><b>ALL FOR REPTILES</b></Typography>
                </Typography>
              </a>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
