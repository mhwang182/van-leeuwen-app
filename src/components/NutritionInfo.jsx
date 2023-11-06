import { useEffect, useState } from "react";
import {default as RightSection}  from "../assets/wrappers/RightSection"
import Wrapper from "../assets/wrappers/NutritionInfo";
import { useAppContext } from "../context/appContext"
import { MacroMap } from "../utils";
import { AiFillFire } from 'react-icons/ai';
import { CiWheat } from 'react-icons/ci';
import { FaBowlFood } from 'react-icons/fa6';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Button from "../assets/wrappers/Button";
import CenteredSection from "../assets/wrappers/CenteredSection";
import InfoBar from "../assets/wrappers/InfoBar";

const NutritionInfo = () => {

    const {state, showNutritionInfo} = useAppContext();

    const [cals, setCals] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);

    const getMacros = () => {
        let cals = 0;
        let carbs = 0;
        let fat = 0;

        state.scoops.forEach(scoop => {
            cals += MacroMap[scoop].calories;
            carbs += MacroMap[scoop].carbs;
            fat += MacroMap[scoop].fat
        });

        setCals(cals);
        setCarbs(carbs);
        setFat(fat);
    }

    useEffect(() => {
        getMacros();
    })


    return (
        <RightSection>
            <Wrapper>
                <br />
                <InfoBar>
                    <AiFillFire /> Calories: {cals}
                </InfoBar>
                <InfoBar>
                    <CiWheat /> Carbs: {carbs}
                </InfoBar>
                <InfoBar>
                    <FaBowlFood /> Fat: {fat}
                </InfoBar>
                <br/>
                <CenteredSection>
                    <div>Percent of Daily Calories: </div>
                </CenteredSection>
                <br/>
                <CenteredSection>
                    <div style={{ width: 300, height: 300 }}>
                        <CircularProgressbar 
                            value={cals/20} 
                            text={`${(cals/2000) * 100}%`} 
                        />
                    </div>
                </CenteredSection>
                <br/>
                <CenteredSection>
                    <Button onClick={showNutritionInfo}>
                        back
                    </Button>
                </CenteredSection>
            </Wrapper>
            
        </RightSection>
    )
}

export default NutritionInfo