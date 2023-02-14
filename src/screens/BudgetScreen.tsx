import React, { useState } from 'react'
import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'

const BudgetScreen = () => {

    const initialBudget:number = 1000;
//     Declaren una constante de estado llamada “budget”, importe referencias e inicialícela con
// el valor de la constante “initialBudget”.
    const [budget, setBudget] = useState(initialBudget);


  return (
    <View style={{ flex: 1, marginTop: 20, alignContent: 'center' }}>
        <View style={{ flex: 2 }}>
            <Text style={styles.mainText} > Presupuesto: { initialBudget} </Text>
            <Text style={[styles.secondaryText]} > Mi presupuesto actual { budget} </Text>
        </View>
    </View  >
  )
}

const styles = StyleSheet.create({
    mainText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40
    },
    secondaryText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default BudgetScreen