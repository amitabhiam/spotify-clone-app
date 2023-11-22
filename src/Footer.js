import React from 'react';
import './Footer.css';
import { PlayCircleFilledOutlined } from '@mui/icons-material';
import { SkipPrevious } from '@mui/icons-material';
import { SkipNext } from '@mui/icons-material';
import { Shuffle } from '@mui/icons-material';
import { Repeat } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import { PlaylistPlay } from '@mui/icons-material';
import { VolumeDown } from '@mui/icons-material';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img className='footer__albumLogo' 
            src='https://pbs.twimg.com/media/EK4I0vZW4AAoJ4Q.png' alt='' />
            <div className='footer__songInfo'>
                <h4>Loco</h4>
                <p>Enrique Iglesias</p>
            </div>
        </div>

        <div className='footer__center'>
            <Shuffle className='footer__green' />
            <SkipPrevious className='footer__icon' />
            <PlayCircleFilledOutlined className='footer__icon' />
            <SkipNext className='footer__icon' />
            <Repeat className='footer__green' />
        </div>

        <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer;