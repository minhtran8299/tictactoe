

import React, {useState, useRef, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMorelinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Greeting from './components/Greeting';
import playingScreen from './components/playerScreen';



const App: () => React$Node = () => {

  const [squareOneValue, setSquareOneValue] =useState("");
  const [squareTwoValue, setSquareTwoValue] =useState("");
  const [squareThreeValue, setSquareThreeValue] =useState("");
  const [squareFourValue, setSquareFourValue] =useState("");
  const [squareFiveValue, setSquareFiveValue] =useState("");
  const [squareSixValue, setSquareSixValue] =useState("");
  const [squareSevenValue, setSquareSevenValue] =useState("");
  const [squareEightValue, setSquareEightValue] =useState("");
  const [squareNineValue, setSquareNineValue] =useState("");
  const [player, setPlayer] = useState(false);
  const [status, setStatus] = useState("X's turn");
  const [round, setRound] = useState(1);
  const[xwins, setXwins] = useState(0);
  const [owins, setOwins] = useState(0);


//Update Round
const updateRound = () => {
    setRound(round+1)
    if(round>8){
      setRound(1)
    }
}

//Restart Game
const restartGame = () => {
  setSquareOneValue('');
  setSquareTwoValue('');
  setSquareThreeValue('');
  setSquareFourValue('');
  setSquareFiveValue('');
  setSquareSixValue('');
  setSquareSevenValue('');
  setSquareEightValue('');
  setSquareNineValue('');
  setPlayer(false);
  setStatus("X's turn");
  updateRound();
}

//update player turns
const updatePlayer = () => {
  if (player === false){
    setPlayer(true)
    setStatus("O's turn")
  } else {
    setPlayer(false)
    setStatus("X's turn")
  }
}

// Square 1
const updateSquareOne = ()=>{
  if(player === false){
  setSquareOneValue("X");
  updatePlayer();
  checkWin();
}else{
    setSquareOneValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 2
const updateSquareTwo = ()=>{
  if(player === false){
    setSquareTwoValue("X");
    updatePlayer();
    checkWin();
}else{
    setSquareTwoValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 3
const updateSquareThree = ()=>{
  if(player === false){
    setSquareThreeValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareThreeValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 4
const updateSquareFour = ()=>{
  if(player === false){
    setSquareFourValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareFourValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 5 
const updateSquareFive = ()=>{
  if(player === false){
    setSquareFiveValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareFiveValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 6
const updateSquareSix = ()=>{
  if(player === false){
    setSquareSixValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareSixValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 7 
const updateSquareSeven = ()=>{
  if(player === false){
    setSquareSevenValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareSevenValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 8
const updateSquareEight = ()=>{
  if(player === false){
    setSquareEightValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareEightValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}


// Square 9
const updateSquareNine = ()=>{
  if(player === false){
    setSquareNineValue("X");
    updatePlayer();
    checkWin();
  }else{
    setSquareNineValue("O");
    updatePlayer();
    checkWin();
  }
  updateRound
}

const winCount = () => {
  if(status==="X wins"){
    setXwins(xwins+1)
  } else if (status==="O wins"){
    setOwins(owins+1)
  }
}

const checkChamp = () => {
  if (xwins > owins){
    setStatus("X has won the tournament")
  } else {
    setStatus("O has won the tournament")
  }
}

const checkWin = () => {

  
  // Wins with 123
  if(squareOneValue===squareTwoValue && squareTwoValue===squareThreeValue &&
      squareOneValue!=="" && squareTwoValue!=="" && squareThreeValue!=="" ){
    if(squareOneValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 456
  else if(squareFourValue===squareFiveValue  && squareFiveValue===squareSixValue && 
          squareFourValue!=="" && squareFiveValue!=="" && squareSixValue!=="" ){
    if(squareFourValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 789
  else if(squareSevenValue===squareEightValue  && squareEightValue===squareNineValue && 
          squareSevenValue!=="" && squareEightValue!=="" && squareNineValue!=="" ){
    if(squareSevenValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 147
  else if(squareOneValue===squareFourValue  && squareFourValue===squareSevenValue && 
          squareOneValue!=="" && squareFourValue!=="" && squareSevenValue!=="" ){
    if(squareSevenValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 258
  else if(squareTwoValue===squareFiveValue  && squareFiveValue===squareEightValue && 
          squareTwoValue!=="" && squareFiveValue!=="" && squareEightValue!=="" ){
    if(squareTwoValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 369
  else if(squareThreeValue===squareSixValue  && squareSixValue===squareNineValue && 
          squareThreeValue!=="" && squareSixValue!=="" && squareNineValue!=="" ){
    if(squareThreeValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 159
  else if(squareOneValue===squareFiveValue  && squareFiveValue===squareNineValue && 
          squareOneValue!=="" && squareOneValue!=="" && squareNineValue!=="" ){
    if(squareOneValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
  // Wins with 357
  else if(squareThreeValue===squareFiveValue  && squareFiveValue===squareSevenValue && 
          squareThreeValue!=="" && squareFiveValue!=="" && squareSevenValue!=="" ){
    if(squareThreeValue==="X"){
      setStatus("X wins")
    } else {
      setStatus("O wins")
    }
  }
}

  return(
    <>
          <StatusBar barStyle="dark-content" />
          
    
    <SafeAreaView>
      {/* Round number */}
    <View style={styles.RoundBanner}>
      <Text>{"Round "+ round}</Text>
    </View>

    {/* Restart Button */}
      <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
        <Text>Restart</Text>
      </TouchableOpacity>

    {/* Play Area */}
      <View style={styles.playarea}>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.block} onPress={updateSquareOne}>
            <Text style={styles.blockX}>{squareOneValue}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block} onPress={updateSquareTwo}>
            <Text style={styles.blockX}>{squareTwoValue}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block} onPress={updateSquareThree}>
          <Text style={styles.blockX}>{squareThreeValue}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.block} onPress={updateSquareFour}>
          <Text style={styles.blockX}>{squareFourValue}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block} onPress={updateSquareFive}>
          <Text style={styles.blockX}>{squareFiveValue}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block} onPress={updateSquareSix}>
          <Text style={styles.blockX}>{squareSixValue}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.block} onPress={updateSquareSeven}>
          <Text style={styles.blockX}>{squareSevenValue}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block} onPress={updateSquareEight}>
          <Text style={styles.blockX}>{squareEightValue}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block} onPress={updateSquareNine}>
          <Text style={styles.blockX}>{squareNineValue}</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Announcement Banner */}
    <View style={styles.AnnouncementBanner}>
      <Text>{status}</Text>
    </View>

</SafeAreaView>


    </>
  );
};

const styles = StyleSheet.create({
  playarea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    alignContent: 'center',
    marginTop:50
  },
  buttonRow: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  block:{
    borderWidth:5,
    width:100,
    height:100,
  },

  blockX:{
    color:'red',
    fontSize:75,
    alignItems: "center",
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf:"center"

  },

  blockO:{
    color:'green',
    fontSize:75,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf:"center"
  },

  restartButton:{
    width:100,
    height:50,
    borderWidth:1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: "center"
  },

  AnnouncementBanner: {
    width:300,
    height:50,
    borderWidth:1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: "center"
  },

  RoundBanner: {
    width:300,
    height:50,
    fontSize:100,
    borderWidth:1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: "center"
  }

});

export default App;