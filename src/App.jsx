import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        
        <Route element={<Navbar />}>

        <Route path="/users/list?" element={<UserList />} />
        
        <Route path="/users/:id/:name?" element={<UserDetails />} />

        

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        </Route>

        <Route path="/*" element={<PageNotFound />} />

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
