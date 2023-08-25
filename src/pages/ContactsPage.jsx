import { Link } from "react-router-dom";
import Button from "../components/Button";
import NotFoundBox from "../components/NotFoundBox";
import { useSelector } from "react-redux";
import ContactCard from "../components/ContactCard";

const ContactsPage = () => {
    const contacts = useSelector((state)=>state.contactReducer.contacts);
    return (
        <div>
            <div className="text-center my-5">
                <Link to='/add-contact'> <Button value='Create Contact' style="btn-success"></Button></Link>

                <div className="grid md:grid-cols-3 gap-6 my-5 px-5">
                    {
                        contacts && contacts.map((contact,index)=><ContactCard key={index} contact={contact}></ContactCard>)
                    }
                </div>
                {contacts.length>0?"": <NotFoundBox></NotFoundBox>}
            </div>
        </div>
    );
};

export default ContactsPage;