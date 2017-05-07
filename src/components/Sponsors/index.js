import React, {PropTypes} from 'react';

import styles from "./index.css"

const Sponsors = ({sponsors}) => (
    <div>
        <div>
            <h2 className={styles.title}>Empowered by</h2>
        </div>
        <div className={styles.sponsors}>
            {
                sponsors.map(sponsor => {
                        return (

                            <a className={styles.logo}>
                                <img src={sponsor.logo} className={styles.img}/>
                            </a>
                        )
                    }
                )
            }
        </div>
    </div>
)

Sponsors.propTypes = {
    sponsors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logoUrl: PropTypes.string.isRequired,
        })
    )
}

export default Sponsors