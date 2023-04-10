import React from "react";

function FuncHOC(LoadComponent) {
    return class ReturnComp extends React.Component { 
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <>
                    {
                        this.props.logged 
                            ?
                            <LoadComponent {...this.props} />
                            :
                            <h2>You are not Authorised to view this section/Component.</h2>
                    }
                </>
            )
        }
    }
}

export default FuncHOC;