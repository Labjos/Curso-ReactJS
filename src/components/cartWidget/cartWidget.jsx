import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'



export const CartWidget = () => {


    return (
        <div className ="cartWidget">
             <div id="comanda"><i><FontAwesomeIcon icon={faFileInvoice}/>
                    </i></div>
            <div id="textoVentas">Hola! estas en tu zona de compra</div>
           
        </div>        
        )
}

    
    
