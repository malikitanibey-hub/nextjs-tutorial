import React, {useState, useRef} from "react";
import Image from "next/image";
import { useRouter } from "next/router";


const SingleEvent = ({ data }) => {
  const [message, setMessage] = useState('');
  const inputEmail = useRef();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    //query.id is the same of the image on event submit
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(validRegex)){
       setMessage('Please introduce a correct email address');
    }

    try {
      //POST fetch request
      //body emailValue and the eventId
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId }),
      });

      if(!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';

    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="event-single_page">
      <h1>{data.title}</h1>
      <div className="image-wrapper">
        <Image alt={data.title} src={data.image} width={1000} height={500} />
      </div>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this Event!</label>
        <input
          ref={inputEmail}
          id="email"
          placeholder="Please insert you email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
export default SingleEvent;
