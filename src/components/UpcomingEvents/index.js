import React, {PropTypes} from "react"
import {Link} from 'phenomic'
import styles from './index.css'

const UpcomingEvents = (props) => {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Upcoming Events</h2>
            <div>
                {
                    props.events.map(event => {
                        const EventComponent = event.disableLink ? 'div' : Link
                        return (
                            <EventComponent key={event.name} className={styles.event} to={event.name}>
                                    <div className={styles.location}>{event.location}</div>
                                    <div className={styles.date}>{event.date}</div>
                            </EventComponent>
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