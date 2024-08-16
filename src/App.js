import "./styles.css";
import Today from "./components/Routes/Today";
import Tomorrow from "./components/Routes/Tomorrow";
import ThreeDayAhead from "./components/Routes/ThreeDayAhead";
import FourDayAhead from "./components/Routes/FourDayAhead";
import FiveDayAhead from "./components/Routes/FiveDayAhead";
import Layout from "./components/Routes/Layout";
import NotFound from "./components/Sub-component/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Today />} />
          <Route path="tomorrow" element={<Tomorrow />} />
          <Route path="ThreeDayAhead" element={<ThreeDayAhead />} />
          <Route path="FourDayAhead" element={<FourDayAhead />} />
          <Route path="FiveDayAhead" element={<FiveDayAhead />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
