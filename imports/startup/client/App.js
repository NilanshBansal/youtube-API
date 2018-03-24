import React from "react";
import ReactDOM from "react-dom";
import AppMain from "./AppMain";

export default App = (props)=>{
   
    return (
  <AppMain />
)

}

Meteor.startup(()=>{
    ReactDOM.render(<App />,document.querySelector('.render-target'))
})