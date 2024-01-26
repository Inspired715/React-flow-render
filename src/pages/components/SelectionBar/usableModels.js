import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { computeGraphActions } from '../../../store/ComputeGraph-slice';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

import Docs from './docs';

const buttonStyles = {
  height: '53px',
  borderRadius: '8px',
  backgroundColor: 'rgb(70,70,70)',
  color: 'rgb(255,255,255)',
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '10px',
  fontSize: '15px',

  '&:hover': {
    backgroundColor: 'rgb(130,130,130)',
  },
};

const SelectModel = () => {
  const [clickedButton, setClickedButton] = useState(1);

  const dispatch = useDispatch();
  const setPredefinedModel = (name) => {
    dispatch(computeGraphActions.setPredefinedModel(name));
  };
  const setClicked = (number) => {
    dispatch(computeGraphActions.setClicked(number));
  };
  const setEdgesActive = (name) => {
    dispatch(computeGraphActions.setEdgesActive(name));
  };

  const handleClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      sx={{
        position: 'relative',
        height: '100%',
        overflow: 'auto',
        padding: 0,
        margin: 0,
        bgcolor: 'rgb(40,40,40)',
      }}
    >
      <Grid
        item
        sx={{ height: { xs: '50%', sm: '60%', md: '60%' }, overflow: 'auto' }}
      >
        <Stack style={{}} direction="column">
          <Button
            variant="contained"
            onClick={() => {
              handleClick(0);
              setPredefinedModel('');
              setClicked(0);
              setEdgesActive(false);
            }}
            sx={{
              ...buttonStyles,
              backgroundColor:
                clickedButton === 0
                  ? 'rgb(110,110,110)'
                  : buttonStyles.backgroundColor,
              border: 'solid 0px rgb(155,150,150)',
              height: '53px',
              paddingLeft: '20px',
            }}
            startIcon={<AddIcon />}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                paddingLeft: '3px',
              }}
            >
              New Model
            </Box>
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              handleClick(1);
              setPredefinedModel('Regression1');
              // setClicked(0);
              setEdgesActive(false);
            }}
            sx={{
              ...buttonStyles,
              backgroundColor:
                clickedButton === 1
                  ? 'rgb(110,110,110)'
                  : buttonStyles.backgroundColor,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                paddingLeft: '3px',
              }}
            >
              Regression Model 1
            </Box>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClick(2);
              setPredefinedModel('Regression1raw');
              // setClicked(0);
              setEdgesActive(false);
            }}
            sx={{
              ...buttonStyles,
              backgroundColor:
                clickedButton === 2
                  ? 'rgb(110,110,110)'
                  : buttonStyles.backgroundColor,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                paddingLeft: '3px',
              }}
            >
              Regression Model 1 (raw)
            </Box>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClick(3);
              setPredefinedModel('Classification1');
            }}
            sx={{
              ...buttonStyles,
              backgroundColor:
                clickedButton === 3
                  ? 'rgb(110,110,110)'
                  : buttonStyles.backgroundColor,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                paddingLeft: '3px',
              }}
            >
              Classification Model 1
            </Box>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClick(4);
              setPredefinedModel('Classification1raw');
            }}
            sx={{
              ...buttonStyles,
              backgroundColor:
                clickedButton === 4
                  ? 'rgb(110,110,110)'
                  : buttonStyles.backgroundColor,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                paddingLeft: '3px',
              }}
            >
              Classification Model 1 (raw)
            </Box>
          </Button>
        </Stack>
      </Grid>
      <Grid item sx={{ height: { xs: '1%', sm: '1%', md: '1%' } }}>
        <Button
          onClick={() =>
            window.open(
              'https://github.com/Inspired715/React-flow-render'
            )
          }
          variant="contained"
          sx={{
            position: 'relative',
            width: '270px',
            height: '48px',
            color: 'rgb(255,255,255)',
            backgroundColor: 'rgb(70,50,60)',
            borderRadius: '10px',
            fontSize: '15px',
            margin: '12px',
            '&:hover': {
              backgroundColor: 'rgb(80,55,65)',
            },
          }}
          startIcon={<GitHubIcon />}
        >
          GitHub Repository
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectModel;
