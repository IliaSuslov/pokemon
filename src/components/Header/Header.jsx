import { Grid } from "@mui/material";
import { Filter, PaginationComponent, Search } from "../index";
import { ColorFilter } from "../Filter/ColorFilter";

export function Header() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <Search />
      </Grid>
      <Grid item xs={8} md={4}>
        <Filter />
      </Grid>
      <Grid item xs={12} md={4}>
        <PaginationComponent />
      </Grid>
      <Grid item xs={12} md={12}>
        <ColorFilter />
      </Grid>
    </Grid>
  );
}
