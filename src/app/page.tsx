import * as React from "react";
import DefaultPropsProvider from "@mui/material/DefaultPropsProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material-pigment-css/Container";
import Grid from "@mui/material-pigment-css/Grid";
import Stack from "@mui/material-pigment-css/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material-pigment-css";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const Title = styled("div")(({ theme }) => ({
  color: theme.vars.palette.text.primary,
  font: theme.vars.font.body1,
  fontSize: "1.125rem",
  lineHeight: 1.7,
}));

function BasicSimpleTreeView() {
  return (
    <div sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="grid" label="Data Grid">
          <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
          <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
          <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
        </TreeItem>
        <TreeItem itemId="pickers" label="Date and Time Pickers">
          <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
          <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
        </TreeItem>
        <TreeItem itemId="charts" label="Charts">
          <TreeItem itemId="charts-community" label="@mui/x-charts" />
        </TreeItem>
        <TreeItem itemId="tree-view" label="Tree View">
          <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
        </TreeItem>
      </SimpleTreeView>
    </div>
  );
}

export default function Home() {
  return (
    <main sx={{ minHeight: "100lvh", display: "grid", placeItems: "center" }}>
      <DefaultPropsProvider
        value={{
          MuiChip: {
            label: "Available in v6",
          },
        }}
      >
        <CssBaseline />
        <Container>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ pl: 4.5 }}>
              <Chip
                sx={(theme) => ({
                  mb: 2,
                  fontWeight: 600,
                  bgcolor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`,
                  color: "primary.dark",
                })}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 500,
                  fontSize: "clamp(3rem, 2.354rem + 2.7562vw, 5rem)",
                  textWrap: "balance",
                  letterSpacing: "-0.025em",
                }}
              >
                <span
                  sx={(theme) => ({
                    display: "block",
                    background: `linear-gradient(145deg, ${
                      (theme.vars || theme).palette.primary.light
                    } 5%, ${(theme.vars || theme).palette.primary.dark} 90%)`,
                    // `Webkit` has to come later
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  })}
                >
                  Material UI
                </span>
                Pigment CSS
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <BasicSimpleTreeView />
            </Grid>
          </Grid>
        </Container>
      </DefaultPropsProvider>
    </main>
  );
}
