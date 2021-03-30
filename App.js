

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMorelinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CalculatorDisplay from './Components/calculator-display';
import NumberButton from './Components/number-button';
import OperationButton from './Components/operation-button';
import FunctionButton from './Components/function-button';



const App: () => React$Node = () => {
//Q1: explain what the following 3 lines do.
const [numberDisplay, setNumberDisplay] = useState("");
const [previousTotal, setPreviousTotal] = useState("");
const [currentOperation, setCurrentOperation] = useState("");

//Q2: explain what `${numberDisplay}${digit}` does.   
const updateDisplay = digit => {
    setNumberDisplay(`${numberDisplay}${digit}`);
  };

//Q3: setNumberDisplay is not defined anywhere in the App, nor is it imported. How is the function properly invoked and executed then?
const changeDisplay = action => {
    if (action === 'CLR') {
      setNumberDisplay("");
      setPreviousTotal("");
      setCurrentOperation("");
    } else if (action === 'DEL') {
      if (typeof numberDisplay === 'string') {
        setNumberDisplay(numberDisplay.slice(0, -1));
      }
    } 
  };

  const updateCalculations = op => {
    //define total, entered number, and operation
    let newTotal = previousTotal;
    let enteredNumber = numberDisplay*1;
    let thisOp = '';
    //conditional statement to determine what is the operation
    if (currentOperation === ''){
      thisOp = op;
    } else {
      thisOp = currentOperation;
    } 

    //conditional statement to determine new Total
    if (previousTotal === ''){
      newTotal = enteredNumber;
    } else {

        if (thisOp === '√'){
        newTotal = Math.sqrt(enteredNumber)
    }   else if (thisOp === '/'){
        newTotal = previousTotal / enteredNumber
      } else if (thisOp === 'x'){
        newTotal = previousTotal * enteredNumber
      } else if (thisOp === '+'){
        newTotal = previousTotal + enteredNumber
      } else if (thisOp === '-'){
        newTotal = previousTotal - enteredNumber
      } 
    }
        

    

    //conditional statement to set the state variables
    if(op !== '='){
      setNumberDisplay('');
      setPreviousTotal(newTotal);
      setCurrentOperation(op);
    } else {
      setNumberDisplay(newTotal);
      setPreviousTotal('');
      setCurrentOperation('');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.savContainer}>
        <View style={styles.calculatorContainer}>
          <View style={{...styles.buttonRow, flexGrow:1}}>
            <CalculatorDisplay Numbers={numberDisplay} />
          </View>
          <View style={styles.buttonRow}>
            <FunctionButton ThisFunction='CLR' ButtonWidth='25%' ButtonAction={changeDisplay} />
            <FunctionButton ThisFunction='DEL' ButtonWidth='25%' ButtonAction={changeDisplay} />
            <OperationButton Operation='√' UpdateCalculations={updateCalculations} />
            <OperationButton Operation='/' UpdateCalculations={updateCalculations} />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton Number={7} ButtonWidth='25%' ButtonAction={updateDisplay} />
            <NumberButton Number={8} ButtonWidth='25%' ButtonAction={updateDisplay} />
            <NumberButton Number={9} ButtonWidth='25%' ButtonAction={updateDisplay} />
            <OperationButton Operation="x" UpdateCalculations={updateCalculations}  />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton Number={4} ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <NumberButton Number={5} ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <NumberButton Number={6} ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <OperationButton Operation="-" UpdateCalculations={updateCalculations}  />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton Number={1} ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <NumberButton Number={2} ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <NumberButton Number={3} ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <OperationButton Operation="+" UpdateCalculations={updateCalculations}  />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton Number={0} ButtonWidth="50%"  ButtonAction={updateDisplay} />
            <NumberButton Number="." ButtonWidth="25%"  ButtonAction={updateDisplay} />
            <OperationButton Operation="=" UpdateCalculations={updateCalculations}  />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  savContainer: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
});

export default App;