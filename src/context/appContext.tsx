import { MyState,Flavor } from '../utils'
import {createContext, ReactNode, useContext, useReducer} from 'react';
import reducer from './reducers';
import { UPDATE_SCOOPS, SHOW_INFO, SET_TO_CONE, SET_TO_CUP, RESET_STATE } from './actions';


const scoops = localStorage.getItem('scoops');

const initialState: MyState = {
    isCone: true,
    showNutritionInfo: false,
    scoops: scoops ? JSON.parse(scoops) : []
}

type ContextType = {
    state: MyState,
    updateScoops?: (newScoops: Flavor[]) => void,
    showNutritionInfo?: () => void,
    setToCone?: () => void,
    setToCup?: () => void,
    resetState?: () => void,
    saveState?: () => void
}

const AppContext = createContext<ContextType>({state: initialState});

const AppProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateScoops = (newScoops: Flavor[]) => {
        console.log(newScoops);
        dispatch({type: UPDATE_SCOOPS, payload: {scoops: newScoops}});
    }

    const showNutritionInfo = () => {
        dispatch({type: SHOW_INFO, payload: {}});
    }

    const setToCone = () => {
        dispatch({type: SET_TO_CONE});
    }

    const setToCup = () => {
        dispatch({type: SET_TO_CUP});
    }

    const resetState = () => {
        localStorage.removeItem('scoops');
        dispatch({type: RESET_STATE});
    }

    const saveState = () => {
        localStorage.setItem('scoops', JSON.stringify(state.scoops));
    }

    return (<AppContext.Provider 
        value={{
            updateScoops, 
            showNutritionInfo, 
            setToCone, 
            setToCup, 
            resetState,
            saveState,
            state}}
        >
            {children}
        </AppContext.Provider>);
}

export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppProvider