// React
import React, { memo } from "react";

// images
import background from "../../../images/Main/Forecasts/forecastsBackground.svg";
import barcelona from "../../../images/Main/Forecasts/barcelona.svg";
import PSG from "../../../images/Main/Forecasts/PSG.svg";

// components
import ContentTitle from "../../../helpers/ContentTitle";
import Slider from "react-slick";
import NextArrow from "./components/NextArrow";
import PrevArrow from "./components/PrevArrow";
import ForecastItems from "./components/ForecastItems"
import { Box } from "@mui/material";

const data = [
  {
    homeIcon: barcelona,
    guestIcon: PSG,
    startingTime: "09:16:14",
    homeCommand: "Барселона",
    guestCommand: "ПСЖ",
  },
  {
    homeIcon: PSG,
    guestIcon: barcelona,
    startingTime: "23:16:14",
    homeCommand: "ПСЖ",
    guestCommand: "Барселона",
  },
];

const Forecasts = memo(() => {
  const settings = {
    infinite: false,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box id="forecastsHash">
      <ContentTitle title="Прогнозы" />
      <Box
        sx={theme => ({
          overflow: "hidden",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "71vh",
          '& .slick-slider': {
            height: "100%",
            '& .slick-list': {
              height: "100%",
              '& .slick-track': {
                height: "100%",
                '& .slick-slide': {
                  height: "100%",
                  '& div': {
                    height: "100%"
                  }
                }
              }
            }
          },
          '&:before': {
            backgroundColor: "rgba(0,0,0,0.6)",
            content: '""',
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          },
          [theme.breakpoints.between("sm", "lg")]: {
            height: "378px"
          },
          [theme.breakpoints.down("sm")]: {
            height: "227px"
          }
        })}
      >
        <Slider {...settings}>
          {data.map((el, i) => {
            return (
              <ForecastItems el={el} key={el.guestCommand + el.homeCommand + i} />
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
})

export default Forecasts
