import { Autocomplete, TextField, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemonsFilter, loadSearchedPokemon } from "../../store/thunks";
import { clearFilteredPokemon } from "../../store/reducers/pokemonReducer";
import { Spacer } from "../index";
import { selectDataForSearch } from "../../store/selects";

export function Search() {
  const dispatch = useDispatch();
  const dataForSearch = useSelector(selectDataForSearch);
  useEffect(() => {
    !dataForSearch.length && dispatch(loadPokemonsFilter());
  }, []);

  const onClose = () => {
    dispatch(clearFilteredPokemon());
  };

  const handleChange = (name) => {
    if (name) {
      dispatch(loadSearchedPokemon(name));
    } else {
      onClose();
    }
  };

  return (
    <>
      <Autocomplete
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.defaultMuiPrevented = true;
            handleChange(event.target.value);
          }
        }}
        id="combo-box-demo"
        options={dataForSearch}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Введите имя покемона + Enter"
            variant="outlined"
          />
        )}
      />
      <Spacer />
      <Button variant="contained" onClick={onClose}>
        Reset Search
      </Button>
    </>
  );
}
