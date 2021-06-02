import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
      },
      paper: {
        width: '100%',
      },
      table: {
        minWidth: 750,
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
});

function createData(firstname: string, lastname: string, email: string, comment: string, nickname: string) {
  return { firstname, lastname, email, comment, nickname };
}

const rows = [
  createData('Kamelia', 'Pavlova', 'kamelip@abv.bg', 'comment', 'nickname'),
  createData('Evgeni', 'Ivanov', 'eivanov@abv.bg', 'comment1', 'nickname1'),
  createData('Georgi', 'Georgiev', 'ggeorgiev@gmail.com', 'comment2', 'nickname2'),
  createData('Teodor', 'Todorov', 'ttodorov@gmail.com', 'comment3', 'nickname3'),
  createData('Maria', 'Georgieva', 'mgeorgieva.abv.bg', 'comment4', 'nickname4'),
];

export default function TableView() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Nickname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.firstname}>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
