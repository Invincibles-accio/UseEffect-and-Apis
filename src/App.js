

import GithubUser from "./Components/GithubUser";


const App = () => {
  return (
    <div className="App">
         <GithubUser />
    </div>
  );
}

export default App;







// import React, {useState, useEffect} from 'react';


// const App = () => {
//    let [score, setScore] = useState(100);
//    let [wickets, setWickets] = useState(2);


//    useEffect(()=>{
//       document.title = `CSk Score ${score}/${wickets}`; // as many time as component re-rendered
//       console.log("Rendered")
//    }, [score, wickets]
//    )
   
  

//     const run = () => {
//       setScore(score + 4);
//       // console.log("I am runnning")
//     }
//     const stump = () => {
//       setWickets(wickets +1);
//     }

//   return (
//     <div className="App">
//       <h1>CSK Score {score}/{wickets}</h1>
//       <button onClick={run}>Run</button>
//       <button onClick={stump}>Wicket</button>
//     </div>
//   );
// }


// export default App;