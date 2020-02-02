import React, { useReducer, useState } from "react";
import { mainReducer, mainInitialState } from "./reducers/mainReducer";
import { MainProvider } from "./providers/MainProvider";
import { VKProvider } from "./providers/VkProvider";
import VK from "react-vk";
import Home from "./components/Home";

function App() {
  const state = useReducer(mainReducer, mainInitialState);
  const [vk, setVK] = useState(null);

  return (
    <div className="App">
      <VK apiId={7301447} onApiAvailable={setVK} onlyWidgets={false}>
        <VKProvider value={vk}>
          <MainProvider value={state}>
            <Home />
          </MainProvider>
        </VKProvider>
      </VK>
    </div>
  );
}

export default App;
