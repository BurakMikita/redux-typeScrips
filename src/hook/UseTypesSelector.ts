import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reduser/reduser";




export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector