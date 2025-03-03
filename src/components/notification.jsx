// import React, { useState, useRef } from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/LatestUpdates.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function LatestUpdates() {
  const updates = [
    {
      id: 0,
      sport: "County Cricket",
      team1: "St. Thomas",
      team2: "College of Engineering Chengannur",
      score: "53/5 | 35/6",
      over: "(5.0) | (4.4)",
      result: "College of Engineering Chengannur",
      venue: "College Ground",
      time: "03:01pm",
    },
    {
      id: 1,
      sport: "7's Football",
      team1: "Saintgits College",
      team2: "Providence Chengannur",
      score: "",
      over: "",
      result: "",
      venue: "Saintgits Sports Arena",
      time: "02:31pm",
    },
    {
      id: 2,
      sport: "Basketball",
      team1: "St. Mary's",
      team2: "Kristhu Jyothi, Kottayam",
      score: "31 - 35",
      over: "",
      result: "Kristhu Jyothi, Kottayam",
      venue: "St. Mary's Indoor Stadium",
      time: "02:15pm",
    },
    {
      id: 3,
      sport: "Table Tennis",
      team1: "St. Mary's",
      team2: "Kristhu Jyothi, Kottayam",
      score: "31 - 35",
      over: "",
      result: "Kristhu Jyothi, Kottayam",
      venue: "St. Mary's Indoor Stadium",
      time: "02:15pm",
    },
    {
      id: 4,
      sport: "VolleyBall",
      team1: "St. Mary's",
      team2: "Kristhu Jyothi, Kottayam",
      score: "",
      over: "",
      result: "",
      venue: "St. Mary's Indoor Stadium",
      time: "02:15pm",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const colors = ["lime", "pink", "yellow", "red", "blue"];
  const loadMore = () => setVisibleCount((prev) => prev + 5);

  //ANIMATION START
  const textRef = useRef(null); // Ref for the text animation

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    // Split the text into letters and wrap each letter in a <span>
    const text = textRef.current;
    const letters = text.innerText.split("");
    text.innerHTML = letters
      .map(
        (letter, index) =>
          `<span key=${index} style="opacity: 0;" class="animated-letter">${letter}</span>`
      )
      .join("");

    // Create the scroll-based staggered animation
    gsap.to(text.querySelectorAll(".animated-letter"), {
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: text,
        start: "top 95%",
        end: "top 50%",
        scrub: !isMobile,
      },
    });
  }, []);
  //ANIMATION END

  return (
    <div className="latest-updates">
      <div className="marqueeContainer">
        <div className="marquee">
          <span>
            LATEST UPDATES • LATEST UPDATES • LATEST UPDATES • LATEST UPDATES •
            LATEST UPDATES • LATEST UPDATES • LATEST UPDATES • LATEST UPDATES •
            LATEST UPDATES • LATEST UPDATES • LATEST UPDATES • LATEST UPDATES •
            LATEST UPDATES • LATEST UPDATES • LATEST UPDATES • LATEST UPDATES •
          </span>
        </div>
      </div>

      <h1 className="title" ref={textRef}>
        LATEST UPDATES
      </h1>
      <div className="updates-container">
        {updates.slice(0, visibleCount).map((update) => (
          <div key={update.id} className="card">
            <div className="update-card">
              <div className="update-header">
                <span className={`sport ${colors[update.id]}`}>
                  {update.sport}
                </span>
                <span className="time">{update.time}</span>
              </div>
              <hr />
              <div className="mid">
                <span className="match">
                  {update.team1}{" "}
                  <div className="score-card">
                    <span className="score-card-head">Score</span>
                    {update.score && update.id !== 0 ? (
                      <span className="score">{update.score}</span>
                    ) : update.score ? (
                      (() => {
                        let score = update.score.split(" | ");
                        let over = update.over.split(" | ");
                        return (
                          <div className="cricket-score">
                            <div className="cricket-end">
                              <span className="runs">{score[0]}</span>
                              <span className="over">{over[0]}</span>
                            </div>
                            <span>|</span>
                            <div className="cricket-end">
                              <span className="runs">{score[1]}</span>
                              <span className="over">{over[1]}</span>
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      <span className="on-going">VS</span>
                    )}
                  </div>{" "}
                  {update.team2}
                </span>
                <span className="venue">{update.venue}</span>
              </div>

              {update.result ? (
                <span className={`winner ${colors[update.id]}`}>
                  Winner: {update.result}
                </span>
              ) : (
                <span className="Tba">Winner Will Be Announced Soon!</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleCount < updates.length && (
        <button className="view-more" onClick={loadMore}>
          View More
        </button>
      )}
    </div>
  );
}
