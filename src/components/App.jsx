import { Paper, Stack } from "@mui/material";
import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

function App({ step = 1 }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    const sum = good + bad + neutral;
    return sum;
  }

  function countPositiveFeedbackPercentage() {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  }

  return (
    <Paper
      sx={{
        padding: "10px",
        width: "370px",
      }}
    >
      <Stack direction="column" gap="15px">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onGoodClick={() => setGood(good + step)}
            onNeutralClick={() => setNeutral(neutral + step)}
            onBadClick={() => setBad(bad + step)}
          />
        </Section>

        <Section title={Statistics}>
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Stack>
    </Paper>
  );
}

export default App;
