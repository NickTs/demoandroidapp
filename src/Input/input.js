import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

class Input extends Component {
  state = {
    myInput:"",
    users:['Leo','Andriy','Som','Igor']
  }

  onChangeInput = (value) => {
    this.setState({
      myInput:value
    })
  }

  onAddUser = () => {
    this.setState(prevState =>{
      return {
        myInput:'',
        users: [...prevState.users,prevState.myInput]
      }
    })

  }

  render() {
    return (
      <ScrollView style={{width:'100%'}}>
      <View style={styles.inputWrapper}>
        <TextInput
          value = {this.state.myInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          editable={true}
          autoCapitalize={'words'}
        />
        <Button
          title='Add User'
          onPress={this.onAddUser}
        />
        {
          this.state.users.map(item => (
            <Text style={styles.users} key={item}>{item}</Text>
            )
          )
        }
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width:'100%'
  },
  input: {
    width:'100%',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    fontSize:20,
    padding: 10
  },
  users: {
    fontSize: 25,
    borderWidth: 1,
    borderColor:'#cecece',
    padding: 5,
    marginBottom: 10
  }
});

export default Input
