import React from "react";
import { Paper, Box } from "@material-ui/core";

export default function SimResult() {
  return (
    <Paper style={{ width: "100%", height: "100%" }}>
      <Box
        style={{ width: "100%", height: "100%" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        시뮬레이션 결과를 입력해주시기 바랍니다.
      </Box>
    </Paper>
  );
}
