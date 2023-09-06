import React from "react"
import { Outlet } from "react-router-dom"
import LeftBar from "./LeftBar"
import RightBar from "./RightBar"

const MainLayout = () => {
	return (
		<>
			<LeftBar />
			<div id="content">
				<Outlet />
			</div>
			<RightBar />
		</>
	)
}

export default MainLayout