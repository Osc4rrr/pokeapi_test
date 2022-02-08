import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const MovesList = ({ move }) => {
  return (
    <Typography
      variant="caption"
      style={{
        marginRight: "5px",
        letterSpacing: "1px",
        textAlign: "justify",
        fontSize: "12px",
        textTransform: "lowercase",
      }}
    >
      {move.name}
    </Typography>
  );
};

export default MovesList;
