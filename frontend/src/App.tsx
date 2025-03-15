import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobDisplayPages from "./components/Pages/JobDisplayPages";
import ScrollToTop from "./lib/utils";
import RedirectPage from "./components/Pages/RedirectPage";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<RedirectPage/>}></Route>
        <Route path="/job/:id" element={<JobDisplayPages />} />
      </Routes>
    </Router>
  );
}

export default App;
