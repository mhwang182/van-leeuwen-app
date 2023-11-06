import styled from 'styled-components'
import CenteredSection from '../assets/wrappers/CenteredSection';

import { FaRegFaceSmileBeam } from 'react-icons/fa6';

const Dot = styled.div`
    height: 30px;
    width: 30px;
    border-style: solid;
    border-color: black;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 5px;
`;

const FilledDot = styled.div`
    height: 30px;
    width: 30px;
    border-style: solid;
    border-color: black;
    border-radius: 50%;
    background: black;
    margin-right: 5px;
    margin-left: 5px;
`

const Container = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Wrapper = styled.section`

`

const ScoopIndicator = ({scoopCount}) => {
    return (
        <Wrapper>
            <CenteredSection>
            
                {`Scoops left to Add: ${3 - scoopCount}`}
            </CenteredSection>
            <br />
            <Container>
                {scoopCount - 1 >= 0 ? <FilledDot /> : <Dot />}
                {scoopCount - 2 >= 0 ? <FilledDot /> : <Dot />}
                {scoopCount - 3 >= 0 ? <FilledDot /> : <Dot />}
            </Container>
        </Wrapper>
    )
}

export default ScoopIndicator;