import { useDispatch, useSelector } from "react-redux";
import type {
  AdvancedRootState,
  AdvancedAppDispatch,
} from "../stores/advancedStore";

export const useAdvancedAppDispatch = () => useDispatch<AdvancedAppDispatch>();
export const useAdvancedAppSelector = <TSelected>(
  selector: (state: AdvancedRootState) => TSelected
) => useSelector(selector);
