import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
          <a className="cards">
            <Image
              src={ev.image}
              alt={ev.title}
              fill
              quality={100}
              priority 
              className="card_img"
            />
            <h2>{ev.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default AllEvents;
