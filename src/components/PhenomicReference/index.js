import React from 'react'
import styles from './index.css'

export default function PhenomicReverence() {
    return (
        <p>
            <a
                target="_blank"
                href={ process.env.PHENOMIC_HOMEPAGE }
                className={ styles.phenomicReference }
            >
                { "Website generated with " }
                <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` } and ♥
        </span>
            </a>
        </p>
    )
}