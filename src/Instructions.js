import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: '#fff7e2',
  },
});

const Instructions = () => {
  const classes = useStyles()
  return (
    <Box px={2}>
      <Box py={4}>
        <Card className={classes.root} raised={true}>
          <CardContent>
            <Typography align="left">
              In this example, the SupportingText component renders its children
              when the input field has focus.
            </Typography>
            <h4>Part One</h4>
            <Typography>
                Update the SupportingText component so its content becomes visible
                when the input field receives focus, and remains visible after the
                input field loses focus.
            </Typography>
            <h4>Part Two</h4>
            <Typography>
              Update the SupportingText component so that its content fades into
              view.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
};

export default Instructions;
