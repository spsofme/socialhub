import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import ping_icon from '../../assets/icons/ping.svg'

const Profile = ({ match }) => {
	const { username } = useParams()
	const navigate = useNavigate()
	var post = true

  return (
		<Card>
			<div className="profile">
				<div className="profile-header">
					<div className="profile-header-user">
						<img src={`https://picsum.photos/200/200?random=${username.length}`} className='profile-header-user-avatar' alt="profile photo" />
					</div>
					<div className="profile-header-info">
						<div className="profile-header-info-header">
							<span className='profile-header-info-header-username'>{username}</span>
							<input type="button" className='hub-btn' value="Profili düzenle" style={{fontStyle:'bold'}} />
						</div>
						<div className="profile-header-info-content">
							<div className="profile-header-info-content-item">
								<span className='posts'><b>0</b> Gönderi</span>
							</div>
							<div className="profile-header-info-content-item">
								<span className='follower'><b>0</b> Takipçi</span>
							</div>
							<div className="profile-header-info-content-item">
								<span className='follow'><b>0</b> Takip</span>
							</div>
						</div>
						<div className="profile-header-info-footer">
							<span className='profile-header-info-footer-name'>Kerim ER</span>
							<span className='profile-header-info-footer-description'>SocialHub kurucusu ve geliştiricisi</span>
						</div>
					</div>
				</div>
				<hr />
				<div className="profile-content">
					{ post ?
						<div className="posts">
							<div className="posts-row">
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
							</div>
							<div className="posts-row">
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
							</div>
							<div className="posts-row">
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
							</div>
							<div className="posts-row">
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
								<div className="posts-col" onClick={() => { navigate(`post/${1}`) }}><img src="https://picsum.photos/200/300" alt="" /></div>
							</div>
						</div>
						:
						<div className="no-post">
							<img src={ping_icon} alt="Post not found image" style={{ color: 'gray' }} />
							<span>Bir şeyler paylaş</span>
						</div>
					}
				</div>
			</div>
		</Card>
  )
}

export default Profile