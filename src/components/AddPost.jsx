import React from 'react'
import image_icon from '../assets/icons/image.svg'

const AddPost = () => {
  return (
		<div className='hub-card add-post'>
			<textarea id="add-post-text" placeholder='Düşüncelerini paylaş'></textarea>
			{/* <input type="text" id='add-post-text' placeholder='Düşüncelerini paylaş' /> */}
			<div id='add-post-items'>
				<div>
					<button className='btn-add-image'>
						<img src={image_icon} alt="add image" />
					</button>
				</div>
				<div>
					<button className='hub-btn'>Paylaş</button>
				</div>
			</div>
		</div>
  )
}

export default AddPost
