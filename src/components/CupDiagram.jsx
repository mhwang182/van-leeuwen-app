import styled from 'styled-components'
import cup from '../assets/images/cup.png';
import { useAppContext } from '../context/appContext';
import { FlavorImageMap } from '../utils';

const sharedStyle = `
    background-image: url("${cup}");
    background-size: contain;
    background-repeat: no-repeat;
    position:relative;
    background-position: center;
    z-index: 1;
`

const Cup = styled.div`
    ${sharedStyle}
    height: 180px;
    min-height: 120px;
    width: 250px;
    min-width: 250px;
    margin-top: -20px;
`

const SmallCup = styled.div`
    ${sharedStyle}
    height: 180px;
    min-height: 120px;
    width: 150px;
    margin-top: -70px;
`

const CupContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 310px;
    flex-wrap: wrap-reverse;
`

const CupDiagram = () => {

    const {state} = useAppContext();

    return (
        <>
            {state.scoops.length > 1 ? <Cup /> : <SmallCup />}
            <CupContainer>
                {state.scoops.map(scoop => {
                    return( 
                            <div className="scoop" style={{backgroundImage: `url(${FlavorImageMap[scoop]})`}}></div>
                    )
                })}
            </CupContainer>
        </>
    )
}

export default CupDiagram