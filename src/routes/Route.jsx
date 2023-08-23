import { createBrowserRouter } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactsPage></ContactsPage>,
    },
  ]);
export default router;