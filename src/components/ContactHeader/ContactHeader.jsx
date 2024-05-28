import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css";

function ContactHeader() {
  return (
    <>
      <div className="container">
        <div className={`${styles.contactSection}`}>
          <h1 className="mt-5">CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>
      </div>
      <ContactForm/>
    </>
  );
}

export default ContactHeader;
