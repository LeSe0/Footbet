// React
import React, { useState } from "react";
import { format } from "date-fns";

// components
import { Box, Stack, Typography } from "@mui/material";
import ContentTitle from "../../../helpers/ContentTitle";
import Buttons from "./components/Buttons";
import Gamesheader from "./components/Gamesheader";
import GamesItems from "./components/GamesContentComponents/GamesItems";

export default function Games() {
  const [selectedDay, selectDay] = useState(format(new Date(), "dd MM yyyy"));
  const [calendarActive, selectCalendarActive] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const activePage = [
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        mt: "30px",
      }}
      id="gamesHash"
    >
      <Stack
        sx={{
          width: "88vw",
          backgroundColor: "#0C0B22",
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Gamesheader
          selectedDay={selectedDay}
          selectDay={selectDay}
          calendarActive={calendarActive}
          selectCalendarActive={selectCalendarActive}
        />
        <GamesItems />
      </Stack>
    </Box>,
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        mt: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          textAlign: "left",
          width: "88vw",
          color: "white",
          background: "#FFFFFF0A",
          pt: "30px",
          pb: "30px",
          pl: "40px",
          pr: "40px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arsenal",
            fontWeight: "700",
          }}
        >
          Футбол: команда и запасные игроки.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Arsenal",
            fontWeight: "400",
          }}
        >
          В состав команды входят 11 человек: 1 вратарь и 10 полевых игроков,
          которые в свою очередь подразделяются на защитников, полузащитников и
          нападающих. В играх на очки и в кубковых играх на протяжении одного
          матча может быть произведена замена 2 игроков из каждой команды.
          Продолжительность матча мужских и молодежных команд (с 16 до 18 лет)
          составляет 90 мин. Матч состоит из двух таймов по 45 мин. После
          перерыва, минимальная продолжительность которого 5 мин, команды
          меняются воротами.Полевые игроки могут касаться мяча любой частью
          тела, кроме рук. За игру рукой команде назначается штрафной удар или
          11-метровый удар, который выполняет игрок команды соперника.Если мяч
          пересекает лицевую линию или боковую линию, то он считается вышедшим
          из игры. Если мяч пересек боковую линию, то он считается вышедшим из
          игры. Если мяч пересек боковую линию после удара игроком одной
          команды, то производится вбрасывание мяча игроком команды соперника с
          места пересечения боковой линии. Вбрасывающий стоит лицом к полю,
          ногами на боковой линии или за ее пределами и вбрасывает мяч обеими
          руками из-за головы. Если от удара соперника мяч пересекает лицевую
          линию, то судья назначает удар от ворот, при котором удар по мячу
          производится из вратарской площадки. Если мяч после удара игроком
          пересекает лицевую линию его команды, то судья назначает угловой удар.
          Гол считается забитым, если мяч пересек линию ворот между боковыми
          стойками и под перекладиной ворот. Согласно правилам, существует два
          вида ударов: штрафной удар и свободный удар. Штрафной удар назначается
          за нечестную игру или за игру рукой. Свободный удар назначается за
          непреднамеренное нарушение правил или за неправильные игровые
          действия. При выполнении свободного удара гол будет засчитан в том
          случае, если мяча коснулся еще один игрок, кроме подающего.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Arsenal",
            fontWeight: "700",
          }}
        >
          Футбол: «Положение вне игры».
        </Typography>
        <Typography
          sx={{
            fontFamily: "Arsenal",
            fontWeight: "400",
          }}
        >
          Правило «вне игры» запрещает игрокам атакующей команды находиться к
          линии ворот соперника ближе, чем защитники соперника. Если в момент
          передачи мяча между игроком и линией ворот соперника находится менее
          двух игроков команды соперника, включая вратаря, то такой игрок будет
          в положении «вне игры». При положении «вне игры» назначается свободный
          удар. Положение «вне игры» не фиксируется при аналогичной ситуации на
          своей половине поля, при выполнении ударов от ворот, угловых ударов,
          при вбрасывании из-за боковой линии и при спорном вбрасывании.
        </Typography>
      </Box>
    </Box>,
  ];

  return (
    <Box>
      <ContentTitle title="Матчи" />
      <Buttons activeId={activeId} setActiveId={setActiveId} />
      {activePage[activeId]}
    </Box>
  );
}
