import React, { Component }  from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import TextField from 'material-ui/TextField';
import RequestItem from '../components/RequestItem';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

export default class Inventory extends React.Component {
    state = {
        selected: [1],
        field: ''
    };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
    <div className="pending">
       <Table onRowSelection={this.handleRowSelection}
         Selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Info</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>

          <TableRow>
            <TableRowColumn>
                <RequestItem />
            </TableRowColumn>
            <TableRowColumn>
            </TableRowColumn>
          </TableRow>

          <TableRow>
          <TableRowColumn>
                <RequestItem />
            </TableRowColumn>
            <TableRowColumn>
            </TableRowColumn>
          </TableRow>

          <TableRow>
          <TableRowColumn>
                <RequestItem />
            </TableRowColumn>
            <TableRowColumn>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    )}
}

// completed requests

//List of entries
//Entry: Date, Entry ID, Contact, Total Cost, 