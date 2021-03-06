import {Route, Switch,Redirect } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import MarketPage from "./pages/marketPage/MarketPage";
import BranchPage from "./pages/branchPage/BranchPage";
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";
import ReservePage from "./pages/reservePage/ReservePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import EventPage from "./pages/eventPage/EventPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import PracticePage from "./pages/pracicePage/PracticePage";

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/market" component={MarketPage} />
          <Route exact path="/event" component={EventPage} />
          <Route exact path="/practice" component={PracticePage} />
          <Route exact path="/branch/:id" component={BranchPage} />
          <Route exact path="/movie/reserve/" component={ReservePage} />
          <Route exact path="/movie/:id" component={MovieDetailPage} />
          <Route exact path="/movie/reserve/:id" component={ReservePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
