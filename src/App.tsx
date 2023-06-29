import React from 'react';
import H1 from 'components/H1'
import C1 from 'components/C1'
import C2 from 'components/C2'
import L1 from 'components/L1'
import L2 from 'components/L2'
import L3 from 'components/L3'
import R1 from 'components/R1'
import R2 from 'components/R2'
import R3 from 'components/R3'
import styles from '@/App.module.less';

export default () => {
  return (
    <div className={styles.container}>
      <header>
        <H1 />
      </header>
      <div className={styles.left}>
        <L1 />
        <L2 />
        <L3 />
      </div>
      <div className={styles.center}>
        <C1 />
        <C2 />
      </div>
      <div className={styles.right}>
        <R1 />
        <R2 />
        <R3 />
      </div>
    </div>
  )
}