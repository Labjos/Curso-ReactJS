import { Item } from '../item/item'



export const ItemList = ({items}) => (

    <div>

          {items.map((item) => (
            <Item  key={item.id} item={item} />
          ))}

    </div>
)


/*import React from 'react'
import'./itemListContainer.css'
import ItemList from '../itemListContainer/itemList'

const AgragarCarrito = (items) => {
  alert(`Agregaste ${items} al carrito`)

  {
              id: 1,
              nombrePlato: 'a',
              description: '',
              precio: 1,
              imagenUrl: ''
          }
        ]
    }
        return (
      <div>
        <ItemList items={items} />
      </div>
    )
  }     
*/