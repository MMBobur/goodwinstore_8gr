import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';
import Button from  '@mui/material/Button'
import './style.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
     
        <Container>
    <Box sx={{ width:'100%',backgroundColor:'white',mt:'10%'}}>
          <Typography style={{textAlign:'center',fontSize:'140%',fontWeight:'900',marginTop:'15%'}}>LATEST PRODUCTS
</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:'5%'}}>
        
        <Grid item xs={12} md={3} sm={6} lg={3}>
          <Typography className='A' sx={{backgroundImage:`url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/4_6e79e7c3-32c0-40d4-a851-3ef52d36d46f_medium.png?v=1617537471'})`,backgroundSize:'100%',width:'100%',height:'350px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
            <Typography className='pic'>
            <Typography class="overlay2">
             🤍
          </Typography>
          <Typography class="N">
             NEW
          </Typography>
              <Typography className='text'>
              <img src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/4_2_805edea6-da6c-4a05-97cb-0c7126dff659_263x.png?v=1617537471" width='100%' height='100%' className='Q' alt=""/>
                {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
              </Typography>
              <Typography className='text2'>
              <Button variant="contained" className='B' sx={{bgcolor:'#9AC3E1',marginTop:'70%',width:'100%',":hover":{backgroundColor:'black'}}}><LocalMallIcon sx={{margin:'2%',fontSize:'200%'}} className='O'/>Add Too Card</Button>
              </Typography>
            </Typography>
             </Typography>
            <Typography sx={{textAlign:'center'}}  className='A'>
            <Typography style={{textAlign:'centr',fontSize:'90%'}}>BIGSTEPS</Typography>
              <Typography style={{marginTop:'3%',color:'black',fontSize:'100%'}}>LARGE TERRARIUM</Typography>
            <Rating style={{fontSize:'120%',marginTop:"3%"}} name="no-value" value={null} />
            <Typography style={{color:'black',fontSize:'90%',marginTop:'3%'}}>$129.00 USD</Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sm={6} lg={3}>
        <Typography className='A' sx={{backgroundImage:`url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/2_5522abdc-21fd-4d23-acbb-2568bfa92246_medium.png?v=1617537098'})`,backgroundSize:'100%',width:'100%',height:'350px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
            <Typography className='pic'>
          <Typography class="overlay2">
             🤍
          </Typography>
          <Typography class="N">
             NEW
          </Typography>
              <Typography className='text'>
              <img src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/2_2_1ca8fb52-6df6-4c45-9d7b-923b3304772f_263x.png?v=1617537098"  width='100%' className='Q' height='100%' alt=""/>
                {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
              </Typography>
              <Typography className='text2'>
                <Button variant="contained" sx={{bgcolor:'#9AC3E1',marginTop:'70%',width:'100%',":hover":{backgroundColor:'black'}}}><LocalMallIcon sx={{margin:'2%',fontSize:'200%'}} className='O'/>Add Too Card</Button>
              </Typography>
            </Typography>
             </Typography>
            <Typography sx={{textAlign:'center'}}  className='A'>
            <Typography style={{textAlign:'centr',fontSize:'90%'}}>BIGSTEPS</Typography>
              <Typography style={{marginTop:'3%',color:'black',fontSize:'100%'}}>DOGS FOOD</Typography>
            <Rating style={{fontSize:'120%',marginTop:"3%"}} name="no-value" value={null} />
            <Typography style={{color:'black',fontSize:'90%',marginTop:'3%'}}>$129.00 USD</Typography>

<Typography style={{fontSize:'60%'}}>YOU SAVE $3.00 USD</Typography>
          </Typography>
              
        </Grid>
        <Grid item xs={12} md={3} sm={6} lg={3}>
        <Typography className='A' sx={{backgroundImage:`url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/1_76840759-7ae1-415c-849f-fbc4ee74465d_medium.png?v=1617530263'})`,backgroundSize:'100%',width:'100%',height:'350px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
            <Typography className='pic'>
          <Typography class="overlay2">
             🤍
          </Typography>
          <Typography class="N">
             NEW
          </Typography>
              <Typography className='text'>
              <img style={{width:'100%',height:'100%'}} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/1_2_db495332-140a-4411-9205-d1d450254fa3_263x.png?v=1617530263"  width='100%' className='Q' height='100%' alt=""/>
                {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
              </Typography>
              <Typography className='text2'>
              <Button variant="contained" sx={{bgcolor:'#9AC3E1',marginTop:'70%',width:'100%',":hover":{backgroundColor:'black'}}}><LocalMallIcon sx={{margin:'2%',fontSize:'200%'}} className='O'/>Add Too Card</Button>
              </Typography>
            </Typography>
             </Typography>
            <Typography sx={{textAlign:'center'}} className='A'>
            <Typography style={{textAlign:'centr',fontSize:'90%'}}>BIGSTEPS</Typography>
              <Typography style={{marginTop:'3%',color:'black',fontSize:'100%'}}>ADULT DOGS FOOD</Typography>
            <Rating style={{fontSize:'120%',marginTop:"3%"}} name="no-value" value={null} />
            <Typography style={{color:'black',fontSize:'90%',marginTop:'3%'}}>$129.00 USD</Typography>
            <Typography style={{fontSize:'60%'}}>YOU SAVE $3.00 USD</Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sm={6} lg={3}>
        <Typography className='A' sx={{backgroundImage:`url(${'https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_f7620e3a-849e-4d11-8238-fb9b0b8320d8_medium.png?v=1617530208'})`,backgroundSize:'100%',width:'100%',height:'350px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
            <Typography className='pic'>
          <Typography class="overlay2">
             🤍
          </Typography>
          <Typography class="N">
             NEW
          </Typography>
              <Typography className='text'>
              <img style={{width:'100%',height:'100%'}} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/products/3_2_985de8cc-d98d-40b5-8415-d8c6793368c8_263x.png?v=1617530209"  width='100%' className='Q' height='100%' alt=""/>
                {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
              </Typography>
              <Typography className='text2'>
              <Button variant="contained" sx={{bgcolor:'#9AC3E1',marginTop:'70%',width:'100%',":hover":{backgroundColor:'black'}}}><LocalMallIcon sx={{margin:'2%',fontSize:'200%'}} className='O'/>Add Too Card</Button>
              </Typography>
            </Typography>
             </Typography>
            <Typography sx={{textAlign:'center'}}  className='A'>
            <Typography style={{textAlign:'centr',fontSize:'90%'}}>BIGSTEPS</Typography>
              <Typography style={{marginTop:'3%',color:'black',fontSize:'100%'}}>WEATHER RESISTANT CAGE</Typography>
            <Rating style={{fontSize:'120%',marginTop:"3%"}} name="no-value" value={null} />
            <Typography style={{color:'black',fontSize:'90%',marginTop:'3%'}}>$129.00 USD</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
      </Container>
  );
}