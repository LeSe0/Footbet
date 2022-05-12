// React
import React from 'react'
import Icon from "../images/Header/logo.svg"
// Components
import { Box, Grid, Stack, Typography } from '@mui/material'
import ContentTitle from '../helpers/ContentTitle'
import Menu from '../components/Menu/Menu'

export default function AboutUs() {
    return (
        <Stack mb="100px" alignItems="center" justifyContent="center">
            <Menu />
            <ContentTitle title="О нас" />
            <Grid container justifyContent="center">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="center" sx={{
                        border: "1px solid #D0C146",
                        borderLeft: "10px solid #D0C146",
                        borderBottom: "10px solid #D0C146",
                        '& img': {
                            px: "20px",
                            py: "30px",
                            width: { xs: "50vw", sm: "15vw" },
                        }
                    }}>
                        <img src={Icon} />
                    </Grid>
                </Grid>
                <Grid item sx={{
                    bgcolor: "rgba(255,255,255,.06)",
                    px: { xs: "18px", sm: "35px", md: "51px" },
                    py: { xs: "14px", sm: "29px", md: "55px" },
                    overflow: 'auto',
                    maxHeight: { xs: "800px", sm: '1203px' },
                    maxWidth: { xs: "100%", sm: "70%", md: "60%" },
                    "& p , span , ol , li": {
                        color: "white",
                        fontSize: { xs: "10px", sm: "12px", md: "16px" },
                        fontFamily: "Arsenal"
                    }
                }}>
                    <Box>
                        <Typography>Норик Хачатрян Лорикович</Typography>
                        <Typography mt="40px">Мы в игровой индустрии уже 15 лет!</Typography>
                        <Typography>
                            За это время работы в этой сфере появились много клиентов, и мы решили сделать покупку прогнозов более удобным.<br />
                            Платные прогнозы на футбол в первую очередь рассчитаны для тех людей, которые хотят получить дополнительный доход от ставок на футбол.<br />
                            Главная цель прибавлять Ваш доход. Для этого нужно прислушиваться к рекомендациям и играть по правилам!!! Это самое важное!!!
                        </Typography>
                        <Typography>
                            Мы рады работать, улучшать и создавать для вас лучшую игровую платформу. <br />
                            Мы полностью открыты, чтобы выслушать и принять любое мнение, предложение и здоровую критику, которые приведут нас к лучшим результатам. <br />
                            Добро пожаловать на footbet24.com
                        </Typography>
                    </Box>
                    <Box mt="18px" mb="36px" sx={{
                        "& span": {
                            ml: "15px"
                        }
                    }}>
                        <Typography mb="30px">
                            Как можно связаться с нами: <br />
                            Номер телефона /whatsapp, viber/: +34 672 314 808
                        </Typography>
                        <Typography>
                            электронная почта: <Typography component="span">n.xach1987@mail.ru</Typography><br />
                            ИНН: <Typography component="span">784809506408</Typography>
                        </Typography>
                    </Box>
                    <Box sx={{
                        '& li': {
                            mt: "7px"
                        }
                    }}>
                        <Typography mb="5px">
                            Как происходит оплата и покупка и что нужно для этого сделать.<br />
                            Для того чтобы купить игру или прогноз нужно:
                        </Typography>
                        <ol>
                            <li>Зарегистрироваться на сайте</li>
                            <li>Нажимать на кнопку “купить”</li>
                            <li>Откроется окно для оплаты, набирать данные карты и оплатить </li>
                            <li>После оплаты У Вас откроется прогноз, который Вы оплатили. </li>
                        </ol>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    )
}
