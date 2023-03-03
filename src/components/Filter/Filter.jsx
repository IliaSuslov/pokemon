import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, ButtonGroup, Grid } from "@mui/material";
import { selectLimit } from "../../store/selects";
import { useState } from "react";
import { setLimit } from "../../store/reducers/pokemonReducer";

export function Filter() {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const [value, setValue] = useState(limit);

  const handleLimitChange = (value) => {
    setValue(value);
    dispatch(setLimit(value));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Limit: {value}</Typography>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => handleLimitChange(10)}
            variant="contained"
            color="primary"
          >
            10
          </Button>
          <Button
            onClick={() => handleLimitChange(20)}
            variant="contained"
            color="primary"
          >
            20
          </Button>
          <Button
            onClick={() => handleLimitChange(50)}
            variant="contained"
            color="primary"
          >
            50
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
