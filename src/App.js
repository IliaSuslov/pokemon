import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPokemons,
  selectFilteredPokemons,
  selectLimit,
  selectPage,
} from "./store/selects";
import { loadPokemons } from "./store/thunks";
import { Grid } from "@mui/material";
import { Header, PokemonItem, Pokemon, Spacer } from "./components/index";
import { clearPokemons } from "./store/reducers/pokemonReducer";

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectAllPokemons);
  const filteredPokemons = useSelector(selectFilteredPokemons);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(clearPokemons());
    const offset = page > 1 ? page * limit : 0;
    dispatch(loadPokemons({ limit, offset }));
  }, [limit]);
  return (
    <>
      <Header />
      <Spacer />
      {!filteredPokemons?.length ? (
        <Grid container spacing={2}>
          {pokemons.map(({ name }, i) => (
            <Pokemon name={name} key={i} />
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={3} sm={4} xs={12}>
            <PokemonItem pokemon={filteredPokemons[0]} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default App;
