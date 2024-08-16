import {useState} from "react";

const Form = ()=>{
    const [course , setCourse] = useState("");
    const [desc , setDesc] = useState("");
    const [country , setCountry] = useState("India");
    const [aggrement , setAggrement] = useState(false);
    const [gender , setGender] = useState("");

    const handleChange=(event) =>{
        if (event.target.name==="course") {
            setCourse(event.target.value);
        }
        else if (event.target.name === "desc"){
            setDesc(event.target.value);
        }
        else if (event.target.name === "country"){
            setCountry(event.target.value);
        }
        else if(event.target.name === "aggrement"){
            setAggrement(event.target.checked)
        }
        else if(event.target.name === "gender"){
            setGender(event.target.value);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(course);
        console.log(desc);
        console.log(country);
        console.log(aggrement);
        console.log(gender);
    }

    return (
        <div>
            <h1>Form</h1>
            
            <form onSubmit={handleSubmit}>

                <input name="course" value={course} onChange={handleChange} />
                <br />

                <textarea name="desc" value={desc} onChange={handleChange}></textarea>
                <br />

                <select name="country" value={country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                </select>
                <br />

                <input type="checkbox" name="aggrement" checked={aggrement} onChange={handleChange} />
                <br />

                <input type="radio" name="gender" value="Male" onChange={handleChange} />
                <input type="radio" name="gender" value="Female" onChange={handleChange} />
                <input type="radio" name="gender" value="Other" onChange={handleChange} />
                <br />

                <input type="submit" value="Save" />

            </form>

        </div>
    )
};
export default Form;