import { MyState } from "../utils"
import { RESET_STATE, SET_TO_CONE, SET_TO_CUP, SHOW_INFO, UPDATE_SCOOPS } from "./actions"

type Action = {
    type: string,
    payload?: any
}

const reducer = (state: MyState, action: Action) => {

    console.log(action.type);
    if(action.type === UPDATE_SCOOPS) {
        return {
            ...state,
            scoops: action.payload.scoops
        }
    }

    if(action.type === SHOW_INFO) {
        return {
            ...state,
            showNutritionInfo: !state.showNutritionInfo
        }
    }

    if(action.type === SET_TO_CONE) {
        return {
            ...state,
            isCone: true
        }
    }

    if(action.type === SET_TO_CUP) {
        return {
            ...state,
            isCone: false
        }
    }

    if(action.type === RESET_STATE) {
        return {
            ...state,
            isCone: true,
            scoops: []
        }
    }

    return state;
}

export default reducer
