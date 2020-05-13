import React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Axios from 'axios';
const Registrations = () => {
  const [data, setData] = React.useState([]);
  const _getData = () => {
    Axios({
      url: '/getRegistrations',
      method: 'GET',
    })
      .then((resp) => {
        setData(resp.data);
      })
      .catch(console.error);
  };
  React.useEffect(_getData, []);
  return (
    <React.Fragment>
      <Container style={{ marginTop: 100, height: '100%', marginBottom: 10 }}>
        <h1>Registartions</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ fontWeight: 'bold' }}
                  component='th'
                  scope='row'
                >
                  Name
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='right'>
                  Email
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='right'>
                  Number
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='right'>
                  Selected Course
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='right'>
                  Details
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='right'>
                  Payment Option
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.doc !== undefined
                ? data.doc.map((row) => (
                    <TableRow key={row.data.name}>
                      <TableCell component='th' scope='row'>
                        {row.data.Fname + row.data.Lname}
                      </TableCell>
                      <TableCell align='right'>{row.data.email}</TableCell>
                      <TableCell align='right'>{row.data.number}</TableCell>
                      <TableCell align='right'>{row.data.Scourse}</TableCell>
                      <TableCell align='right'>{row.data.detail}</TableCell>
                      <TableCell align='right'>{row.data.payment}</TableCell>
                    </TableRow>
                  ))
                : ''}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
};
export default Registrations;
