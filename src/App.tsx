// import React, { useState } from "react";
// import QRCode from "qrcode.react";

// const App = () => {
//   const [inputText, setInputText] = useState("");
//   const [showQR, setShowQR] = useState(false);

//   const handleGenerateQR = () => {
//     setShowQR(true);
//   };

//   const generatePhonePeLink = (text: string) => {
//     return `upi://pay?pa=${text}`;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         placeholder="Enter UPI ID"
//       />
//       <button onClick={handleGenerateQR}>Generate QR Code</button>
//       {showQR && inputText && <QRCode value={generatePhonePeLink(inputText)} />}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Selectele from "./component/Selectele";
import { Box } from "@mui/material";
import Updatestate from "./component/Updatestate";
import Willunmounttestfun from "./component/Willunmounttestfun";
import WillUnmountTestClass from "./component/WillUnmountTestClass";

const App = () => {
  return (
    <Box>
      {/* <Selectele /> */}

      {/* <Updatestate /> */}
      {/* <Willunmounttestfun /> */}
      <WillUnmountTestClass />
    </Box>
  );
};

export default App;
