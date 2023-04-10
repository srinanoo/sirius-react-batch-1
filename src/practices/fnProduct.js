import { useContext } from "react";
import { UsernameContext } from "./fnHooks";

function FuncProducts(props) {
    return (

        <>
            <h1>Products</h1>
            {/* {props.username} */}
            {useContext(UsernameContext)}
        </>
    )
    
}

export default FuncProducts;