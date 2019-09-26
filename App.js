import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Image } from 'react-native';

import Nav from './src/Nav/nav'
import Generate from './src/Generator/generate'
import ListItem from './src/Generator/listitem'
import Input from './src/Input/input'
import PickerComponent from './src/Picker/picker'
import card from './assets/card-3.jpg'
import ModalComponent from './src/Modal/modal'


class App extends Component {

  state = {
    nameOfApp:"PacketMeccanica mobile app",
    random:[20,15],
    loading:false
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random()*100) +1
    this.setState(prevState =>{
      return{
        random:[...prevState.random, random]
      }
    })
  }

  onItemDelete = (i) =>{
    const newArray = this.state.random.filter((item,index) => {
      return i !== index;
    })
    this.setState({
      random: newArray
    })
    // alert(i)
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp}></Nav>

        <Image
          // source={{uri:'https://picsum.photos/id/1043/400/400'}}
          source={card}
          style={styles.card}
          resizeMode="contain"
          // onLoadEnd={()=>alert('image loaded')}
        />


        <ScrollView
          style={{width:'100%'}}
          // onContentSizeChange={(w,h) => alert(h)}
          // onMomentumScrollBegin={()=>alert('begin')}
          // onMomentumScrollEnd={()=>alert('end')}
          // onScroll={()=>alert('scrolling')}
        >
          <View style={styles.wripper}>
            <Generate add={this.onAddRandom}></Generate>
            <ListItem items={this.state.random} delete={this.onItemDelete}></ListItem>

            <Input></Input>
{/*

            <PickerComponent/>

*/}

{/*
            <ActivityIndicator
              size="large"
              color="red"
              animation={this.state.loading}
            >

            </ActivityIndicator>
*/}



{/*
            <ModalComponent/>
*/}
          </View>

        </ScrollView>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  wripper: {
    flex:1,
    width:'100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  card: {
    width:'100%',
    height:200,
    marginTop: 10
  }
});

export default App
