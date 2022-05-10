// React
import React from "react";
// Components
import { TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Grid } from "@mui/material";
import { gamesBetData } from "../../data/data";
import Button from "./Button";

export default function GamesTable() {
  return (
    <Grid container justifyContent="center">
        <Table
          sx={{
            maxWidth: "80%"
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan="4">
                Цена
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gamesBetData.map((el, i) => {
              return (
                <TableRow key={"gamesBetElem" + i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>{el.price}</TableCell>
                  <TableCell>
                    <Button />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    </Grid>
  );
}
