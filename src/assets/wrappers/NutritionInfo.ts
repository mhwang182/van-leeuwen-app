import styled from 'styled-components'

const Wrapper = styled.nav`
    .infoBar {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        width: 400px;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 5px;

        @media screen and (max-width: 500px) {
            min-width: 250px;
        }
    }
`
export default Wrapper