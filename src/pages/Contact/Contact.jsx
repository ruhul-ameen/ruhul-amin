import { useRef } from "react";
import ItemSocialText from "../Shared/ItemSocial/ItemSocialText";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nuw41oq",
        "template_yoftfag",
        form.current,
        "kt-zrPOy8nTFIR80a"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast.success("Successfully send!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="mb-32 mt-20">
        <div className="flex justify-center items-center pb-0">
          <h5 className="text-center text-4xl uppercase bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-green-400 animate-jump-in">
            Contact
          </h5>
        </div>

        <div className="m-auto md:px-52">
          <div className="w-full py-2 animate-flip-down animate-once animate-duration-[2000ms] animate-ease-in-out">
            <div className="rounded px-8 pb-4 mb-4 shadow-gray-300 shadow-md">
              <h3 className="text-center text-2xl text-gray-600 md:text-4xl my-6">
                Send your Message
              </h3>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="border border-green-400 rounded-none w-full py-2 px-3 text-green-400 leading-tight focus:outline-none focus:shadow-green-500 mb-4"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="border border-green-400 rounded-none w-full py-2 px-3 text-green-400 leading-tight focus:outline-none focus:shadow-green-500 mb-4"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  className="border border-green-400 rounded-noun w-full px-3 pt-8 pb-20 text-green-400 leading-tight focus:outline-none focus:shadow-green-500 resize-y overflow-auto mb-4"
                  required
                />
                <input
                  type="submit"
                  value="Send Message"
                  className="btn border-green-500 text-green-500 rounded-sm w-44 mr-4 my-3 font-semibold hover:bg-green-500 hover:text-white"
                />
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
        <ItemSocialText></ItemSocialText>
      </div>
    </>
  );
};

export default Contact;
