import logo from "./logo.svg";
import Navigation from "./components/navigation/Navigation";
import UserInfo from "./components/userInfo/UserInfo";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <>
      <Navigation />;
      <UserInfo />
      <Gallery />
    </>
  );
}

export default App;
