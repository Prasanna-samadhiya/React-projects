import React, { useContext } from "react";
import { value1 } from "./main1";

function Home() {
  
    
  const data= useContext(value1)
    return (
      <div>
        <h2>HI!! {data}</h2>
        <p>My name is prasanna samadhiya and following are my react projects.</p>
 
        
      </div>
    );
  
}
 
export default Home;