import React from 'react'
import Card from '../../components/Card'
import AddPost from '../../components/AddPost'
import Post from '../../components/Post'


const IndexMain = () => {
	const date = (new Date()).getDay().toString() + '.' + (new Date()).getMonth().toString() + '.' + (new Date()).getFullYear().toString()
  return (
		<div style={{ padding: '0' }}>
			<AddPost />

			<div id='posts'>
				<Post id={1} username='kerim' desc='socialhub ilk postu' date={date} />
				<Post id={2} username='kerim' desc='socialhub ikinci postu' date={date} />
			</div>
		</div>
  )
}

export default IndexMain
