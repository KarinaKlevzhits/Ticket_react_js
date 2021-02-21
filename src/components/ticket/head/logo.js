import React from 'react'
import styles from './style.module.css'

class Logo extends React.Component{
    render(){
        return(
            <div className={styles.logo}>
              eventim.de 
            </div>
        )
    }
}
export default Logo;