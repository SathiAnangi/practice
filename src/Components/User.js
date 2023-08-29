import React from 'react'

function User(props) {

console.log(props);
    return (
        <>
            <h2>
                User name : {props.name}
                <br></br>
                Age : {props.age}
            </h2>
        </>
    )
}

export default User