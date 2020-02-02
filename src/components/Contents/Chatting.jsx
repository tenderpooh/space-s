import React from "react";
import { Box } from "@material-ui/core";

export default function Chatting() {
  return (
    <Box display="flex" flexDirection="column" style={{ height: "70vh" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        p={2}
        border={1}
        flexGrow={1}
      >
        <Box>송 : 안녕하세요?</Box>
        <Box alignSelf="flex-end">류 : 네 안녕하세요?</Box>
        <Box>송 : 저는 송용우 입니다.</Box>
        <Box alignSelf="flex-end">
          류 : 반가워요 송용우님. 저는 류현욱 입니다.
        </Box>
      </Box>
      <Box border={1} height="10%">
        writing field
      </Box>
    </Box>
  );
}
