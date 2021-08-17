import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import productos from '../../imagenes/nero.JPG'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemListContainer = ({greetings, img}) => (
  <Card>
    <Image src={productos} wrapped ui={false} />
    <Card.Content>
      <Card.Header>NERO 53</Card.Header>
      <Card.Meta>{greetings}</Card.Meta>
      <Card.Description>
        Fernet Premium
      </Card.Description>
    </Card.Content>

    <ItemCount />
 
  </Card>
)

export default ItemListContainer