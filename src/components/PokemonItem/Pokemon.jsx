import { useEffect, useMemo } from "react";
import { loadPokemon } from "../../store/thunks";
import { useDispatch, useSelector } from "react-redux";
import { PokemonItem } from "../index";
import { Grid } from "@mui/material";
import { selectColorFilters } from "../../store/selects";
import { Loader } from "../Loader/Loader";

export function Pokemon({ name }) {
  const dispatch = useDispatch();
  const detailedPokemons = useSelector((state) => state.detailedPokemons);

  useEffect(() => {
    name &&
      !detailedPokemons.find((v) => v.name === name) &&
      dispatch(loadPokemon(name));
  }, []);

  const pokemon = useMemo(
    () => detailedPokemons.find((pokemon) => pokemon.name === name),
    [detailedPokemons]
  );

  const colorFilters = useSelector(selectColorFilters);

  const show = useMemo(
    () => pokemon?.types.map((v) => colorFilters?.includes(v.type.name)),
    [colorFilters]
  );

  if (!pokemon) {
    return (
      <Grid item md={3} sm={4} xs={12}>
        <Loader />
      </Grid>
    );
  }
  return (
    <>
      {colorFilters?.length && show?.includes(true) && pokemon ? (
        <Grid item md={3} sm={4} xs={12}>
          <PokemonItem pokemon={pokemon} />
        </Grid>
      ) : pokemon && !colorFilters.length ? (
        <Grid item md={3} sm={4} xs={12}>
          <PokemonItem pokemon={pokemon} />
        </Grid>
      ) : null}
    </>
  );
}
