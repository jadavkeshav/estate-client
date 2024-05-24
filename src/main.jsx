import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from '@mantine/core';
import Modal from 'react-modal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MantineProvider >
      <App />
      </MantineProvider>
    </LocalizationProvider>
  </React.StrictMode>

);
