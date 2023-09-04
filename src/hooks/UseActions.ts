import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import Actions from '../Reducers/ActionCreators/'

export const UseActions =() => {
    const dispatch = useDispatch();
    return bindActionCreators(Actions, dispatch);
}