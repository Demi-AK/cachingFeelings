import useSignUpContext from "../../hooks/useSignUpContext"
import './LandingPage'

const Images = () => {

    const { data, handleChange } = useSignUpContext()

    const content = (
        <div>
            <h3>**Add Content**</h3>
        </div>

    )

    return content
}
export default Images