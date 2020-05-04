import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";

import FormContext from "./FormContext";
import SupportingText from "./SupportingText";
import Instructions from "./Instructions";

import "./styles.css";

export default function App() {
  const [hasFocus, setHasFocus] = useState();
  return (
    <MuiThemeProvider>
      <div className="app">
        <Instructions />
        <Box px={2}>
          <form noValidate autoComplete="off">
            <FormContext.Provider value={{ hasFocus, setHasFocus }}>
              <TextField
                id="standard-basic"
                label="Last name"
                fullWidth={true}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
              />
              <SupportingText>We keep this information private</SupportingText>
            </FormContext.Provider>
          </form>
        </Box>
      </div>
    </MuiThemeProvider>
  );
}
