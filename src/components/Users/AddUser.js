import React ,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/button/button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error,setError] = useState();


   const addUserHandler = (event) => {
      event.preventDefault();
      if(enteredUserAge.trim().length===0 || enteredUserAge.trim().length===0){
         setError({
            title:'Invalid Input',
            message:'Please enter a valid name and age(not empty)'
         });
        return;
      }
      if(+enteredUserAge<1){
         setError({
            title:'Invalid Input',
            message:'Please enter a valid name and age (>0)'
         });
        return;
      }
      // console.log(enteredUsername,enteredUserAge)
      props.onAddUser(enteredUsername,enteredUserAge);
      setEnteredUserAge('');
      setEnteredUsername('');
   };

   const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value)
   }

   const userageChangeHandler = (event)=>{
        setEnteredUserAge(event.target.value)
   }

   const errorHandler = ()=>{
      setError(null);
   };

   return (
      <div>
      {error && <ErrorModal title ={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className = {classes.input}>
         <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" value={enteredUserAge} onChange={userageChangeHandler}/>
            <Button type="submit">Add User</Button>
         </form>
      </Card>
      </div>
   );
};

export default AddUser;
