import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Login from './Login';
import Inventory from './Inventory';
import Pending from './Pending';
import View from './View';

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
            <Inventory />
          </div>
        </Tab>
        <Tab label="Pending" value="b">
          <div>
            <h2 style={styles.headline}>Pending</h2>
            <Pending />
          </div>
        </Tab>
        <Tab label="View" value="c">
          <div>
          <h2 style={styles.headline}>Completed</h2>
           <View />
          </div>
        </Tab>
      </Tabs>
    );
  }
}