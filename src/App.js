import "./App.css";
import { Header } from "./components/Header/header.jsx";
import { Sidebar } from "./components/Sidebar/sidebar.jsx";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { NewsContainer } from "./components/News/NewsContainer.jsx";
import MyProfileContainer from "./components/Myprofile/myProfileContainer.jsx";
import MessagesContainer from "./components/Messages/MessagesContainer.jsx";
import { UsersContainer } from "./components/Users/UsersContainer.jsx";
import { HeaderContainer } from "./components/Header/HeaderContainer.jsx";
import { Login } from "./components/Login/Login.jsx";

function App(props) {
  // debugger;
  const location = useLocation();

  const allowedPaths = ["/", "/posts", "/message", "/users"];

  // Проверяем, соответствует ли location.pathname шаблону
  const isProfilePage = matchPath("/profile/:userId", location.pathname);

  const hideLayout = !(
    allowedPaths.includes(location.pathname) || isProfilePage
  );
  return (
    <>
      <div class="main">
        {!hideLayout && <Sidebar />}
        {!hideLayout && <HeaderContainer />}
      </div>
      <Routes>
        <Route path="/posts" element={<NewsContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MyProfileContainer />} />
        <Route path="/profile/:userId" element={<MyProfileContainer />} />
        <Route path="/message" element={<MessagesContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
