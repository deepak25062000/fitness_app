import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ({child , userdetails}) => {
    return ( 
    <>
    { userdetails!=null ? 
        (child) : (<Navigate to="/signin"/>)
    }
    </>
    );
}

let mapStateToProps = (state)=>{
    return {
        userdetails : state
    }
}
export default connect(mapStateToProps)(Protect);