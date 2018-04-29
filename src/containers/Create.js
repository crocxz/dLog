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

export default class Create extends React.Component {
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
 
    
        <p id="editclick">Click to Edit Price and Quantity</p>

         <Table onRowSelection={this.handleRowSelection}
         multiSelectable={true}
          style={{textAlign: 'center'}}
         >
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
        <TableBody style={{textAlign:"right"}}>
          <TableRow selected={this.isSelected(0)}>
          <TableRowColumn>2x2 Wood boards</TableRowColumn>
            <TableRowColumn>0D4DQ7D12</TableRowColumn>
            <TableRowColumn>50 Boards</TableRowColumn>
            <TableRowColumn>$20</TableRowColumn>
            <TableRowColumn>Maple Wood, mfc'd in Canada.</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </TableRow>
       
          <TableRow selected={this.isSelected(1)}>
            <TableRowColumn>6ft by 10ft fence (Blue Color)</TableRowColumn>
            <TableRowColumn>734982</TableRowColumn>
            <TableRowColumn>300 Fences</TableRowColumn>
            <TableRowColumn>$15 per day</TableRowColumn>
            <TableRowColumn>Steel Construction</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </TableRow>



          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>Scissor Lift</TableRowColumn>
            <TableRowColumn>784927</TableRowColumn>
            <TableRowColumn>5 Lifts</TableRowColumn>
            <TableRowColumn>$2000 per day</TableRowColumn>
            <TableRowColumn>Maximum Height of 60ft</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </TableRow>

            <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>Waste Disposal Service</TableRowColumn>
            <TableRowColumn>734554</TableRowColumn>
            <TableRowColumn>8 Bins</TableRowColumn>
            <TableRowColumn>$300 Per Bin, $150 Per Disposal</TableRowColumn>
            <TableRowColumn>Volume of 8 Cubic Meters</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-home" />
            </IconButton>
          </TableRow>

          

        </TableBody>
      </Table>
    </div>
    );}
}



//Create request button

//sort, filter, search buttons
//Table should have ability to select tuples

// table should have columns for:  Product Name, Product ID, Qty, Your cost, details, Stock information(warehouse location(s),)