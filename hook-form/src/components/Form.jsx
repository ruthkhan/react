import React, { useState } from  'react';
    
const User = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [confirmPW, setConfirmPW] = useState("")
    const [firstnameError, setFirstnameError] = useState(false)
    const [lastnameError, setLastnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPWError, setConfirmPWError] = useState(false)
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault()
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password, confirmPW }
    	// setFirstname("")
        // setLastname("")
    	// setEmail("")
    	// setPassword("")
        // setConfirmPW("")
    }
    
    const validateFirstname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value && e.target.value.length < 2) {
            setFirstnameError("First Name must be at least 2 characters")   
        } else {
            setFirstnameError(false)
        }
    }

    const validateLastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value && e.target.value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters")
        } else {
            setLastnameError(false)
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value && e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError(false)
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError(false)
        }
        if (e.target.value && e.target.value != confirmPW) {
            setConfirmPWError("Passwords must match")
        } else {
            setConfirmPWError(false)
        }
    }

    const validateConfirmPW = (e) => {
        setConfirmPW(e.target.value)
        if (e.target.value && e.target.value != password) {
            setConfirmPWError("Passwords must match")
        } else {
            setConfirmPWError(false)
        }
    }

    return(
        <>
            <form onSubmit={ createUser }>
                <div className="md:flex md:items-center mb-3 bg-gray-200 ">
                    <div className="md:w-1/4">
                        <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">First Name: </label> 
                    </div>
                    <div className="md:w-3/4 px-1.5">
                        <input type="text" name="firstname" value={firstname} onChange={ validateFirstname } className="block w-full rounded-md border-0 py-1.5 my-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {
                            firstnameError ? 
                            <p className="text-sm text-red-500">{ firstnameError }</p> : 
                            ""
                        }
                    </div>
                </div>
                <div className="md:flex md:items-center mb-3 bg-gray-200">
                    <div className="md:w-1/4">
                        <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Last Name: </label> 
                    </div>
                    <div className="md:w-3/4 px-1.5">
                        <input type="text" value={lastname} onChange={ validateLastname } name="lastname" className="block w-full rounded-md border-0 py-1.5 my-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {
                            lastnameError? 
                            <p className="text-sm text-red-500">{ lastnameError}</p> : 
                            ""
                        }
                    </div>
                </div>
                <div className="md:flex md:items-center mb-3 bg-gray-200">
                    <div className="md:w-1/4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address: </label> 
                    </div>
                    <div className="md:w-3/4 px-1.5">
                        <input type="email" value={email} onChange={ validateEmail } name="email" className="block w-full rounded-md border-0 py-1.5 my-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {
                            emailError? 
                            <p className="text-sm text-red-500">{ emailError }</p> : 
                            ""
                        }
                    </div>
                </div>
                <div className="md:flex md:items-center mb-3 bg-gray-200">
                    <div className="md:w-1/4">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password: </label>
                    </div>
                    <div className="md:w-3/4 px-1.5">
                        <input type="password" value={password} onChange={ validatePassword } name="password" className="block w-full rounded-md border-0 py-1.5 my-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {
                            passwordError? 
                            <p className="text-sm text-red-500">{ passwordError }</p> : 
                            ""
                        }
                        {
                            confirmPWError? 
                            <p className="text-sm text-red-500">{ confirmPWError }</p> : 
                            ""
                        }
                    </div>
                </div>
                <div className="md:flex md:items-center mb-3 bg-gray-200">
                    <div className="md:w-1/4">
                        <label htmlFor="confirmPW" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password: </label>
                    </div>
                    <div className="md:w-3/4 px-1.5">
                        <input type="password" value={confirmPW} onChange={ validateConfirmPW } name="confirmPW" className="block w-full rounded-md border-0 py-1.5 my-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create User</button>
            </form>
            <hr className="my-5" />
            <h2 className="font-extrabold">Your Form Data</h2>
            <div className="flex justify-center">
                <table className="table-fixed border-separate border-spacing-x-5">
                    <tbody className="text-left">
                        <tr>
                            <td className="w-100">First Name</td>
                            <td className="w-400">{ firstname } </td>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}
    
export default User
