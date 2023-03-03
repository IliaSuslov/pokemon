import { Checkbox, Grid, FormGroup, FormControlLabel } from "@mui/material";
import { selectColorFilters } from "../../store/selects";
import { useDispatch, useSelector } from "react-redux";
import { setColorFilters } from "../../store/reducers/pokemonReducer";

export function ColorFilter() {
  const dispatch = useDispatch();
  const colorFilters = useSelector(selectColorFilters);

  const handleChange = (name) => {
    if (colorFilters.includes(name)) {
      const newArr = colorFilters.filter((v) => v !== name);
      dispatch(setColorFilters(newArr));
    } else {
      dispatch(setColorFilters([...colorFilters, name]));
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={3} md={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("grass")}
                    onChange={() => handleChange("grass")}
                  />
                }
                label="Grass"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("poison")}
                    onChange={() => handleChange("poison")}
                  />
                }
                label="Poison"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("dragon")}
                    onChange={() => handleChange("dragon")}
                  />
                }
                label="Dragon"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("fire")}
                    onChange={() => handleChange("fire")}
                  />
                }
                label="Fire"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("ghost")}
                    onChange={() => handleChange("ghost")}
                  />
                }
                label="Ghost"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("steel")}
                    onChange={() => handleChange("steel")}
                  />
                }
                label="Steel"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("electric")}
                    onChange={() => handleChange("electric")}
                  />
                }
                label="Electric"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("flying")}
                    onChange={() => handleChange("flying")}
                  />
                }
                label="Flying"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("water")}
                    onChange={() => handleChange("water")}
                  />
                }
                label="Water"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("bug")}
                    onChange={() => handleChange("bug")}
                  />
                }
                label="Bug"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("ground")}
                    onChange={() => handleChange("ground")}
                  />
                }
                label="Ground"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("fairy")}
                    onChange={() => handleChange("fairy")}
                  />
                }
                label="Fairy"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("fighting")}
                    onChange={() => handleChange("fighting")}
                  />
                }
                label="Fighting"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={colorFilters.includes("psychic")}
                    onChange={() => handleChange("psychic")}
                  />
                }
                label="Psychic"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
