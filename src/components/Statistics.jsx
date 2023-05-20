import { Typography, Stack } from "@mui/material";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <Typography variant="h6" component="h2">
        Statistics
      </Typography>
      <Stack direction="column" gap="5px">
        <Typography variant="body1">Good: {good}</Typography>
        <Typography variant="body1">Neutral: {neutral}</Typography>
        <Typography variant="body1">Bad: {bad}</Typography>
        <Typography variant="body1">Total: {total}</Typography>
        <Typography variant="body1">
          Positive feedback: {positivePercentage}%
        </Typography>
      </Stack>
    </div>
  );
}

export default Statistics;
