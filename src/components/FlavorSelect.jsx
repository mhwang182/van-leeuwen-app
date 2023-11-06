import { useState } from "react";
import Wrapper from "../assets/wrappers/FlavorSelect";
import { Flavor } from "../utils";
import { useAppContext } from "../context/appContext";
import Select from 'react-select';

import { IoIosRemoveCircle } from 'react-icons/io';
import { FaIceCream } from 'react-icons/fa';

import Button from "../assets/wrappers/Button";
// import ScoopIndicator from "./ScoopIndicator";
import {default as RightSection}  from "../assets/wrappers/RightSection"
import CenteredSection from "../assets/wrappers/CenteredSection";
import StartingInfo from "./StartingInfo";

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const FlavorSelect = () => {

    const {
        state, 
        updateScoops, 
        showNutritionInfo,
        setToCone,
        setToCup,
        resetState,
        saveState
    } = useAppContext();

    const FlavorInput = ({selectedOption, index}) => {
        return(
            <div className="inputRow">
                <div className="scoopNum">{`${index + 1}: `}</div>
                <Select 
                    className="react-select-container"
                    value={{value: state.scoops[index], label: state.scoops[index]}}
                    onChange={(selectedOption) => onFlavorChange(selectedOption, index)}
                    options={
                        Object.keys(Flavor).map((flavKey) => {return {value: Flavor[flavKey], label: Flavor[flavKey]}})
                    }
                />
                <Button 
                    onClick={() => removeScoop(index)}>
                    <IoIosRemoveCircle />
                </Button>
            </div>
        )
    }

    const onFlavorChange = (selectedOption, index) => {
        //add validation on scoop
        let tempScoops = [...state.scoops];
        tempScoops[index] = selectedOption.value;
        updateScoops(tempScoops);
    }

    const addScoop = () => {
        updateScoops([...state.scoops, Flavor.HoneyComb])
    }

    const removeScoop = (index) => {
        let tempScoops = [...state.scoops];
        tempScoops.splice(index, 1);
        updateScoops(tempScoops);
    }

    const createNotification = (message) => {
        return NotificationManager.info('', message, 1000);
    }

    return (
        <RightSection>
            <Wrapper>
                <div>
                    <br />
                    <CenteredSection>
                        <Button 
                            onClick={addScoop}
                            disabled={state.scoops.length >= 3}>
                                Add Scoop <FaIceCream />
                        </Button>
                    </CenteredSection>
                    <br />
                    <CenteredSection>
                        <input type="checkbox" onClick={setToCone} checked={state.isCone}/> Cone
                        <br />
                        <input type="checkbox" onClick={setToCup} checked={!state.isCone}/> Cup
                    </CenteredSection>
                    {state.scoops.length == 0 &&
                        <>
                            <br />
                            <StartingInfo/>
                        </>
                    }
                    <div className="inputSection">
                    {state.scoops.map((flav, index) => {
                            return <FlavorInput key={`input-${index}`}flavor={flav} index={index} />
                        })}
                    </div>
                    {state.scoops.length > 0 && 
                    <>
                        <CenteredSection>
                            <Button onClick={() => {
                                createNotification('Icecream saved!');
                                saveState();
                            }}>
                                Save Icecream!
                            </Button>
                        </CenteredSection>
                        <br />
                        <CenteredSection>
                            <Button onClick={showNutritionInfo}>
                                Show Nutrition Info
                            </Button>
                        </CenteredSection>
                        <br />
                        <CenteredSection>
                            <Button onClick={() => {
                                createNotification('Scoops reset (including local storage)');
                                resetState();
                            }}>
                                Reset
                            </Button>
                        </CenteredSection>
                    </>
                    }
                    <br />
                    {/* {state.scoops.length > 0 && 
                    <ScoopIndicator scoopCount={state.scoops.length}/>} */}
                </div>
                <NotificationContainer/>
            </Wrapper>
        </RightSection>
    )
}

export default FlavorSelect
