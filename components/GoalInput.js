import React, {useState} from 'react';

import {StyleSheet,TextInput,View, Button, Modal} from 'react-native';

const GoalInput = props => {
 
 const [enteredGoal, setEnteredGoal] = useState('');
 const setInputHandler = enteredText => {
    setEnteredGoal(enteredText);
 }
 const addInputHandler = () => {
     console.log('add input', enteredGoal)
    props.onAddGoal(enteredGoal);
    props.closeModal();
    setInputHandler('');
 }
 const cancelInputHandler = ()=>{
    
    setInputHandler('');
    props.closeModal();
 }

 return (
    <Modal style={styles.modal} visible={props.visible} animationType="slide">
        <Button title="closeModal" onPress={props.closeModal} />
        <View style={styles.inputContainer}>
            {/* <View style={styles.containerChild}> */}
                <TextInput style={styles.textInput} placeholder="Add Item.." onChangeText={setInputHandler} value={enteredGoal} />
            {/* </View> */}
            <View style={styles.containerChildBtn}>
                <View style={styles.btn}>
                <Button style={styles.addBtn} color="red" title="Cancel" onPress={cancelInputHandler} />
                </View>
                <View style={styles.btn}>
                <Button style={styles.addBtn} title="Add" onPress={addInputHandler} />
                </View>
            </View>
        </View>
    </Modal>
 )
}

const styles = StyleSheet.create({
    modal:{
        width:'80%'
    },  
    inputContainer:{
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        flex:1,
        marginLeft:'10%'
      },
      containerChild:{
        flex:1,
        width:'100%'
      },
      containerChildBtn:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
      },
      addBtn:{
     
            flex:1,
      },
      btn:{
        flex:1,
        width:'100%',
        borderColor:'black', borderWidth:1
      },
      textInput:{width:'100%',borderColor:'black', borderWidth:1, marginVertical:5, padding:5}
    
})

export default GoalInput;