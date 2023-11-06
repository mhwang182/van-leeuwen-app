import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/NavBar'

const NavBar = () => {
    return (
        <Wrapper>
            <div>
                <img src={logo} className='logo' alt=''/>
            </div>
        </Wrapper>
    )
}

export default NavBar