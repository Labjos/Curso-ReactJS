//import imagenUrl from '../../imagenes/coca.JPG'


export const ItemDetail = ({itemDetail}) => {

    const { marca, id, imagenUrl, precio, descripcion} = itemDetail

    return(

    <div>
           <article > 
                <h3>{marca}</h3>
                <p id="id">{id}</p>
                <img src={ imagenUrl } alt="Producto"/>
                <p>{precio}</p>
                <p>{descripcion}</p>
            </article>
    </div>
    )
}

