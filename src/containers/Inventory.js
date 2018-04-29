import React, { Component }  from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import TextField from 'material-ui/TextField';

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
    <div className="inventory">
        <RaisedButton label="Sort" onClick={e => this.onSubmit(e)} primary />
        <RaisedButton label="Filter" onClick={e => this.onSubmit(e)} primary />

         <TextField
          name="search"
          hintText="search"
          floatingLabelText="search"
          value={this.state.field}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <IconButton tooltip="Search">
            <FontIcon className="muidocs-icon-action-home" />
         </IconButton>
         <RaisedButton label="Upload" onClick={e => this.onSubmit(e)} primary />


         <Table onRowSelection={this.handleRowSelection}
         multiSelectable={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Product Name</TableHeaderColumn>
            <TableHeaderColumn>Product ID</TableHeaderColumn>
            <TableHeaderColumn>Qty</TableHeaderColumn>
            <TableHeaderColumn>Cost</TableHeaderColumn>
            <TableHeaderColumn>Details</TableHeaderColumn>
            <TableHeaderColumn>Stock Info</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>2x2 Wood boards</TableRowColumn>
            <TableRowColumn>0D4DQ7D12</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>50</TableRowColumn>
            <TableRowColumn>Sandalwood, mfc'd in Cuba ..</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </TableRow>
          <TableRow selected={this.isSelected(1)}>
          <TableRowColumn>2x2 Wood boards</TableRowColumn>
            <TableRowColumn>0D4DQ7D12</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>50</TableRowColumn>
            <TableRowColumn>Sandalwood, mfc'd in Cuba ..</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </TableRow>
          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      <RaisedButton label="Create Request" onClick={e => this.onSubmit(e)} primary />
    </div>
    );}
}



//Create request button

//sort, filter, search buttons
//Table should have ability to select tuples

// table should have columns for:  Product Name, Product ID, Qty, Your cost, details, Stock information(warehouse location(s),)