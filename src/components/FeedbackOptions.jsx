import { Button, Stack } from "@mui/material";

function FeedbackOptions({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <Stack gap="5px" direction="row">
      <Button variant="contained" color="success" onClick={onGoodClick}>
        Good
      </Button>
      <Button variant="contained" color="warning" onClick={onNeutralClick}>
        Neutral
      </Button>
      <Button variant="contained" color="error" onClick={onBadClick}>
        Bad
      </Button>
    </Stack>
  );
}

export default FeedbackOptions;
