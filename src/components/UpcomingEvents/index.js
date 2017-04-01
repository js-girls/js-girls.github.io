import React, {PropTypes} from "react"
import styles from './index.css'
import {Link} from 'phenomic'

const UpcomingEvents = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Upcoming Events</h2>
            <div>
                {
                    props.events.map(event => {
                        return (
                            <Link className={styles.event} to={event.name}>
                                    <div className={styles.location}>{event.location}</div>
                                    <div className={styles.date}>{event.date}</div>
                            </Link>
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
            date: PropTypes.number.isRequired
        })
    ).isRequired
}

export default UpcomingEvents