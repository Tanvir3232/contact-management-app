import { createBrowserRouter } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import Main from "../layouts/Main";
import ChartsAndMapsPage from "../pages/ChartsAndMapsPage";
import AddContact from "../pages/AddContact";

const router = createBrowserRouter([
    {
      path: "",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<ContactsPage></ContactsPage>
        },
        {
            path:'/charts',
            element:<ChartsAndMapsPage></ChartsAndMapsPage>
        },
        {
            path:'/add-contact',
            element:<AddContact></AddContact>
        }
      ]
    },
  ]);
export default router;