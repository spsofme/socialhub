import { useNavigate } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import home_icon from '../../assets/icons/home.svg'
import avatar_icon from '../../assets/icons/avatar.svg'

const LeftBar = () => {
	const navigate = useNavigate()
	return (
		<div id="leftbar">
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '10px',
				cursor: 'pointer'
			}} onClick={() => navigate('/')}>
				<img src={logo} alt="" style={{
					height: '40px',
					width: 'auto'
				}} />
			</div>
			<div style={{
				// child elementlerden ilki üstten alta doğru uzayacak, diğeri ise alta sabitlenecek
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: 'calc(100% - 50px)',
				padding: '0.625rem 0px'
			}}>
				<div>
					<PageNavigate pageName="Ana sayfa" url="/" icon={home_icon} />
				</div>
				<div>
					<PageNavigate pageName="Profil" url="/profile" icon={avatar_icon} />
				</div>
			</div>
		</div>
	)
}

const PageNavigate = ({ pageName, url, icon }) => {
	const naviagate = useNavigate()
	return (
		<div className="navigate-item" onClick={() => { naviagate(url) }}>
			<img src={icon} alt={pageName} className="navigate-icon" />
			<span>{pageName}</span>
		</div>
	)
}

export default LeftBar
