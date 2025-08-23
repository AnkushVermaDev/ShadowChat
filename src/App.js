import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './frontend/Components/Login.jsx';
import CreateAccount from "./frontend/Components/CreateAccount.jsx";
import Home from "./frontend/Components/Home.jsx";
import UserHome from "./frontend/Components/UserHome.jsx";
import ArchievedChat from "./frontend/Components/ArchievedChat.jsx";
import SecretChat from "./frontend/Components/SecretChat.jsx";
import Header from "./frontend/Components/Header.jsx";
import Settings from "./frontend/Components/Settings.jsx";
import AddNewChat from  "./frontend/Components/AddNewChat.jsx";
import Chat from "./frontend/Components/Chat.jsx";
import UserSearched from "./frontend/Components/UserSearched.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Only Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<UserHome />} />
          <Route path="/Archived" element={<ArchievedChat />} />
          <Route path="/SecretChat" element={<SecretChat />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/NewChat" element={<AddNewChat />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/search" element={<UserSearched />} />







          

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<CreateAccount />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
