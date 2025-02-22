import "./App.css";
import { Header } from "./components/Header/header.jsx";
import { Sidebar } from "./components/Sidebar/sidebar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { NewsContainer } from "./components/News/NewsContainer.jsx";
import { MyProfileContainer } from "./components/Myprofile/myProfileContainer.jsx";
import { MessagesContainer } from "./components/Messages/MessagesContainer.jsx";
import { UsersContainer } from "./components/Users/UsersContainer.jsx";
function App(props) {
  const location = useLocation();
  const hideLayout = !["/", "/posts", "/message", "/users"].includes(
    location.pathname
  );
  // debugger;
  return (
    <>
      <div class="main">
        {!hideLayout && <Sidebar />}
        {!hideLayout && <Header />}
      </div>
      <Routes>
        <Route path="/posts" element={<NewsContainer />} />
        <Route path="/" element={<MyProfileContainer />} />
        <Route path="/message" element={<MessagesContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
