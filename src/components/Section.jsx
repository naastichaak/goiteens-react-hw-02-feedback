import { Typography } from "@mui/material";

function Section({ title, children }) {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "700",
        }}
      >
        {title}
      </Typography>
      <div>{children}</div>
    </div>
  );
}

export default Section;
