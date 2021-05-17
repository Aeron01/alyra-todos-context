import { createContext, useContext } from "react";
//import { act } from "react-dom/test-utils";

export const TodosDispatchContext = createContext()

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext)
  if (context === undefined) {
    throw new Error(`useTodosDispatch within TodosDispatchContext.Provider`)
  }
  return context
}