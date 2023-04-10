import { useContext } from "react";
import { UsernameContext } from "./fnHooks";
function FuncAccount(props) {
    return (

        <>
            <h1>Account</h1>
            {/* {props.username} */}

            {useContext(UsernameContext)}
        </>
    )
    
}

export default FuncAccount;