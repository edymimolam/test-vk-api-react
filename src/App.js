import React, { useReducer, useState } from "react";
import { userReducer, userInitialState } from "./reducers/userReducer";
import { UserProvider } from "./providers/UserProvider";
import { VKProvider } from "./providers/VkProvider";
import VK from "react-vk";
import "./App.css";
import Home from "./components/Home";

function App() {
  const state = useReducer(userReducer, userInitialState);
  const [vk, setVK] = useState(null);

  return (
    <div className="App">
      <VK apiId={7301447} onApiAvailable={setVK} onlyWidgets={false}>
        <VKProvider value={vk}>
          <UserProvider value={state}>
            <Home />
          </UserProvider>
        </VKProvider>
      </VK>
    </div>
  );
}

export default App;
