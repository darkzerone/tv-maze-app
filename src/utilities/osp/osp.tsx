import React, { createContext, useEffect, useState } from "react";

const OnlineStatusContext = createContext(true);

type OnlineStatusProviderProps = {
  children: React.ReactNode;
};

const OnlineStatusProvider = ({ children }: OnlineStatusProviderProps) => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export default OnlineStatusContext;
export { OnlineStatusProvider };
