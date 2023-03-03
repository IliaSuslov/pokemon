import { useState } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemons } from "../../store/thunks";
import {
  clearDetailedPokemons,
  clearPokemons,
  setGlobalPage,
} from "../../store/reducers/pokemonReducer";

export function PaginationComponent() {
  const { limit, count, filteredPokemons } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
    if (value > page) {
      dispatch(clearDetailedPokemons());
      dispatch(clearPokemons());
      dispatch(setGlobalPage(value));
      dispatch(loadPokemons({ limit, offset: limit * (value - 1) }));
    } else if (value < page) {
      dispatch(clearDetailedPokemons());
      dispatch(clearPokemons());
      dispatch(setGlobalPage(value));
      dispatch(loadPokemons({ limit, offset: limit * (value - 1) }));
    }
  };
  const isDisabled = filteredPokemons?.length > 0;
  return (
    <div>
      <Pagination
        page={page}
        onChange={handleChange}
        count={count && Math.round(count / limit)}
        variant="outlined"
        color="primary"
        siblingCount={0}
        boundaryCount={1}
        disabled={isDisabled}
      />
    </div>
  );
}
