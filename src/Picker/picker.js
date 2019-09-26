import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

class PickerComponent extends Component {

  render() {
    return(
      <Picker
        style={{width:'50%'}}//{{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
     )
  }
}

export default PickerComponent
