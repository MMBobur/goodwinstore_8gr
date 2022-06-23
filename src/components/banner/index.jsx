import React from 'react'
import "./index.css";
// Import Swiper React components


import { Swiper, SwiperSlide} from "swiper/react";
import {Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules



import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import WestIcon from '@mui/icons-material/West';
// import EastIcon from '@mui/icons-material/East';

import { BiArchive, BiPhoneCall } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
// import { BsTelephoneX } from "react-icons/bs";
// import { border } from '@mui/system';

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  display: 'flex'
}));

export default function App() {
  return (
    <Box style={{marginTop: '10%'}}>
      <Swiper slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper">

        <SwiperSlide>
        <div className='sahifa1'>
          <Container maxWidth='lg'className="con">
            <Typography sx={{mt:'13%',mb:'18%',width:'50%'}}>
              <Typography sx={{typography:{xs:'h5',sm:'h3',md:'h2',lg:'h1'}}} 
              className='typver'>
                EVRIYTHING
                </Typography>
              <Typography sx={{typography:{xs:'h5',sm:'h3',md:'h2',lg:'h1'}, color:'#E5B775FF'}} className='typver'>
                YOU NEED
                </Typography>
              <Typography sx={{mt:'2%',mb:'3%',display:{sm:'flex', xs:'none'} }} className='typver'>
                When you buy online? pick up in store and you <br/> can safe your money
              </Typography>
              <Link href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' 
              sx={{textDecoration:'none',fontSize:'small',fontVariant:'all-petite-caps',color:'black'}} className='lin'>
                SHOP NOW
                <Typography sx={{borderBottom:'3px solid #E5982DFF',width:'65px',paddingTop:'2px'}} className='linkbor'/>
              </Link>
            </Typography>
            </Container>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='sahifa2'>
        <Container maxWidth='lg'className="con">
          <Typography sx={{mt:'13%',mb:'18%'}}>
              <Typography sx={{typography:{xs:'h5',sm:'h3',md:'h2',lg:'h1'},display:'flex'}} className='typver'>
                Save up
                 <Typography  sx={{typography:{xs:'h5',sm:'h4',md:'h3',lg:'h2'}}}>to</Typography></Typography>
              <Typography sx={{fontWeight:'900',color:'#9AC3E1FF',display:'flex',typography:{xs:'h5',sm:'h3',md:'h2',lg:'h1'}}} 
              className='typver'>40% 
              <Typography sx={{ml:'10px',color:'black',typography:{xs:'h5',sm:'h4',md:'h4',lg:'h3'}}} className='typver'>
                of money</Typography></Typography>
              <Typography sx={{mt:'2%',mb:'3%',display:{sm:'flex', xs:'none'} }} className='typver'>
                When you buy online? pick up in store and you <br/> can safe your money</Typography>
              <Link href='https://goodwinstore-default.myshopify.com/pages/home-page-pets' 
              sx={{textDecoration:'none',fontSize:'small',fontVariant:'all-petite-caps',color:'black'}} className='lin'>
                SHOP NOW
                <Typography sx={{borderBottom:'3px solid #2793E1FF',width:'65px',paddingTop:'2px'}} className='linkbor'/>
              </Link>
            </Typography>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>

      <Box sx={{ flexGrow: 1,mt:{lg:4,md:2,sm:2,xs:3} }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={4} sm={4} lg={4.5}>
              <Item sx={{color:'white' ,backgroundColor:'#9AC3E1FF'}} className='item'>
                <BiArchive className='icon'/>
              <Typography sx={{ml:'5%',textAlign:'start'}}>
                <Typography variant='button' >FREE WORLWIDE DELIVERY</Typography><br/>
                <Typography fontSize={8} >LOREM IPSUM DOLOR SIT AMET</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid xs={12} md={4} sm={4} lg={3}>
              <Item sx={{color:'white' ,backgroundColor:'#E5B775FF'}} className='item'>
              <BsArrowLeftCircle className='icon'/>
              <Typography sx={{ml:'5%',textAlign:'start'}}>
                <Typography variant='button'>100% MONEY BACK GUARANTEE</Typography>
                <Typography fontSize={8}>LOREM IPSUM DOLOR SIT AMET</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid xs={12} md={4} sm={4} lg={4.5}>
              <Item sx={{color:'white' ,backgroundColor:'#A3CF71FF'}} className='item'>
                <BiPhoneCall className='icon'/>
              <Typography sx={{ml:'5%',textAlign:'start'}}>
                <Typography variant='button'>24/7 CUSTOMER SUPPORT</Typography>
                <Typography fontSize={8}>LOREM IPSUM DOLOR SIT AMET</Typography>
                </Typography>
              </Item>
            </Grid>
      </Grid>
     </Box>
    </Box>
    
  );
}