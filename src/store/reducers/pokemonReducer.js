import { createSlice } from "@reduxjs/toolkit";
import {
  loadPokemon,
  loadPokemons,
  loadPokemonsFilter,
  loadSearchedPokemon,
} from "../thunks";

const initialState = {
  pokemons: [],
  detailedPokemons: [],
  dataForSearch: [],
  filteredPokemons: [],
  selectedPokemon: {},
  loading: false,
  error: null,
  limit: 20,
  count: 0,
  page: 1,
  colorFilters: [],
};

const pokemonReducer = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    putPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    clearFilteredPokemon: (state, action) => {
      state.filteredPokemons = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    clearPokemons: (state, action) => {
      state.pokemons = [];
    },
    setGlobalPage: (state, action) => {
      state.page = action.payload;
    },
    clearDetailedPokemons: (state, action) => {
      state.detailedPokemons = [];
    },
    setColorFilters: (state, action) => {
      state.colorFilters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPokemonsFilter.fulfilled, (state, action) => {
      state.dataForSearch = action.payload.results;
    });
    builder.addCase(loadPokemonsFilter.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loadPokemonsFilter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loadPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload.results;
      state.loading = false;
      state.error = null;
      state.limit = state.limit;
      state.count = action.payload.count;
    });
    builder.addCase(loadPokemons.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loadPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loadPokemon.fulfilled, (state, action) => {
      state.detailedPokemons = [...state.detailedPokemons, action.payload];
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loadPokemon.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loadPokemon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loadSearchedPokemon.fulfilled, (state, action) => {
      state.filteredPokemons = [action.payload];
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loadSearchedPokemon.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loadSearchedPokemon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  putPokemon,
  clearFilteredPokemon,
  clearPokemons,
  clearDetailedPokemons,
  setGlobalPage,
  setLimit,
  setColorFilters,
} = pokemonReducer.actions;

export default pokemonReducer.reducer;
