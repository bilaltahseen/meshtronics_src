import React, { Component } from 'react';

import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button,
  Container,
} from '@material-ui/core';

import Axios from 'axios';

import { withRouter } from 'react-router-dom';
class PreviousDocuments extends Component {
  state = {
    data: { doc: [] },
  };
  componentDidMount() {
    this._getData();
    console.log(this.props);
  }
  _getData() {
    Axios({
      url: '/getDocuments',
      method: 'GET',
    })
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(console.error);
  }
  _navigateEdit(data) {
    this.props.history.push('/editDocument', data);
  }
  _deleteDocument(courseID) {
    Axios({
      url: 'deleteDocument',
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      params: { id: courseID },
    })
      .then((resp) => {
        let oldData = [...this.state.data.doc];
        let newData = oldData.filter(
          (e) => e.courseContent.courseTitle !== courseID
        );
        this.setState({ data: { doc: newData } });
      })
      .catch(console.error);
  }
  render() {
    const tr =
      this.state.data.doc !== undefined
        ? this.state.data.doc.map((elem) => {
            return (
              <TableRow key={elem.courseContent.courseTitle}>
                <TableCell align='center' style={{ backgroundColor: '#fff' }}>
                  {elem.courseContent.courseTitle}
                </TableCell>
                <TableCell align='center' style={{ backgroundColor: '#fff' }}>
                  <Button
                    onClick={this._navigateEdit.bind(this, elem)}
                    color='secondary'
                    variant='contained'
                  >
                    EDIT
                  </Button>
                </TableCell>
                <TableCell align='center' style={{ backgroundColor: '#fff' }}>
                  <Button
                    onClick={this._deleteDocument.bind(
                      this,
                      elem.courseContent.courseTitle
                    )}
                    color='secondary'
                    variant='contained'
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            );
          })
        : '';
    return (
      <React.Fragment>
        <Container maxWidth='lg'>
          <h2>Select to edit or delete</h2>
          <TableContainer style={{ padding: 10 }}>
            <TableHead></TableHead>
            <Table>
              <TableBody>{tr}</TableBody>
            </Table>
          </TableContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(PreviousDocuments);
