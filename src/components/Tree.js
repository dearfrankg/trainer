import React from 'react'
import { ObjectTree } from '../vendor/react-object-tree/lib/scripts'

const Tree = ({title, data}) => (
  <div>
    <h3>{title}</h3>
    <ObjectTree value={data} level={1} />
  </div>
)

export default Tree
