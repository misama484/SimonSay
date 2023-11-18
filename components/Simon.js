import { useState, useEffect, useRef } from 'react'
import { Text, View, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'


const colors = ["red", "green", "blue", "yellow"]

const Simon = () => {
  //Estados
  const [sequence, setSequence] = useState([])
  const [playing, setPlaying] = useState(false)

  //Refs
  const redRef = useRef(null)
  const greenRef = useRef(null)
  const blueRef = useRef(null)
  const yellowRef = useRef(null)


  //Funciones
  //anyade nuevo color al array por cada secuencia correcta
  const addToSequence = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    //asignamos a setSequence una copia de sequence anyadiendo el randomColor
    setSequence([...sequence, randomColor])
  }

  const handleNextSequence = () => {
    if(!playing){
      addToSequence()
    }
  }

  //UseEffect
  useEffect(()=>{
    const showSequence = (idx = 0) => {
      let ref = null;
      if(sequence[idx] === 'red') ref = redRef;
      if(sequence[idx] === 'green') ref = greenRef;
      if(sequence[idx] === 'blue') ref = blueRef;
      if(sequence[idx] === 'yellow') ref = yellowRef;

      //iluminar boton
      setTimeout(() => {
        ref.current.setNativeProps({
          opacity: 0
        })
      
      }, 250)

    }
    showSequence()
  }, [sequence])



  return (
    <View>
      <View style={styles.contenedorBotones}>

        <View style={styles.contenedorPareja}>
          <TouchableOpacity 
          title="Rojo" 
          style={styles.botonRed}
          ref={redRef}
          onPress={() => {
                   
          }}
          ></TouchableOpacity>

          <TouchableOpacity 
          title="Azul" 
          style={styles.botonBlue} 
          ref={blueRef}
          ></TouchableOpacity>

        </View>
        <View style={styles.contenedorPareja}>
          <TouchableOpacity 
          title="Verde" 
          style={styles.botonGreen}
          ref={greenRef}
          ></TouchableOpacity>
          <TouchableOpacity 
          title="Amarillo" 
          style={styles.botonYellow}
          ref={yellowRef}
          ></TouchableOpacity>
        </View>

        <TouchableOpacity
          title="Jugar"
          style={styles.playButton}
          ><Text style={styles.playText}>Play</Text></TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorBotones : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height:400,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#8eb0bc',
    borderRadius: 20,
  },
  contenedorPareja:{
    flexDirection: 'column', 
  },
  botonRed:{
    width: 170,
    height:170,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 500,
    backgroundColor: 'red',    
    opacity: 1,
  },
  botonBlue:{
    width: 170,
    height:170,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderBottomLeftRadius: 500,
    backgroundColor: 'blue',    
  },
  botonGreen:{
    width: 170,
    height:170,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderTopRightRadius: 500,
    backgroundColor: 'green',    
  },
  botonYellow:{
    width: 170,
    height:170,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderBottomRightRadius: 500,
    backgroundColor: 'yellow',    
  },
  playButton:{
    position: "absolute",
    width: 100,
    height:100,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#8eb0bc',    
    borderRadius: 500,
    opacity: 1,
  },
  playText:{
    fontSize: 30,
    paddingVertical: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  }

})
export default Simon