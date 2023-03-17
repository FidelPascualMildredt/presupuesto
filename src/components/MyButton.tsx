// import React from 'react'
// import { Touchable,Text, TouchableOpacity } from 'react-native';

// import { StyleSheet } from 'react-native';


// export const MyButton = () => {
//   interface Props{
//     title: string,
//     onPress: (value?: number) => void
//   }
//   const MyButton = ( { title, onPress}:Props ) => {
//     return (
//       <TouchableOpacity style={styles.button} onPress={() => onPress() }>
//         <Text style={styles.label}>{title} </Text>
//       </TouchableOpacity>
//     )
  
//   }
//   const styles = StyleSheet.create({
//     button: {
//         paddingHorizontal: 8, 
//         paddingVertical:6,
//         borderRadius: 4,
//         backgroundColor: 'blue',
//         alignSelf: 'flex-start',
//         marginHorizontal: '1%',
//         marginBottom: 6,
//         minWidth: 'center',
//     },
//     label: {
//         textAlign: 'center',
//         marginBottom: 10,
//         fontSize: 24,

//     }
// })

// //crea un

//   return (
//     <div>MyButton</div>
//   )
// }
import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
/* Declaren una interfaz llamada “Props” que reciba dos argumentos.
    a. El primer argumento será la descripción del bóton.
    b. Una función que permita incrementar o decrementar el presupuesto. */
    interface Props{
      title: string,
      onPress: (value?: number) => void
    }
//Importamos estilos globales button y label
import globalStyles from '../styles/global'

const MyButton = ({title, onPress}: Props) => {
  return (
  //Cree el boton que utilice la funcion y muestre el titulo enviado
    <TouchableOpacity style = { globalStyles.button } onPress={() => onPress()}>
      <Text style = { globalStyles.label }> {title} </Text>
    </TouchableOpacity>
  )

  //Cree las funciones como a continuacion se describe
  /* const increase = (value: number=1) => {
    setBudget(budget + value);
  }
  const decrease = (value: number=1) => {
    setBudget(budget - value);
  } */
}

export default MyButton