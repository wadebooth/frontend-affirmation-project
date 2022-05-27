import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Menu from "./components/Menu.jsx";
import CommentList from "./components/CommentList.jsx";
import CommentPage from "./components/CommentPage.jsx";
import AddComment from "./components/AddComment.jsx";
import "./App.css";

const { Header, Content } = Layout;

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout className="layout">
          <Header>
            <Menu />
          </Header>
          <Content>
            <Routes>
              <Route path="/comments/:commentID" element={<CommentPage />} />
              <Route path="/add" element={<AddComment />} />
              <Route path="/" element={<CommentList />} />
            </Routes>
          </Content>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
