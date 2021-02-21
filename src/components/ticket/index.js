import TicketHead from './head'
import TicketBody from './body'
import styles from './style.module.css'

function Ticket() {
return (
    <div className = {styles.grid}>
      <TicketHead></TicketHead>
      <TicketBody></TicketBody>
    </div>
  );
}

export default Ticket;