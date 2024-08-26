// Most of this is from MUI's tutorial on complex buttons
// mostly for testing purposes
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

// Had troubles loading local images, but image URL's seem to work fine.  Find out why later -Aaron
const images = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Khao_Yai%2C_Thailand%2C_Tropical_grasslands.jpg/800px-Khao_Yai%2C_Thailand%2C_Tropical_grasslands.jpg',
        title: 'Grasslands',
        width: '33%',
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tropical_rainforest%2C_Koh_Chang%2C_Thailand.jpg/800px-Tropical_rainforest%2C_Koh_Chang%2C_Thailand.jpg',
        title: 'Rainforest',
        width: '33%',
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Acacia_in_Ein_Khadra_Desert_Oasis_00_%2887%29.jpg/800px-Acacia_in_Ein_Khadra_Desert_Oasis_00_%2887%29.jpg',
        title: 'Desert',
        width: '34%',
    }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  export default function ButtonBaseDemo() {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    );
  }

