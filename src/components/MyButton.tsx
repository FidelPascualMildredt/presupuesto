import React from 'react'
import { Touchable,Text, TouchableOpacity } from 'react-native';

import { StyleSheet } from 'react-native';


export const MyButton = () => {
  interface Props{
    title: string,
    onPress: (value?: number) => void
  }
  const MyButton = ( { title, onPress}:Props ) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => onPress() }>
        <Text style={styles.label}>{title} </Text>
      </TouchableOpacity>
    )
  
  }
  const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8, 
        paddingVertical:6,
        borderRadius: 4,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: 'center',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,

    }
})

//crea un

  return (
    <div>MyButton</div>
  )
}
