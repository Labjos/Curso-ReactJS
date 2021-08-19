import { Link } from 'react-router-dom'



export const Item = ({item}) => {

    const { id, marca, precio, imagenUrl, descripcion} =item

    return ( 
        <Link to= {`/item/${id}`}>
        
            <article > 
                <h3>{marca}</h3>
                <p id="id">{id}</p>
                <img src={ imagenUrl} alt="Producto"/>
                <p>{precio}</p>
                <p>{descripcion}</p>
            </article>

        </Link>
 
    )
    }

   
