import React from "react";

class ClassBasedComponent extends React.Component{
    // constructor (props){
    //     console.log(props);
    //     super(props);
    //     this.state = {course :"react"};
    // }
    // if yu don't want to make a constructor for state, then :
    state = {course : "react"} 
    componentDidMount(){
        console.log("After render");

        setInterval( () =>{
            this.setState({course : "vue"});
        } , 5000)  // means after 5 seconds, it will run
    }
    render(){
        return (
            <div>
                <p> Class Based Components </p>
                
                <p>State : This is {this.state.course} course </p>
            </div>
        )
    }
};
export default ClassBasedComponent;