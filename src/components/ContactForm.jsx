

const ContactForm = () => {
    const handleAddContact = e =>{
        e.preventDefault();
        const formData = e.target;
        const firstName = formData.firstName.value;
        const lastName  = formData.lastName.value;
        const status = formData.status.value;
        console.log(firstName,lastName,status)
    }
    return (
        <form onSubmit={handleAddContact} className="w-1/2 mx-auto">
            <div className="flex gap-4 items-center">
                <label htmlFor="firstName" className=" w-1/4 font-bold">First Name </label>
                <input type="text" className="border-2 w-3/4 border-gray-700 rounded-md px-2 py-1" name="firstName" />
            </div>
            <div className="my-2 flex gap-4 items-center">
                <label htmlFor="lastName" className="w-1/4 font-bold">Last Name  </label>
                <input type="text" className=" w-3/4 border-2 border-gray-700 rounded-md px-2 py-1" name="lastName" />
            </div>
            <div className="flex items-center gap-4 ">
                <label htmlFor="status" className="w-1/4 font-bold">Status</label>
                <div>
                    <div>
                        <input type="radio" name="status" value="active" />
                        <span className="ml-2">Active</span>
                    </div>
                    <div>
                        <input type="radio" name="status" value="inactive" />
                        <span className="ml-2">Inactive</span>
                    </div>
                </div>
            </div>
            <div className=" my-5">
                <button className="btn-success">Save</button>
            </div>
        </form>
    );
};

export default ContactForm;