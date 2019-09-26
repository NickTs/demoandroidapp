import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const generate = (props) => (
  <TouchableWithoutFeedback

    onPress={()=>{
      props.add()
    }}

    // onPress={()=>alert('Touched')}
    onLongPress={()=>alert('Touched')}
    delayLongPress={5000}
    // onPressIn={()=>alert('Touched')}
    // onPressOut={()=>alert('Touched')}
  >
    <View style={styles.generate}>
      <Text>Add number</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  generate: {
    backgroundColor: '#00bcde',
    alignItems:'center',
    padding: 10,
    width:'100%',
    margin: 20
  }
});

export default generate
