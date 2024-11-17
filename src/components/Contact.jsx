import { CONTACT} from "../constants"

const Contact = () => {
    return(
        <dev className="border-t vorder-stone-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Get in Tounch</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>

                <p className="my-4">
                {CONTACT.phoneNo}
                </p>

                <p className="my-4">
                {CONTACT.email}
                </p>


            </div>
        </dev>

    )
}

export default Contact
