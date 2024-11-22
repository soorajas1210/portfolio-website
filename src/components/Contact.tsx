import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { toast, Toaster } from "sonner";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    /* Uncomment below if you want to enable the emailJS */

    if (name !== "" && email !== "" && message !== "") {
      var templateParams = {
        name: name,
        email: email,
        message: message,
      };

      const toastId = toast.loading("sending your message");

      emailjs
        .send(
          "service_d86etet",
          "template_232651p",
          templateParams,
          "21B4Kn7RwgVBIWpFs"
        )
        .then(
          (response) => {
            toast.success("Message sent successfully", {
              position: "top-center",
            });
            console.log("SUCCESS!", response.status, response.text);
            toast.dismiss(toastId);
            resetForm();
          },
          (error) => {
            toast.error("Error, Please try again", {
              position: "top-center",
            });
            toast.dismiss(toastId);
            console.log("FAILED...", error);
          }
        );
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact">
      <Toaster richColors />
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                variant="filled"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                variant="filled"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              variant="filled"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              style={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
