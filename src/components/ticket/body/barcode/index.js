import React from 'react'
import Code from './code'
import styles from './style.module.css'

class Logo extends React.Component{
    render(){
        return(
            <div className={styles.body}>
              <Code></Code>
            </div>
        )
    }
}
export default Barcode;