// import React, { useState } from 'react'
// import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'

// const BudgetScreen = () => {

//     const initialBudget:number = 1000;
// //     Declaren una constante de estado llamada “budget”, importe referencias e inicialícela con
// // el valor de la constante “initialBudget”.
//     const [budget, setBudget] = useState(initialBudget);


//   return (
//     <View style={{ flex: 1, marginTop: 20, alignContent: 'center' }}>
//         <View style={{ flex: 2 }}>
//             <Text style={styles.mainText} > Presupuesto: { initialBudget} </Text>
//             <Text style={[styles.secondaryText]} > Mi presupuesto actual { budget} </Text>
//         </View>
//     </View  >
//   )
// }

// const styles = StyleSheet.create({
//     mainText: {
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontSize: 40
//     },
//     secondaryText: {
//         textAlign: 'center',
//         fontSize: 20
//     }
// });

// export default BudgetScreen
//Importar las referencias a usar
import React, { useState } from 'react'
import { Text, View } from 'react-native'

//Archivos importados
import MyButton from '../components/MyButton';
import CustomHook from '../hooks/CustomHook';
//importacion de estilos globales
import globalStyles from '../styles/global';

const BudgetScreen = () => {
    //Declaren una variable “initialBudget” de tipo numérico con un valor inicial de “1000”.
            //const initialBudget:number = 1000;
    /* Declaren una constante de estado llamada “budget”, importe referencias e inicialícela con
    el valor de la constante “initialBudget”. */
            //const [budget, setBudget] = useState(initialBudget);

    //Cree las funciones como a continuacion se describe
    /* const increase = (value: number=1) => {
        setBudget(budget + value);
    } */
    /* const decrease = (value: number=1) => {
        setBudget(budget - value);
    } */

    const {increase, decrease, initialBudget, budget,} = CustomHook();



    return (
    //Declaramos el encabezado de la aplicacion
        <View style = {budget < initialBudget ? globalStyles.redBackground : globalStyles.whiteBackground}>
            <View style={globalStyles.container}>
                <View style={{ flex: 2 }}>
                    <Text style={globalStyles.mainText} > Presupuesto: { initialBudget} </Text>
                    <Text style={[globalStyles.secondaryText]} > Mi presupuesto actual { budget} </Text>
                </View>
                <View style= {globalStyles.SumRes}>
                    <MyButton title='Sumar' onPress={() => increase(100)}/>
                    <MyButton title='Restar' onPress={() => decrease(50)}/>
                </View>
            </View>
        </View>
    )
}
export default BudgetScreen