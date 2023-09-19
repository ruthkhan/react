import { useParams } from 'react-router-dom'

const Input = (props) => {
    const { input, color1, color2 } = useParams()

    if (isNaN (input)) {
        return (
            <h1 style={{'color':`${ color1 }`, 'backgroundColor':`${ color2 }`}}>The word is: { input }</h1>
        )
    } else { 
        return (
            <h1>The number is: { input }</h1>
        )
    }
}

export default Input