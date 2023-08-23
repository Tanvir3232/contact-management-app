import { Link } from "react-router-dom";
import Button from "./Button";

const ContactCard = ({contact}) => {
    const {firstName,lastName,status} = contact;
    return (
        <div className="shadow-lg shadow-gray-300 p-5 rounded-xl">
            <h3><span className="font-bold">Name:</span> {firstName} {lastName}</h3>
            <h4>Status: {status}</h4>
            <Link><Button value="Delete" style=" my-2 mr-2 btn-error"></Button></Link>
            <Button value="Edit" style="btn-primary"></Button>
        </div>
    );
};

export default ContactCard;