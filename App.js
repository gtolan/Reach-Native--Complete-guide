import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false);

  // const currentGoals = () =>{
  //   return courseGoals;
  // }
  const addGoalHandler = goalTitle => {
    console.log(goalTitle, "EG")
    // setEnteredGoal([])
    setCourseGoals(
      currentGoals => [...currentGoals,
      {id: Math.random().toString(), value: goalTitle}
    ]);
    // setEnteredGoal('');
    closeModalHandler()
  }
  const deleteGoalHanlder = goalId => {
    console.log('goalId',goalId);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  const openModalHandler = () => {
    setIsAddMode(true);
  }

  const closeModalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} closeModal={closeModalHandler} />
 
      <Button title="Add new goal" onPress={openModalHandler} />
      
      <FlatList data={courseGoals} 
        keyExtractor={(item,index)=> item.id}
        renderItem={
        itemData => (
          <GoalItem id={itemData.item.id}  onDelete={deleteGoalHanlder} title={itemData.item.value}/>
          // <View style={styles.listItem}>
          //   <Text >{e}</Text>
          // </View>
        )
      }>
      {/* <ScrollView> Not performant */}
         {/* {courseGoals.map((goal, index) => <View key={index} style={styles.listItem}><Text >{goal}</Text></View>)} */}
      {/* </ScrollView> */}
      </FlatList>
    </View> 
  );
}

const styles = StyleSheet.create({
  screen:{padding:30}

});
