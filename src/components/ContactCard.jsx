import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/features/contacts/contactSlice";

const ContactCard = ({contact}) => {
    const {id,firstName,lastName,status} = contact;
    const dispatch = useDispatch();
    return (
        <div className="shadow-lg shadow-gray-300 p-5 rounded-xl">
            <h3><span className="font-bold">Name:</span> {firstName} &nbsp; {lastName}</h3>
            <h4>Status: {status}</h4>
            <button onClick={()=>dispatch(deleteContact(id))} className="my-2 mr-2 btn-error">Delete</button>
            <Link to={`/edit-contact/${id}`}> <Button value="Edit" style="btn-primary"></Button> </Link>
        </div>
    );
};

export default ContactCard;