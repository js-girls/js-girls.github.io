import React, { PropTypes } from "react"
import styles from './index.css'

const UpcomingEvents = (props) => {

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Upcoming Events</h3>

      <div>
        {
          props.events.map(event => {
            if (event.url) {
              return (
                <div  key={event.name} className={styles.event}>
                  <div className={styles.location}>{event.location}</div>
                  <div className={styles.date}>{event.date}</div>
                  <a target="_blank" href={event.url} className={styles.cta}>Get Ticket</a>
                </div>
              );
            }

            return (
              <div key={event.name} className={styles.event}>
                <div className={styles.location}>{event.location}</div>
                <div className={styles.date}>{event.date}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

UpcomingEvents.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
}

export default UpcomingEvents