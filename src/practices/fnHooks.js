import React, { createContext, useEffect, useMemo, useRef, useState } from "react";
import axiosAPI from "../axios";
// import FuncProducts from "./fnProduct";
// import FuncAccount from "./fnAccount";

const UsernameContext = createContext();

// function FuncHooks() {

//     const [name, setName] = useState("Default Name");
//     const [username, setUsername] = useState("Default Username");
//     const [logged, setLoggedIn] = useState(false);

//     const updateStateName = () => {
//         setName("Dinesh");
//         setUsername("Dinesh123");
//     }

//     const login = () => {
//         axiosAPI.get("/getAll")
//             .then(data => {
//                 console.log(data.data);
//                 setUsername(data.data.username);
//                 if(data.data.username) setLoggedIn(true);
//             });
//     }

//     return (
//         <>
//             Name: {name}
//             <br />
//             Username: {username}
//             <br />
//             <button onClick={updateStateName}>Update Name State</button>
//             <br />
//             <button onClick={login}>Login</button>

//         {/* {
//             (logged) ? 
//                 (
//                 <>
//                     <UsernameContext.Provider value={username}>
//                         <FuncAccount />
//                         <FuncProducts />
//                     </UsernameContext.Provider>
                    
//                 </>
//                 )
//                 : 
//                 ""
//         }    */}
//         </>
//     )
// }

function FuncHooks() {
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    let userData = useRef("");

    // const changeState = () => {
    //     setName("Dinesh");
    // }

    useEffect(() => {
        userData.current = name;
        // console.log("use effect is called");
        // setInterval(() => {
        //     axiosAPI.get("/getAll")
        //     .then(data => {
        //         console.log(data.data);
        //         setName(data.data.username);
        //     });
        // }, 2000);
    })

    return (
        <>
            <p>Name: {name}</p>
            <p>Count: {count}</p>
            <p>Previous Name: {userData.current}</p>
            <input type="text" onChange={e => setName(e.target.value)} />
            {/* <input type="text" onChange={e => setName(e.target.value)} />
            <input type="button" onClick={() => setName("Dinesh")} /> */}
        </>
    )
}

function FuncUseMemo() {
    
}



export default FuncHooks;
export { UsernameContext, FuncUseMemo };