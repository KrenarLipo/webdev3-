import { useState } from "react";

function MyForm() {
//    const [name, setName] = useState("");
    const[inputs, setInputs] = useState({}); // perdoret per array

   // const handleSubmit = (event) =>{
     //   event.preventDefault();
     // alert(`Mire se erdhe: ${name}`);
  //  }  
  // passing a single value

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        var thename = inputs.username;
        var theage = inputs.age;

        alert(thename +" eshte"+theage+ " vjec!");
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label>Vendosni emrin tuaj
                <input 
                type='text'
                name = "username"
                value = {inputs.username || ""}
                //onChange = {(e) => setName(e.target.value)}
                onChange = {handleChange}
                />
            </label>
            <label> Vendosni moshen tuaj
                <input 
                type = "number"
                name = "age"
                value = {inputs.age || ""} 
                onChange = {handleChange} 
                />            
            </label>
            <input type = "submit" ></input>
        </form>
    )
}

export default MyForm;