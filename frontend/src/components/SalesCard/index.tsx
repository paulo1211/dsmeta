import NotificationButton from '../NotificationButton'
import './styles.css'
function SalesCard(){
    return (
        <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
            <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text"/>
            </div>
            <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text"/>
            </div>
        </div>
        
        <div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show-response">ID</th>
                        <th className="show-response-992">Data</th>
                        <th>Vendedor</th>
                        <th className="show-response-992">Visitas</th>
                        <th className="show-response-992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="show-response-992">#341</td>
                        <td className="show-response">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show-response-992">15</td>
                        <td className="show-response-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-redbutton-container">
                               <NotificationButton/>
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className="show-response-992">#341</td>
                        <td className="show-response">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show-response-992">15</td>
                        <td className="show-response-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-redbutton-container">
                                <div className="dsmeta-redbutton">
                                    <NotificationButton/>
                                </div>
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className="show-response-992">#341</td>
                        <td className="show-response">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show-response-992">15</td>
                        <td className="show-response-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-redbutton-container">
                                <div className="dsmeta-redbutton">
                                    <NotificationButton/>
                                </div>
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


    </div>
    )

}

export default SalesCard