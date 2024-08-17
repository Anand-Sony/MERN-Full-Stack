import { useState } from "react";

const RegistrationForm = ()=>{
    const [data , setData] = useState({
        fullname : "",
        email : "",
        password : "",
        confirmPassword : "",
        country : "",
        gender : "",
        aggrement : false,

    })

    const handleChange = (e)=>{
        // if (e.target.name === "fullname") {
        //     setData((oldData => ({...oldData , name : e.target.value})))  // we used oldData because when i write email after name, 
        // }                                                                 // then name was not showing, only recemt data was showing
        // else if (e.target.name === "email") {
        //     setData((oldData => ({...oldData , email : e.target.value})))
        // }
        if (e.target.type === "checkbox") {
            setData((oldData)=>({...oldData , [e.target.name] : e.target.checked}))
            // e.target.checked updates the state with a boolean value, typically used for checkboxes or radio buttons.
        }
        else{
            setData((oldData)=>({...oldData , [e.target.name] : e.target.value}))
            //e.target.value updates the state with a string value, typically used for text inputs.
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.fullname || !data.email || !data.password || !data.confirmPassword || !data.country || !data.gender || !data.aggrement){
          alert("Please fill in all the details!");
        } 
        else if (data.password !== data.confirmPassword) {
          alert("Passwords do not match!");
        } 
        else {
          console.log(data);
        }
      };

    return(
        <div>
            <h2>Registration Form</h2>
            
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="fullname" value={data.fullname} onChange={handleChange}/>
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" value={data.email} onChange={handleChange}/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={handleChange}/>
            </div>

            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange}/>
            </div>

            <div>
                <label>Country</label>
                <select name="country" value={data.country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                </select>
            </div>

            <div>
                <label>Gender</label>
                <br />
                <label >Male</label>
                <input type="radio" name="gender" value="male" onChange={handleChange} />
                
                <label >Female</label>
                <input type="radio" name="gender" value="female" onChange={handleChange} />
                
                <label >Other</label>
                <input type="radio" name="gender" value="other" onChange={handleChange} />
            </div>

            <div>
                <label>Aggrement</label>
                <input type="checkbox" name="aggrement" checked={data.aggrement} onChange={handleChange}/>
            </div>

            <input type="submit" value="Save" />
            </form>

        </div>
    )
};
export default RegistrationForm;