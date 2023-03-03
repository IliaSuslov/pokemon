import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonReducer";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: pokemonReducer,
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    // enhancers: [monitorReducersEnhancer],
  });

  //   if (process.env.NODE_ENV !== "production" && module.hot) {
  //     module.hot.accept("./reducers", () => store.replaceReducer(pokemonReducer));
  //   }

  return store;
}
