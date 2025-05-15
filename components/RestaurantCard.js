import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

const RestaurantCard = ({name, slug}) => {
  return (
    <Link href={`/restaurants/${slug}`} >
    <Card>
        {name}

    </Card>
    </Link>
  )
}

export default RestaurantCard
