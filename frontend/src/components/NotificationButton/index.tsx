import axios from 'axios';
import notificationicom from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props ={
    saleId: number;
}

function handleClick(saleId: number){
    axios(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
        console.log("sucesso");
    })
}




function NotificationButton({saleId}: Props) {
    return (
        <div className="dsmeta-redbutton" onClick={() => handleClick(saleId)}>
            <img src={notificationicom} alt="notificar"/>
        </div>
    )
  }
  
  export default NotificationButton
  