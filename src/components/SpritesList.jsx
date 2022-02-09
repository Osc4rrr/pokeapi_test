import { CardMedia, Grid, Typography } from "@mui/material";

const SpritesList = ({ sprites }) => {
  return (
    <Grid
      container={true}
      item
      xs={12}
      sm={12}
      lg={6}
      style={{
        margin: "15px 0px",
      }}
    >
      <Grid item={true} xs={12} sm={12} lg={12}>
        <Typography
          variant="subtitle1"
          style={{
            fontStyle: "italic",
            textDecoration: "underline",
          }}
        >
          Sprites
        </Typography>
      </Grid>

      <Grid item xs={6} sm={3} lg={6} style={{ margin: "15px 0px" }}>
        <CardMedia
          component="img"
          style={{
            width: "80px",
            objectFit: "contain",
            margin: "auto",
            backgroundColor: "#fff",
            borderRadius: "50px",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
          image={sprites?.front_default}
          alt="img-pokemon"
        />
      </Grid>

      <Grid item xs={6} sm={3} lg={6} style={{ margin: "15px 0px" }}>
        <CardMedia
          component="img"
          style={{
            width: "80px",
            objectFit: "contain",
            margin: "auto",
            backgroundColor: "#fff",
            borderRadius: "50px",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
          image={sprites?.back_default}
          alt="img-pokemon"
        />
      </Grid>

      <Grid item xs={6} sm={3} lg={6} style={{ margin: "15px 0px" }}>
        <CardMedia
          component="img"
          style={{
            width: "80px",
            objectFit: "contain",
            margin: "auto",
            backgroundColor: "#fff",
            borderRadius: "50px",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
          image={sprites?.front_shiny}
          alt="img-pokemon"
        />
      </Grid>

      <Grid item xs={6} sm={3} lg={6} style={{ margin: "15px 0px" }}>
        <CardMedia
          component="img"
          style={{
            width: "80px",
            objectFit: "contain",
            margin: "auto",
            backgroundColor: "#fff",
            borderRadius: "50px",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
          image={sprites?.back_shiny}
          alt="img-pokemon"
        />
      </Grid>
    </Grid>
  );
};

export default SpritesList;
