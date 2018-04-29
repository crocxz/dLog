import React from 'react';
import RaisedButton from "material-ui/RaisedButton";

export default class RequestItem extends React.Component {
//RI should have Date, Entry ID, Contact, Total Cost, Public
state = {
    username: "",
    password: "",
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //avator

      
  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
    //\\console.log()
    });
    this.props.onChange({
      //
    });
  };

  render() {
    return (
    <div className="login">
        <Avatar src="images/uxceo-128.jpg"/>
      <form>
        <br />
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    </div>
    );
  }
}

// logo

// login field

// pw field
