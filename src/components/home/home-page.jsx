import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => {
  return (
    <main>
      <div className="home_body">
        {data.map((ev) => (
          //we use Link because when we click on events in London for example to quick go to London events page
          // means remove loading when clicks on event in London
          <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
            <a className="card">
              <div className="image">
                <Image width={400} height={300} alt={ev.title} src={ev.image} />
              </div>

              <div className="content">
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
};
