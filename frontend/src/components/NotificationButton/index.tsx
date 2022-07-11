import notificationicom from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-redbutton">
            <img src={notificationicom} alt="notificar"/>
        </div>
    )
  }
  
  export default NotificationButton
  