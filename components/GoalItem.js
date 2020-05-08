import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = props =>{
    return (
        <TouchableOpacity key={props.id} onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listItem}>
                <Text >{props.title}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'grey',
        borderColor:'darkgray',
        borderWidth:1,
        marginVertical:3
      }
})
export default GoalItem;