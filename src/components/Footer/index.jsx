import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const Item = styled(Paper)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'start',
    padding: theme.spacing(1),
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

const Footer = () => {
    return (
        <>
            <div className='Div' >
                <Grid container spacing={0} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={{textAlign: 'center'}} sm={3} md={4} lg={4.8}>
                        <Item style={{textAlign: 'end', backgroundColor: 'transparent', color: '#4B5B7C', fontWeight: '900', padding: '20px'}}>SUBSCRIBE TO NEWSLETTER:</Item>
                    </Grid>
                    <Grid item xs={10} sm={6} md={4} lg={2}>
                        <Item style={{textAlign: 'center', backgroundColor: 'transparent', padding: '20px'}}><input placeholder='ENTER YOUR EMAIL ADDRESS   ' type="text" id="" className='INP' /></Item>
                    </Grid>
                    <Grid item xs={{textAlign: 'center'}} sm={3} md={4} lg={5}>
                        <Item style={{textAlign: 'start', backgroundColor: 'transparent', padding: '20px'}}>
                            <div className='Div3'>
                                <h3>SUBSCRIBE</h3>
                                <hr className='hr' />
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <Container>
                <div className='Div1'>
                    <Grid container spacing={0}  style={{marginTop: '3%', marginBottom: '10%'}}>
                        <Grid item sm={4} md={4} lg={2.2}>
                            <Item>
                                <th>CATEGORIES</th>
                                <tr>WOMEN'S</tr>
                                <tr>MEN'S</tr>
                                <tr>ACCESSORIES</tr>
                                <tr>BRANDS</tr>
                            </Item>
                        </Grid>
                        <Grid item sm={4} md={4} lg={2.2}>
                            <Item>
                                <th>INFORMATION</th>
                                <tr>ABOUT US</tr>
                                <tr>BLOG</tr>
                                <tr>GALLERY</tr>
                                <tr>F.A.Q.</tr>
                                <tr>CONTACT INFO</tr>
                            </Item>
                        </Grid>
                        <Grid item sm={4} md={4} lg={2.2}>
                            <Item>
                                <th>MY ACCOUNT</th>
                                <tr>SIGN IN</tr>
                                <tr>MY ACCOUNT</tr>
                                <tr>VIEW CART</tr>
                                <tr>MY WISHLIST</tr>
                                <tr>ORDER STATUS</tr>
                            </Item>
                        </Grid>
                        <Grid item sm={4} md={4} lg={2.4}>
                            <Item>
                                <th>CONDITIONS OF USE</th>
                                <tr>TERMS OF SERVICE</tr>
                                <tr>PRIVACY POLICY</tr>
                                <tr>REFUND POLICY</tr>
                            </Item>
                        </Grid>
                        <Grid item sm={8} md={8} lg={3}>
                            <Item>
                                <th>CONTACT US</th>
                                <tr>CALL US:   1 (800) 233-2742</tr>
                                <tr>HOURS:   MON-FRI 9AM-8PM</tr>
                                <tr>E-MAIL:   INFO@GOODWIN.US</tr>
                                <tr>ADDRESS:   GOODWIN STORE 140 NEW STR.,</tr>
                                <tr><RateReviewIcon style={{ color: '#9AC3E3' }} />  LIVE CHAT</tr>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className='Accordion'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <th>CATEGORIES</th>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <tr>WOMEN'S</tr>
                                <tr>MEN'S</tr>
                                <tr>ACCESSORIES</tr>
                                <tr>BRANDS</tr>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <th>INFORMATION</th>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <tr>ABOUT US</tr>
                                <tr>BLOG</tr>
                                <tr>GALLERY</tr>
                                <tr>F.A.Q.</tr>
                                <tr>CONTACT INFO</tr>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <th>MY ACCOUNT</th>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <tr>SIGN IN</tr>
                                <tr>MY ACCOUNT</tr>
                                <tr>VIEW CART</tr>
                                <tr>MY WISHLIST</tr>
                                <tr>ORDER STATUS</tr>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <th>CONDITIONS OF USE</th>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <tr>TERMS OF SERVICE</tr>
                                <tr>PRIVACY POLICY</tr>
                                <tr>REFUND POLICY</tr>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <th>CONTACT US</th>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <tr>CALL US:   1 (800) 233-2742</tr>
                                <tr>HOURS:   MON-FRI 9AM-8PM</tr>
                                <tr>E-MAIL:   INFO@GOODWIN.US</tr>
                                <tr>ADDRESS:   GOODWIN STORE 140 NEW STR.,</tr>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <tr><RateReviewIcon style={{ color: '#9AC3E3' }} />  LIVE CHAT</tr>
                </div>
                <Grid container spacing={0} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={12} md={2} className='GridImage1'>
                        <Item>
                            <img src="https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/logo-pets.png?v=152945384796340860281617541478" alt="" />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <Item>
                            <p style={{ fontSize: '8px' }}>@ COPYRIGHT 2020 <a href="#">GOODWINSTORE.</a> ALLRIGHTS RESERVED.</p>
                            <a style={{ fontSize: '12px' }} href="#">TERMS & CONDITIONS PRIVACY PLICY</a>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4.5} md={3}>
                        <Item>
                            <img style={{ width: '54px', height: '34px' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/payment-card-visax2.png?v=39617750260537052871608647343" alt="" />
                            <img style={{ width: '54px', height: '34px' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/payment-card-mastecardx2.png?v=57880844540374624361608647341" alt="" />
                            <img style={{ width: '54px', height: '34px' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/payment-card-discoverx2.png?v=153066928222998112181608647340" alt="" />
                            <img style={{ width: '54px', height: '34px' }} src="https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/payment-card-american-expressx2.png?v=49402002102920724781608647339" alt="" />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={7.5} md={2}>
                        <Item>
                            <ul style={{ display: 'flex', listStyle: 'none' }}>
                                <li><FacebookIcon /></li>
                                <li><TwitterIcon /></li>
                                <li><YouTubeIcon /></li>
                                <li><InstagramIcon /></li>
                                <li><PinterestIcon /></li>
                            </ul>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer