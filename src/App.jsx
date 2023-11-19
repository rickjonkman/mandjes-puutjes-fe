
import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/other-pages/other-landing-page/LandingPage.jsx";
import Login from "./pages/other-pages/other-login/Login.jsx";
import Register from "./pages/other-pages/other-register/Register.jsx";
import About from "./pages/other-pages/other-about/About.jsx";
import PersonalMain from "./pages/personal/personal-main/PersonalMain.jsx";
import Profile from "./pages/personal/personal-profile/Profile.jsx";
import Messages from "./pages/personal/personal-messages/Messages.jsx";
import GroceriesMain from "./pages/groceries-pages/groceries-main/GroceriesMain.jsx";
import GroceryLists from "./pages/groceries-pages/groceries-lists/GroceryLists.jsx";
import ShoppingMode from "./pages/groceries-pages/groceries-shopping-mode/ShoppingMode.jsx";
import RecipesMain from "./pages/recipes-pages/recipes-main/RecipesMain.jsx";
import RecipesAll from "./pages/recipes-pages/recipes-all/RecipesAll.jsx";
import RecipesFavorites from "./pages/recipes-pages/recipes-favorites/RecipesFavorites.jsx";
import RecipesNew from "./pages/recipes-pages/recipes-new/RecipesNew.jsx";
import CalendarMain from "./pages/calendar-pages/calendar-main/CalendarMain.jsx";
import CalendarWeekly from "./pages/calendar-pages/calendar-weekly/CalendarWeekly.jsx";
import CalendarMonthly from "./pages/calendar-pages/calendar-monthly/CalendarMonthly.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route path="/personal" element={<PersonalMain />}>
          <Route path="/personal/profile" element={<Profile />} />
          <Route path="/personal/messages" element={<Messages />} />
        </Route>

        <Route path="/groceries" element={<GroceriesMain />}>
          <Route path="/groceries/lists" element={<GroceryLists />} />
          <Route path="/groceries/shopping-mode" element={<ShoppingMode />} />
        </Route>

        <Route path="/recipes" element={<RecipesMain />}>
          <Route path="/recipes/all" element={<RecipesAll />} />
          <Route path="/recipes/favorites" element={<RecipesFavorites />} />
          <Route path="/recipes/new" element={<RecipesNew />} />
        </Route>

        <Route path="/calendar" element={<CalendarMain />}>
          <Route path="/calendar/weekly" element={<CalendarWeekly />} />
          <Route path="/calendar/monthly" element={CalendarMonthly />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
