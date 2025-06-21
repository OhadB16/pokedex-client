import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Button,
  useTheme,
  CircularProgress,
} from "@mui/material";
import type { Pokemon } from "../../types/types";
import {
  LABEL_CAPTURE,
  LABEL_CAPTURED,
  LABEL_CAPTURING,
  POKEMON_STATS,
} from "../../constants/pokemon";

interface PokemonProps {
  pokemon: Pokemon;
  onCapture: (name: string) => void;
  isCapturing?: boolean;
}

const PokemonCard = ({
  pokemon,
  onCapture,
  isCapturing = false,
}: PokemonProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { name, number, image_url: imageURL, type, captured } = pokemon;
  const buttonLabel = captured
    ? LABEL_CAPTURED
    : isCapturing
    ? LABEL_CAPTURING
    : LABEL_CAPTURE;

  return (
    <Card
      sx={{
        borderRadius: 3,
        textAlign: "center",
        backgroundColor: isDark ? "#1c1c1c" : "#fff",
        color: isDark ? "#f5f5f5" : "inherit",
      }}
    >
      <CardContent>
        <Typography variant="caption" color="textSecondary">
          #{String(number).padStart(3, "0")}
        </Typography>

        {imageURL && (
          <Box my={2} display="flex" justifyContent="center">
            <img
              src={imageURL}
              alt={name}
              height={80}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/fallback.png";
              }}
            />
          </Box>
        )}

        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>

        <Box display="flex" justifyContent="center" gap={1} my={1}>
          {type?.map((t) => (
            <Chip
              key={t}
              label={t}
              sx={{
                textTransform: "capitalize",
                bgcolor:
                  t === "Fire"
                    ? "red"
                    : t === "Water"
                    ? "blue"
                    : t === "Grass"
                    ? "green"
                    : "grey",
                color: "#fff",
              }}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="space-around" mt={1}>
          {POKEMON_STATS.map(({ key, label }) => (
            <Typography key={key} variant="caption">
              {label}: {pokemon[key] ?? "-"}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color={captured ? "success" : "error"}
          onClick={() => onCapture(name)}
          disabled={isCapturing}
          startIcon={
            isCapturing ? <CircularProgress color="inherit" size={16} /> : null
          }
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
