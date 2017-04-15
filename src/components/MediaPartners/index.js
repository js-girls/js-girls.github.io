import React, {PropTypes} from 'react'

const MediaPartners = ({mediaPartners}) => (
    <div>
        {
            mediaPartners.map(partner => (
                <div>partner.name</div>
            ))
        }
    </div>
)

MediaPartners.propTypes = {
    mediaPartners: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logoUrl: PropTypes.string.isRequired,
        })
    )
}

export default MediaPartners