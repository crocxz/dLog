import  React, { Component }  from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class Inventory extends React.Component {

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
  };

  render() {
    return (
    <div className="inventory">
        <RaisedButton label="Sort" onClick={e => this.onSubmit(e)} primary />
        <RaisedButton label="Filter" onClick={e => this.onSubmit(e)} primary />
        <IconButton tooltip="Search">
            <FontIcon className="muidocs-icon-action-home" />
         </IconButton>
    </div>
    )}
}



//Create request button

//sort, filter, search buttons
//Table should have ability to select tuples

// table should have columns for:  Product Name, Product ID, Qty, Your cost, details, Stock information(warehouse location(s),)