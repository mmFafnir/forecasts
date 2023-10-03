import { useDispatch } from "react-redux";
import { AppDispatch } from "../GlobalRedux/store";

export const useTypeDispatch = () => useDispatch<AppDispatch>();