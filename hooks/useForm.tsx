import { useContext } from "react";
import FormContext from "@/context/FormContext";

const useFormHook = () => useContext(FormContext);

export default useFormHook;
