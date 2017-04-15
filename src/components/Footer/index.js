import React from "react"
import MediaPartners from '../MediaPartners'
import PhenomicReference from '../PhenomicReference'
import styles from "./index.css"
import mediaPartners from '../../media-partners'

const Footer = () => (
  <footer className={ styles.footer }>
    <MediaPartners mediaPartners={mediaPartners}/>
    <PhenomicReference/>
  </footer>
)

export default Footer
