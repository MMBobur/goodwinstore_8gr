import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'
import './style.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  boxShadow: 'none',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white' }}>
      <Container>
        <Typography style={{ textAlign: 'center', fontSize: '140%', fontWeight: '900' }}>RECOMMENDED</Typography>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '3%' }}>

          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_550a7e04-0529-4e6f-b167-500522b5115c.png?v=1617537410'})`, backgroundSize: '100%', width: '100%', height: '350px', mb: '10%' }}>                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                  <Typography style={{ position: 'absolute', marginLeft: '18%' }}>❤</Typography>
                  <img src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_2_dc07f2a7-6ee7-4b36-856b-0684866c10e2_263x.png?v=1617537410" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>LARGE TERRARIUM</Typography>
                  <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
                  <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
                  <Typography className='text2'>
                    <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '15%' }}><LocalMallIcon style={{fontSize:'120%'}}/> Add Too Card</Button>
                  </Typography>
                </Typography>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/5_3a5f8dbf-445a-45ad-9e1f-edc1a674e910.png?v=1617537244'})`, backgroundSize: '100%', width: '100%', height: '350px', mb: '10%' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>

                <Typography className='text'>
                  <Typography style={{ position: 'absolute', marginLeft: '18%' }}>❤</Typography>
                  <img src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/5_4_4d9ec1b9-56b8-4c9b-a398-9532742af244_263x.png?v=1617537255" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>DOGS FOOD</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
              {/* <Typography style={{fontSize:'60%'}}>YOU SAVE $3.00 USD</Typography> */}
            </Typography>

          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_b9a929e4-2b40-482b-8ed8-b449a3f64ee6.png?v=1617537149'})`, backgroundSize: '100%', width: '100%', height: '350px' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                  <Typography style={{ position: 'absolute', marginLeft: '18%' }}>❤</Typography>
                  <img style={{ width: '100%', height: '100%' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_2_367f1c1d-f03c-4a96-9e3a-c7563666759d.png?v=1617537150" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>ADULT DOGS FOOD</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
              <Typography style={{ fontSize: '60%' }}>YOU SAVE $3.00 USD</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/1_2_262bd8a3-ae1c-416b-b347-04bd36ad27b2.png?v=1617530077'})`, backgroundSize: '100%', width: '100%', height: '350px' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                  <Typography style={{ position: 'absolute', marginLeft: '18%' }}>🤍</Typography>
                  <img style={{ width: '100%', height: '100%' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/1_3_9e80c051-6198-4876-83c9-43b75218e15c_263x@2x.png?v=1617530078" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>WEATHER RESISTANT CAGE</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_f386f1ab-cd7b-4acc-b899-e4c7e9e5166d.png?v=1617536654'})`, backgroundSize: '100%', width: '100%', height: '350px' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                <Typography style={{position: 'absolute', marginLeft: '18%'}}>❤</Typography>

                  <img src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_2_a2d3f1e0-609b-4562-b8d0-8d6fa1adad78_263x.png?v=1617536654" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>CATS FOOD</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
              <Typography style={{ fontSize: '60%' }}>YOU SAVE $3.00 USD</Typography>
            </Typography>
          </Grid>
          <Grid xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/2_0b89f1a4-bdca-4df5-bdec-16e50a90af13.png?v=1617530321'})`, backgroundSize: '100%', width: '100%', height: '350px', marginTop: '3%' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                <Typography style={{position: 'absolute', marginLeft: '18%'}}>❤</Typography>

                  <img style={{ width: '100%', height: '100%' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/2_2_91b45f13-a9a5-4252-b892-9b174f192922_263x@2x.png?v=1617530321" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%', marginTop: '10%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>BIRDS CAGE</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/5_661d25f0-e509-42a4-98f8-3b22fff0ed17.png?v=1617536870'})`, backgroundSize: '100%', width: '100%', height: '350px' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                <Typography style={{position: 'absolute', marginLeft: '18%'}}>❤</Typography>

                  <img style={{ width: '100%', height: '100%' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/5_2_534e370b-cc89-4177-a74f-0f334aa66cec.png?v=1617536870" alt="" />
                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>COOKIES FOR CATS</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Item className='' sx={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/4_87c8f2f5-58f9-4066-870e-db783b16c4a2_medium.png?v=1617530481'})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', width: '100%', height: '350px' }}>
              {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
              <Typography className='pic'>
                <Typography className='text'>
                <Typography style={{position: 'absolute', marginLeft: '18%'}}>❤</Typography>

                  <img style={{ width: '100%', height: '100%' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/4-2.png?v=1617530481" alt="" />

                  {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                </Typography>
                <Typography className='text2'>
                  <Button variant="contained" sx={{ bgcolor: 'blue', border: '1px solid black', marginTop: '60%' }}><LocalMallIcon style={{fontSize:'120%'}}/>Add Too Card</Button>
                </Typography>
              </Typography>
            </Item>
            <Typography sx={{ textAlign: 'center' }}>
              <Typography style={{ textAlign: 'centr', fontSize: '90%' }}>BIGSTEPS</Typography>
              <Typography style={{ marginTop: '3%', color: 'black', fontSize: '100%' }}>BIRDS FOOD</Typography>
              <Rating style={{ fontSize: '120%', marginTop: "3%" }} name="no-value" value={null} />
              <Typography style={{ color: 'black', fontSize: '90%', marginTop: '3%' }}>$129.00 USD</Typography>
            </Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
