import React, { useState } from  'react';
    
const User = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [confirmPW, setConfirmPW] = useState("")
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault()
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password, confirmPW }
        // console.log("Welcome", newUser)
    	// setFirstname("")
        // setLastname("")
    	// setEmail("")
    	// setPassword("")
        // setConfirmPW("")
    }
    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstname">First Name: </label> 
                    <input type="text" name="firstname" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPW} onChange={ (e) => setConfirmPW(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h2>Your Form Data</h2>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>{ firstname } </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{ lastname } </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{ email } </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{ password } </td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td>{ confirmPW } </td>
                </tr>
            </table>
        </>
    )
}
    
export default User
