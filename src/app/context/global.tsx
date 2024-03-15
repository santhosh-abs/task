import { createContext, useMemo, useState } from "react";
import React from 'react';

export const GlobalContext = createContext(null);
export function GlobalProvider({ children }: any) {
  const [toasts, setToasts] = useState("toast");
  const memoizedValue = useMemo(
    () => ({
      toasts,
    }),
    [toasts]
  );
  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  );
}
