import { useDispatch, useSelector } from "react-redux";
import type { BasicRootState, BasicAppDispatch } from "../stores/basicStore";

// Sử dụng xuyên suốt ứng dụng thay vì useDispatch và useSelector thông thường
export const useBasicAppDispatch = () => useDispatch<BasicAppDispatch>();
export const useBasicAppSelector = <TSelected>(
  selector: (state: BasicRootState) => TSelected
) => useSelector(selector);
