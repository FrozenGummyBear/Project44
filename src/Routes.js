import React from "react";
import { Redirect, Switch, useLocation } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer
import Home from "./views/Home/Home.page";
import Settings from "./views/Settings/Settings.page";

import MinimalView from "./layout/minimal/MinimalView";
import Currency from "./views/Currency/Currency";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import MatchPage from "./views/match-page/match";
import ForgetPassword from "./views/forgetpassword/forget-password";
import PasswordChange from "./views/password-change/password-chnage";
import AdminSettings from "./views/AdminSettings/AdminSettings.page";
import { Navigate } from "react-router-dom";
const Routes = () => {
	const user = sessionStorage.getItem("user");
	console.log(window.location.pathname, "puth");
	if (
		!user &&
		(window.location.pathname !== "/" ||
			window.location.pathname !== "/sign=up")
	) {
		// window.location.href = "/";
	}
	return (
		<Switch>
			<RouteWithLayout
				exact
				path='/home'
				component={Home}
				layout={MinimalView}
			/>
			<RouteWithLayout
				exact
				path='/sign-up'
				component={SignUp}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/admin'
				component={AdminSettings}
				layout={MinimalView}
			/>
			<RouteWithLayout exact path='/' component={SignIn} layout={MainView} />
			<RouteWithLayout
				exact
				path='/forget-password'
				component={ForgetPassword}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/passwor-reset/:token'
				component={PasswordChange}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/setting'
				component={Settings}
				layout={MinimalView}
			/>
			<RouteWithLayout
				exact
				path='/currency-store'
				component={Currency}
				layout={MinimalView}
			/>
			<RouteWithLayout
				exact
				path='/match'
				component={MatchPage}
				layout={MinimalView}
			/>
		</Switch>
	);
};
export default Routes;
