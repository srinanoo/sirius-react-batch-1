import PropTypes from "prop-types";

function FuncPropType(props) {
    return (
        <>
            {props.id}
        </>
    )
}

FuncPropType.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
}

FuncPropType.defaultProps = {
    id: "",
    name: ""
}

export default FuncPropType;