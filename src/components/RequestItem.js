import React from 'react';
import RaisedButton from "material-ui/RaisedButton";

export default class RequestItem extends React.Component {
//RI should have Date, Entry ID, Contact, Total Cost, Public
state = {
    date: 'Sunday, April 29, 2018',
    rid: '859D23A',
    contact: "",
    cost: "$ "+ 342.23
  };


  render() {
    return (
    <div className="RequestItem">
      <p>Date: {this.state.date}<br />
      Request ID: {this.state.rid}<br />
      Contact: {this.state.contact}<br />
      Cost: {this.state.cost}<br />
      Public Key: View<br />
      Invoice</p>
    </div>
    );
  }
}
