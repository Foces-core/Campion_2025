import styles from "../styles/Events.module.css";
import { Link } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    name: "5's Football",
    details:
      "High-intensity five-a-side football tournament featuring knockout rounds and a grand finale.",
    date: "March 8-9, 2025",
    venue: "Main Ground",
    image: "/images/football.jpeg"
  },
  {
    id: 2,
    name: "County Cricket",
    details:
      "T20 format cricket tournament with teams representing different colleges competing for the championship.",
    date: "March 8-9, 2025",
    venue: "Cricket Stadium",
    image: "/images/cricket.png"
  },
  {
    id: 4,
    name: "Volleyball",
    details:
      "Inter-college volleyball championship with group stages and knockout rounds.",
    date: "March 8-9, 2025",
    venue: "Volleyball Court",
    image: "/images/vollyball.jpeg"
  },
  {
    id: 5,
    name: "Basketball",
    details:
      "Fast-paced basketball tournament featuring 5v5 matches with group stages and playoffs.",
    date: "March 8-9, 2025",
    venue: "Basketball Court",
    image: "/images/basketBall.jpeg"
  },
  {
    id: 6,
    name: "Chess",
    details:
      "Strategic chess competition with classical format matches and timed rounds.",
    date: "March 8-9, 2025",
    venue: "Indoor Sports Complex",
    image: "/images/chess1.png"
  },
  {
    id: 7,
    name: "Badminton",
    details: "Singles and doubles badminton tournament with knockout format matches.",
    date: "March 8-9, 2025",
    venue: "Indoor Sports Complex",
    image: "/images/badminton.jpg"
  },
  {
    id: 8,
    name: "Sepak Takraw",
    details: "Traditional Southeast Asian sport combining elements of volleyball, football, and martial arts.",
    date: "March 8-9, 2025",
    venue: "Indoor Sports Complex",
    image: "/images/sepaktakraw.jpeg"
  }
];

export default function Events() {
  return (
    <div
      className={styles.eventsContainer}
      // data-aos="fade-up"
      // data-aos-delay="200"
    >
      <h1 className={styles.title}>Tournament Events</h1>
      <div className={styles.eventsGrid}>
        {eventsData.map((event, index) => (
          <div
            key={event.id}
            className={styles.eventCard}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${event.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay={index * 200}
            data-aos-once="true"
          >
            <h2 className={styles.eventName}>{event.name}</h2>
            <p className={styles.eventDate}>
              {event.date} | {event.venue}
            </p>
            <p className={styles.eventDetails}>{event.details}</p>
            <Link to={`/events/${event.id}`} className={styles.registerButton}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
