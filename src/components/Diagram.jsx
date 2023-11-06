import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/Diagram";

import { Flavor } from "../utils";
import HoneyCombImg from '../assets/images/honeycomb.png';
import { FlavorImageMap } from "../utils";
import CupDiagram from "./CupDiagram";

const Diagram = () => {

    const {state} = useAppContext();

    const Diagram = () => {
        return state.isCone ? (
            <div className="coneContainer">
                <div className="cone"></div>
                {state.scoops.map(scoop => {
                    console.log(Flavor[scoop])
                    return( 
                            <div className="scoop" style={{backgroundImage: `url(${FlavorImageMap[scoop] || HoneyCombImg})`}}></div>
                    )
                })}
            </div>
        ) : <CupDiagram />
    }
    

    return (
        <Wrapper>
            <Diagram />
        </Wrapper>
    )

}

export default Diagram