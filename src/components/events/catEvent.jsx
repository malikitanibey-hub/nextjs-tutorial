import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const CatEvent = ({ data, pageName}) => {
  return (
    <div className="cat-events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          //we use Link because when we click on events in London for example to quick go to London events page
          // means remove loading when clicks on event in London
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
            legacyBehavior
          >
            <a className="cardEvents ">
              <Image src={ev.image} alt={ev.title}  width={300} height={300} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CatEvent;
