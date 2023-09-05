import { useNavigate } from "react-router-dom"

const LeftBar = () => {
	return (
		<div id="leftbar">
			<div>LOGO</div>
			<div>
				<PageNavigate pageName="Home" url="/" />
			</div>
		</div>
	)
}

const PageNavigate = (props) => {
	const naviagate = useNavigate()
	const { pageName, url } = props
	return (
		<a onClick={() => { naviagate(url) }} className="btn" title={pageName}>{pageName}</a>
	)
}

export default LeftBar