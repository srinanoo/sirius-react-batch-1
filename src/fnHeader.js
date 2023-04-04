import { useState } from "react";

function HeaderFunc(props) {

    const [details, setDetails] = useState({
        "id": 1,
        "name": "Old Name",
        "dateJoined": "01/01/2023"
    });

    const updateState = () => {
        // setDetails(()=> ({"id": 2, "name":"New Name", "dateJoined": "05/05/2023"}));

        setDetails((previousState)=> ({...previousState, "dateJoined": "05/05/2023"}));
    }

    return(
        <>
            <header>
                <div>Header Container from function</div>
                <div>
                    <MenuFunc />
                </div>
                <div>
                    <p>Details: {details.id}, {details.name}, {details.dateJoined}</p>
                </div>
                <button onClick={updateState}>Update State</button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </header>
        </>
    )
}

function MenuFunc() {
    return (
        <>
            <nav>
                <ul>
                    <li>Func Menu 1</li>
                    <li>Func Menu 1</li>
                    <li>Func Menu 1</li>
                    <li>Func Menu 1</li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderFunc;
// export {MenuFunc};