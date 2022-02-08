import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";

const ListPokemon = memo(({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <Fade in={true}>
      <Card
        sx={{ boxShadow: 3 }}
        style={{
          display: "flex",
          width: "auto",
          height: "280px",
          justifyContent: "space-between",
          margin: "5px",
          backgroundColor: "rgba(192,192,192,0.2)",
        }}
      >
        <Box
          style={{
            width: "auto",
            margin: "10px",
          }}
        >
          {/** Name of the pokemon and more here */}
          <CardContent>
            <Typography
              variant="h6"
              style={{
                textTransform: "uppercase",
                fontWeight: "lighter",
              }}
            >
              {pokemon.name}{" "}
            </Typography>

            <Typography variant="subtitle2">#{pokemon.id}</Typography>

            <Typography variant="subtitle2">Type(s):</Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              {pokemon.types.map((type) => (
                <Typography
                  key={type.slot}
                  variant="subtitle2"
                  style={{
                    margin: "0px 3px",
                  }}
                >
                  {type.type.name}
                </Typography>
              ))}
            </Box>

            <Typography
              variant="subtitle2"
              style={{
                textTransform: "capitalize",
                fontWeight: "lighter",
              }}
            >
              {pokemon.envolves_from
                ? `Envolves From: ${pokemon.envolves_from.name}`
                : ""}
            </Typography>

            <Button
              variant="outlined"
              size="small"
              style={{ fontSize: "15px", marginTop: "10px" }}
              onClick={() => navigate(`/${pokemon.id}`)}
            >
              More
            </Button>
          </CardContent>
        </Box>

        {/** The image here */}
        <CardMedia
          style={{
            width: "200px",
            objectFit: "contain",
          }}
          component="img"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt="img-pokemon"
        />
      </Card>
    </Fade>
  );
});

export default ListPokemon;
