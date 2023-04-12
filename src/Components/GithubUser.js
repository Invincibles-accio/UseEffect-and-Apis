

import axios from "axios";
import React, {useState, useEffect} from "react";


const GithubUser = () => {
    
    const [userName, setUserName] = useState("proabhishek");
    const [userInfo, setUserInfo] = useState({});

    console.log("username",userName)

    // function searchUser(){
    //     axios.get(`https://api.github.com/users/${userName}`)
    //     .then((response)=> setUserInfo(response.data))
    //     .catch(()=> console.log("Error"))
    // }

    

      useEffect(()=>{
        axios.get(`https://api.github.com/users/${userName}`)
        .then((response)=> setUserInfo(response.data))
        .catch(()=> console.log("Error"))
      }
      , [userName])



    // function clearData(){
    //     setUserInfo({});
    //     setUserName("");
    // }




    return(
         <div>
            <div className="github-form">
               <input type="text" placeholder="Enter Github Username"  onChange={(e)=>setUserName(e.target.value)}  value={userName}/> 
               {/* <button onClick={searchUser}>Search</button> */}
             </div>

            <div className="github-user">
                {
                    userInfo.name &&
                    <div>
                        <img src={userInfo.avatar_url} alt="Github User"  style={{width: "200px"}}/>
                        <h1> {userInfo.name} </h1>
                        <p> {userInfo.followers} </p>
                        <p> {userInfo.following} </p>
                        <p> {userInfo.public_repos} </p>
                        <a href={userInfo.html_url} target="_blank"> Link to my Profile</a>
                   </div>

                }

            </div>

            {/* <button onClick={clearData}>Clear</button> */}


         </div>



    )
}

export default GithubUser;
