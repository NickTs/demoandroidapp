import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

class  ModalComponent extends Component {
   state={
     modal:false
   }

   handleModal = () => {
     this.setState({
       modal: !this.state.modal ? true : false
     })
   }

   render() {
     return(
       <View style={{width:'100%'}}>
         <Button
           title="Open Modal"
           onPress={this.handleModal}
         >

         </Button>

         <Modal
           visible={this.state.modal}
           animationType={'slide'}
           onShow={()=>{
             alert('modal is visible')
           }}
         >
           <View style={{
             marginTop: 20,
             backgroundColor:'red'
           }}>
             <Text>Nick modal component</Text>

           </View>
           <Button
             title="Close modal"
             onPress={this.handleModal}
           />
         </Modal>

       </View>
     )
   }
}

export default ModalComponent
