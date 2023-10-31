import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'

const PostDetail = () => {
  const { username, id } = useParams()

  return (
    <Card>
	    <div>{username} - {id}</div>
    </Card>
  )
}

export default PostDetail