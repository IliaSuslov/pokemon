import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { selectPokemon } from "../../store/selects";
import { useSelector } from "react-redux";
import { ColoredRound, Spacer } from "../index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export function MyModal({ isClosed, handleClose }) {
  const { height, weight, name, types, stats, sprites } =
    useSelector(selectPokemon);
  return (
    <Modal open={isClosed} onClose={handleClose}>
      <Box componet="div" sx={style}>
        <Typography variant="h5">{name?.toUpperCase()}</Typography>
        <img src={sprites?.front_default} alt="pokemon image" />
        <Typography>HEIGHT: {height}</Typography>
        <Typography>WIGHT: {weight}</Typography>
        <div className="display_flex">
          <Typography>TYPE:</Typography>
          {types?.map(({ type }, i) => (
            <div className="types_con" key={i}>
              <ColoredRound type={type.name} key={type.name} />
              <Typography key={i}>{type.name},</Typography>
            </div>
          ))}
        </div>
        {stats?.map(({ stat, base_stat }, i) => (
          <Typography key={i}>
            {stat.name.toUpperCase()}: {base_stat}
          </Typography>
        ))}
      </Box>
    </Modal>
  );
}
