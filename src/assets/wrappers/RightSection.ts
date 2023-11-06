import styled from 'styled-components'

const Wrapper = styled.section`
    box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
    min-height: 530px;
    height: 90vh;
    display: flex;
    justify-content: center;
    width: 50%;
    float: right;
    min-width: 500px;

    @media screen and (max-width: 992px) {
        width: 100%;
        height: 60vh;
    }
`

export default Wrapper