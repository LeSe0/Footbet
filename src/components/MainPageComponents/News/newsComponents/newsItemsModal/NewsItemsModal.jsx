// React
import React, { memo } from "react";

// images
import img from "../../../../../images/Main/News/newsModal/soccerPlayer2.svg";

// components
import { Box, Modal, Stack } from "@mui/material";

const NewsItemsModal = memo(({ isActive, closeModal }) => {
  return (
    <Modal
      open={isActive != null}
      onBackdropClick={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "999999",
      }}
    >
      <Box
        sx={{
          width: "51.25vw",
          mb: "250px",
          mt: "100px",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={(theme) => ({
              width: "81.7%",
              "& img": {
                width: "100%",
                height: "100%",
                maxHeight: "602px",
                borderRadius: "0",
                [theme.breakpoints.down("lg")]: {
                  maxHeight: "400px",
                },
                [theme.breakpoints.down("600")]: {
                  maxHeight: "250px",
                },
              },
            })}
          >
            <img src={img} />
          </Box>
          <Box
            sx={(theme) => ({
              backgroundColor: "#00000099",
              position: "absolute",
              bottom: "-38px",
              width: "100%",
              maxHeight: "58vh",
              overflow: "auto",
              [theme.breakpoints.down("lg")]: {
                p: "20px 40px",
              },
              [theme.breakpoints.down("600")]: {
                padding: "5px 8px",
                maxHeight: "32vh",
                bottom: "-58%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                width: "75%",
                fontWeight: "700",
                color: "white",
                letterSpacing: "0.02em",
                lineHeight: "134%",
                fontSize: "22px",
                textAlign: "center",
                margin: "auto auto 17px",
                [theme.breakpoints.down("lg")]: {
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  lineHeight: "20px",
                  fontSize: "18px",
                },
                [theme.breakpoints.down("1024")]: {
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  lineHeight: "16px",
                  fontSize: "14px",
                },
                [theme.breakpoints.down("600")]: {
                  fontWeight: 700,
                  fontSize: "10px",
                  lineHeight: "12px",
                  textAlign: "center",
                  letterSpacing: ".02em",
                },
              })}
            >
              «Реал» долго мучился с «Аталантой»: 70 минут взламывал соперника в
              большинстве.
            </Box>
            <Box
              sx={(theme) => ({
                color: "white",
                fontSize: "18px",
                lineHeight: "124.8%",
                letterSpacing: ".07em",
                [theme.breakpoints.down("lg")]: {
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: ".07em",
                },
                [theme.breakpoints.down("1024")]: {
                  fontSize: "10px",
                  lineHeight: "12px",
                  letterSpacing: ".07em",
                },
                [theme.breakpoints.down("660")]: {
                  fontSize: '8px',
                  lineHeight: '10px',
                  letterSpacing: '.07em'
                }
              })}
            >
              Из-за гибкости нынешнего «Атлетико» сюрпризы касались
              внутренностей схемы. В таком составе футболисты могли
              расположиться и в 4-4-2, и в 4-3-3 (4-1-4-1), и в 3-5-2, и даже в
              6-3-1. На практике схема «Атлетико» определялась стадией игры (в
              среднем блоке – одна, при прессинге – другая, а в глубокой обороне
              – третья). Ниже разберем эти перестроения. В остальном состав
              угадывался, за исключением одной фланговой позиции. Зидан недавно
              назвал Асенсио железным игроком старта, поэтому речь шла об игроке
              на другой край. Им мог стать и Родриго, и Винисиус (тогда
              поменялся бы фланг Асенсио), и даже Иско (выходил слева против
              «Сосьедада»). Зидан выбрал Родриго.
            </Box>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
})

export default NewsItemsModal