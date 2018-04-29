import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Login from './Login';
import Inventory from './Inventory';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
};

export default class Main extends React.Component {
   
    
  state = { value : 'a' };


  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Inventory" value="a">
          <div>
            <h2 style={styles.headline}>Inventory</h2>
            <Login />
          </div>
        </Tab>
        <Tab label="Pending" value="b">
          <div>
            <h2 style={styles.headline}>Pending</h2>
          <Inventory />
          </div>
        </Tab>
         <Tab label="Request" value="c">
          <div>
          <h2 style={styles.headline}>Pending</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
        <Tab label="View" value="d">
          <div>
          <h2 style={styles.headline}>Pending</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}