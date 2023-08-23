import { Link } from "react-router-dom";
import Button from "../components/Button";
import NotFoundBox from "../components/NotFoundBox";

const ContactsPage = () => {
    return (
        <div>
            <div className="text-center my-5">
                <Link to='/add-contact'> <Button value='Create Contact' style="btn-success"></Button></Link>
                <NotFoundBox></NotFoundBox>
            </div>
        </div>
    );
};

export default ContactsPage;