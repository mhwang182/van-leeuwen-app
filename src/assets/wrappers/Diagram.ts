import styled from 'styled-components'
import honeycomb from '../images/honeycomb.png';
import cone from '../images/cone.png';
import cup from '../images/cup.png';
import truck from '../images/truck.jpeg';


const Wrapper = styled.section`
    min-height: 530px;
    height: 90vh;
    width: 50%;
    float: left;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    background-image: url("${truck}");

    @media screen and (max-width: 992px) {
        width: 100%;
        height: 70vh;
    }

    .coneContainer {
        display: flex;
        flex-direction: column-reverse;
        width: 150px;
        justify-content: center;
    }

    .cupContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 310px;
        flex-wrap: wrap-reverse;
    }

    .scoop {
        margin-top: -15px;
        height: 120px;
        min-height: 120px;
        width: 120px;
        min-width: 120px;
        background-size: contain;
        position:relative;
        background-repeat: no-repeat;
    }

    .cone {
        height: 225px;
        min-height: 225px;
        width: 120px;
        background-image: url("${cone}");
        background-size: contain;
        margin-top: -50px;
        background-repeat: no-repeat;
        position:relative;
        background-position: center;
    }

    .cup {
        height: 180px;
        min-height: 120px;
        width: 250px;
        min-width: 250px;
        background-image: url("${cup}");
        background-size: contain;
        margin-top: -50px;
        background-repeat: no-repeat;
        position:relative;
        background-position: center;
    }
`

export default Wrapper