// React
import React from "react";
// MUI
import { Box, Grid, Stack } from "@mui/material";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function CommentItemContent({item}) {
  return (
    <Stack
      sx={theme =>({
        height: "auto",
        minWidth: "100%",
        width : "100%",
        background: 'rgba(255, 255, 255, 0.11)',
        borderRadius : "23px",
        mt : "7x",
        pl : "47px",
        pr : "50px",
        [theme.breakpoints.down("lg")] : {
            mt : "16px"
        },
        [theme.breakpoints.between("md" , "lg")] : {
            pl : "28px",
            pr : "31px"
        },
        [theme.breakpoints.down("md")] : {
            pl : "13px",
            pr : "12px"
        }
      })}
    >
      <Box sx={theme =>({
          fontFamily : "Arsenal",
          fontWeight : "400",
          fontSize : "18px",
          letterSpacing : "0.07em",
          color : "white",
          mb : "76px",
          pt : "34px",
          pl : "47px",
          pr : "50px",
          [theme.breakpoints.between("md" , "lg")] : {
              fontSize : "14px",
              mb : "40px",
              pt : "19px",
              pl : "28px",
              pr : "31px"
          },
          [theme.breakpoints.down("md")] : {
              fontSize : "9px",
              mb : "3px",
              pt : "7px",
              pl : "13px",
              pr : "12px"
          }
      })}>
          {item ? item.text : "abc"}
      </Box>
      <Grid container sx = {theme =>({
          mb : "23px",
          justifyContent : "space-between",
          alignItems : "center",
          [theme.breakpoints.between("md" , "lg")] : {
            mb : "19px"
          },
          [theme.breakpoints.down("md")] : {
            mb : "6px"
          }
      })}>
          <Grid item sx = {theme =>({
              fontFamily : "Arimo",
              fontWeight : "400",
              fontSize : "20px",
              color : 'rgba(177, 11, 73, 0.5)',
              [theme.breakpoints.between("md" , "lg")] : {
                  fontSize : "14px"
              },
              [theme.breakpoints.down("md")] : {
                  fontSize : '8px'
              }
          })}>
            {item ? item.date : "12.02.2022"}
          </Grid>
          <Grid item sx = {{
              display : "flex"
          }}>
              <Box sx = {theme =>({
                  borderRight : "2px solid #8D0B40",
                  pr : "12px",
                  mr : "14px",
                  [theme.breakpoints.between("md" , "lg")] : {
                    pr : "8px",
                    mr : "8px",               
                  },
                  [theme.breakpoints.down("md")] : {
                    pr : "5px",
                    mr : "5px",               
                  }
              })}>
                <ThumbUpOffAltIcon sx = {theme =>({
                    width : "27px",
                    height : "27px",
                    color : "white",
                    cursor : "pointer",
                    [theme.breakpoints.between("md" , "lg")] : {
                        width : "15px",
                        height : "15px"
                    },
                    [theme.breakpoints.down("md")] : {
                        width : "10px",
                        height : "10px"
                    }
                })}/>
              </Box>
              <Box>
                <ThumbDownOffAltIcon sx = {theme =>({
                    width : "27px",
                    height : "27px",
                    color : "white",
                    cursor : "pointer",
                    [theme.breakpoints.between("md" , "lg")] : {
                        width : "15px",
                        height : "15px"
                    },
                    [theme.breakpoints.down("md")] : {
                        width : "10px",
                        height : "10px"
                    }
                })}/>
              </Box>
          </Grid>
      </Grid>
    </Stack>
  );
}