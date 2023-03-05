import { useState } from "react";
import {
  Button,
  Card,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";
import { ColoredRound, Loader, MyModal } from "../index";
import { useDispatch } from "react-redux";
import { putPokemon } from "../../store/reducers/pokemonReducer";

export function PokemonItem({ pokemon }) {
  const dispatch = useDispatch();
  const [isClosed, openModal] = useState(false);
  const handleOpenModal = () => {
    openModal(!isClosed);
  };
  const handleClick = () => {
    dispatch(putPokemon(pokemon));
    handleOpenModal();
  };
  const handleClose = () => {
    dispatch(putPokemon({}));
    handleOpenModal();
  };

  const { name, sprites, types, stats } = pokemon;
  return (
    <>
      <Card variant="outlined" sx={{ backgroundColor: "lightgrey" }}>
        <CardContent>
          <Typography variant="h5">{name?.toUpperCase()}</Typography>
          <img src={sprites?.front_default} alt="pokemon image" />
          <div className="display_flex">
            <Typography>TYPE:</Typography>
            {types?.map(({ type }, i) => (
              <div className="types_con" key={i}>
                <ColoredRound type={type.name} key={type.name} />
                <Typography key={i}>{type.name},</Typography>
              </div>
            ))}
          </div>
          {stats.map(({ stat, base_stat }, i) => (
            <Typography key={i}>
              {stat.name.toUpperCase()}: {base_stat}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleClick}>
            Open pokemon
          </Button>
        </CardActions>
      </Card>
      <MyModal isClosed={isClosed} handleClose={handleClose} />
    </>
  );
}
