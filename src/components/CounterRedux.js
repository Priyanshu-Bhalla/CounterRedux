import React from 'react'
import {decrement} from '../redux/Counter/CounterAction'
import {connect} from 'react-redux';
function CounterRedux(props) {
    return (
        <div>
            <h2>Count - {props.count}</h2>
            <button onClick={props.decrement}>Decrement count</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        count : state.count
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        decrement :()=> dispatch(decrement())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterRedux)
