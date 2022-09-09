import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import { baseUrl } from '../shared/baseUrl'

import { FadeTransform} from 'react-animation-components';
function RenderDish(props) {
  return (
    <div>
       <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
      <Card key={props.dish.id}>
    <CardImg top src={baseUrl + props.dish.image}  alt={props.dish.name} />
    <CardBody>
      <CardTitle>{props.dish.name}</CardTitle>
      <CardText>{props.dish.description}</CardText>
    </CardBody>
  </Card>
  </FadeTransform>
  </div>
  )
}


export default RenderDish
