import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import productos from '../../imagenes/nero.JPG'

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
 
  </Card>
)

export default ItemListContainer