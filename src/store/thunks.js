import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://pokeapi.co/api/v2";
const headers = {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const loadPokemonsFilter = createAsyncThunk(
  "pokemons/get filter",
  async () => {
    let res = [];
    const getUrl = () => {
      let additionalURL = `/pokemon?limit=1500&offset=0`;
      return baseUrl + additionalURL;
    };
    try {
      const response = await fetch(getUrl(), headers);
      res = response.json();
    } catch (error) {
      console.log({ error });
    }
    return res;
  }
);

export const loadPokemons = createAsyncThunk("pokemons/get", async (props) => {
  let res = [];
  const getUrl = () => {
    let additionalURL = props?.limit
      ? `/pokemon?limit=${props?.limit}&offset=${props?.offset}`
      : `/pokemon`;

    return baseUrl + additionalURL;
  };
  try {
    const response = await fetch(getUrl(), headers);
    res = response.json();
  } catch (error) {
    console.log({ error });
  }
  return res;
});
export const loadPokemon = createAsyncThunk("pokemon/get", async (name) => {
  let res = [];
  try {
    const response = await fetch(baseUrl + `/pokemon/${name}`, headers);
    res = response.json();
  } catch (error) {
    console.log({ error });
  }
  return res;
});

export const loadSearchedPokemon = createAsyncThunk(
  "pokemon/search",
  async (name) => {
    let res = [];
    try {
      const response = await fetch(baseUrl + `/pokemon/${name}`, headers);
      res = response.json();
    } catch (error) {
      console.log({ error });
    }
    return res;
  }
);
