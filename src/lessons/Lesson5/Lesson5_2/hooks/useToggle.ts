import { useCallback, useState } from "react";

//カスタマイズフックは無条件でmemo化してもいい
export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  //更新用の関数
  const toggle = useCallback(() => {
    setState((state) => !state);
  },[]);

  return [state, toggle];
};
