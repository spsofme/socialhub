import React from 'react'
import Card from './Card'
import heart_icon from '../assets/icons/heart.svg'
import avatar_icon from '../assets/icons/avatar.svg'
import comment_icon from '../assets/icons/comment.svg'

const Post = ({id, username, desc, date}) => {
  return (
	<Card>
		<div className='post'>
			<div className="post-header">
				<div className="post-header-user">
					<img src={avatar_icon} className='post-header-user-avatar' alt="profile photo" />
					<span>{username}</span>
				</div>
				<div className="post-header-info">
					<div className="post-header-info-options">
						<span>...</span>
					</div>
				</div>
			</div>
			<div className='post-content'>
				<img src={`https://picsum.photos/200/300?random=${id}`} alt="" />
			</div>
			<div className='post-footer'>
				<div className='post-icons'>
					<img src={heart_icon} className='post-icon' alt="like" />
					<img src={comment_icon} className='post-icon' alt="comment" />
				</div>
				<div className='post-user'>
					<a className='post-user-username' href={`/${username}`}>{username}</a>
					<span className='post-upload-date'>{date}</span>
				</div>
				<div className='post-desc'>
					<span className='post-desc-text'>{desc}</span>
				</div>
			</div>
		</div>
	</Card>
  )
}

export default Post