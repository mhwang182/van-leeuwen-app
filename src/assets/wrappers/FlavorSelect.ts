import styled from 'styled-components'

const Wrapper = styled.section`
    .scoopNum {
        width: 25px;
        line-height: 40px;
        text-align: center;
    }

    select {
        margin-right: 5px;
    }

    .inputRow {
        height: 40px;
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        flex-direction: row;
         button {
            float: right;
         }     
    }

    .react-select-container {
        width: 400px;
        margin-right: 5px;

        @media screen and (max-width: 500px) {
            width: 100%;
            min-width: 250px;
        }
    }
`

export default Wrapper