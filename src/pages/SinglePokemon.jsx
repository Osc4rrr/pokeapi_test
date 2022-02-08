import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AbilitiesList from "../components/AbilitiesList";
import MovesList from "../components/MovesList";
import { useNavigate } from "react-router-dom";
import TypesList from "../components/TypesList";
import { Box } from "@mui/system";

const SinglePokemon = memo(() => {
  const { id } = useParams();
  const [pokemondata, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getSinglePokemon = async () => {
      const respuesta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonData(respuesta.data);

      setLoading(false);
    };
    getSinglePokemon();
  }, []);

  const {
    moves,
    sprites,
    abilities,
    types,
    name,
    base_experience,
    weight,
    height,
  } = pokemondata;
  let navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Typography
          variant="h5"
          style={{ textAlign: "center", margin: "200px 0px" }}
        >
          Loading...
        </Typography>
      ) : (
        <Fade in={true}>
          <Container fixed>
            <Button
              style={{ margin: "20px" }}
              variant="outlined"
              onClick={() => navigate("/")}
            >
              Back To List
            </Button>
            <Card
              style={{
                margin: "20px",
                backgroundColor: "rgba(192,192,192,0.2)",
              }}
              sx={{ boxShadow: 3 }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  style={{
                    textTransform: "uppercase",
                    textAlign: "center",
                    margin: "25px 0px",
                  }}
                >
                  {name}
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: "300px", md: "auto", lg: "auto" },
                      }}
                      style={{
                        objectFit: "contain",
                        margin: "auto",
                      }}
                      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      alt="img-pokemon"
                    />
                  </Grid>

                  {/** MOVES */}

                  <Grid item xs={12} sm={12} lg={6}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textAlign: "center",
                        margin: "10px 0px",
                        fontWeight: "lighter",
                      }}
                    >
                      <Chip label="MOVES" color="warning" variant="outlined" />
                    </Typography>

                    <Box
                      component="div"
                      whiteSpace="normal"
                      style={{
                        padding: "10px",
                        overflowWrap: "break-word",
                      }}
                    >
                      {moves?.map((move) => (
                        <MovesList key={move.move.url} move={move.move} />
                      ))}
                    </Box>
                  </Grid>
                </Grid>

                <Divider style={{ width: "100%", margin: "50px 0px" }} />

                {/** ORDER - EXP - WEIGHT - HEIGHT */}

                <Grid
                  container
                  spacing={0}
                  style={{ textAlign: "center", margin: "20px 0px" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontStyle: "italic",
                        textDecoration: "underline",
                      }}
                    >
                      General Information
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography variant="subtitle2">{`#${id}`}</Typography>

                    <Chip label="ID" color="warning" />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography variant="subtitle2">
                      {base_experience}
                    </Typography>

                    <Chip label="EXP" color="primary" />
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sm={6}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography variant="subtitle2">
                      {`${weight / 10} kg`}
                    </Typography>

                    <Chip label="WEIGHT" color="success" />
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sm={6}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography variant="subtitle2">
                      {`${height / 10} m`}
                    </Typography>

                    <Chip label="HEIGHT" color="default" />
                  </Grid>
                </Grid>

                <Divider style={{ width: "100%", margin: "50px 0px" }} />

                {/** SPRITES */}
                <Grid
                  container
                  style={{ textAlign: "center", margin: "20px 0px" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    style={{ margin: "15px 0px" }}
                  >
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
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
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

                  <Grid
                    item
                    xs={6}
                    sm={3}
                    lg={3}
                    style={{ margin: "15px 0px" }}
                  >
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
                </Grid>

                <Divider style={{ width: "100%", margin: "50px 0px" }} />

                {/** Abilities */}

                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        textAlign: "center",
                        fontStyle: "italic",
                        textDecoration: "underline",
                      }}
                    >
                      Abilities
                    </Typography>

                    {abilities?.map((ability) => (
                      <AbilitiesList
                        ability={ability.ability}
                        key={ability.ability.name}
                      />
                    ))}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    style={{ margin: "15px 0px" }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        textAlign: "center",
                        fontStyle: "italic",
                        textDecoration: "underline",
                      }}
                    >
                      Type(s)
                    </Typography>

                    {types?.map((type) => (
                      <TypesList key={type.type.name} type={type} />
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Fade>
      )}
    </>
  );
});

export default SinglePokemon;
