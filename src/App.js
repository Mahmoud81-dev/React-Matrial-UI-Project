import React, { useState, useEffect } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Exercises from './components/Exercises/index'
import { exercises, muscles } from "./components/services/store";

function App() {
  const [newExercises, setExercises] = useState([]);
  const [newExercise, setExercise] = useState({});
  const [category,setCategory]=useState('');

  useEffect(() => {

    // get exercises by its muscles
    async function getExercisesByMuscles() {
     
      const newExercises = Object.entries(exercises.reduce((exercises , exercise)=>{   // get exercises by its muscles

        //destruction of muscles

        const {muscles} = exercise;
        
        exercises[muscles]= exercises[muscles]
         ? 
         [...exercises[muscles],exercise] 
         :[exercise];

        return exercises

      },{})
      )
      setExercises(newExercises);
    }
    getExercisesByMuscles()
  }, []);

  //to handel category of exercises
  function handelSelectCategory(category){

    setCategory(category)
    
    
  }

   //to handel selected exercise desc
   function handelSelectExercise(id){

    const newExercise = exercises.find(ex=> ex.id === id)
    setExercise(newExercise)
 
    

    
  }


 
  return (
    <div>
      <Header />
      <Footer 
      category={category}
      onSelect={handelSelectCategory}
      muscles={muscles}
      
      />

      <Exercises
      exercise={newExercise}
      category={category}
      onSelect={handelSelectExercise}
      exercises ={newExercises}

      />

     
    </div>
  );
}

export default App;
