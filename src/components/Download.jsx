import React from 'react'

import assets from '../assets';
import styles from '../styles/Global';

// className={`${styles.bgPrimary}`}

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`} >
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}> Download the Surce COde</h1>
          <p className={`${styles.pText} ${styles.blackText}`}> Get the full source on github</p>
        </div>
        <button className={styles.btnPrimary}>Source Code</button>
        <div className={styles.flexCenter}>
          <img 
          src={assets.scene}
          alt="download_png"
          className={styles.fullImg}
          />
        </div>
        </div>
      </div>
  )
}

export default Download
