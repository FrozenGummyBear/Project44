import axios from "axios";
import { ENDPOINT } from "./Api";

// import { toast } from "react-toastify";

export const apiCall = (method, data, path, callback, onFailure, token) =>
	new Promise((resolve, reject) => {
		console.log("this is request", data, path);
		console.log("token:", sessionStorage.getItem("token"));
		const config = {
			headers: {
				Authorization: `${token ? token : sessionStorage.getItem("token")}`,
			},
		};
		axios[method](`${ENDPOINT}${path}`, data && data, config)
			.then((res) => {
				resolve();
				console.log("this is the token", config);
				callback(res.data);
				// toast.success(res.data.message);
			})
			.catch((error) => {
				reject();

				onFailure(error);
				// toast.error(error.response.data.message);
			});
	});
export const apiCall2 = (method, data, path, callback, onFailure, token) =>
	new Promise((resolve, reject) => {
		console.log("this is request", method, data, path);
		const config = {
			headers: {
				Authorization: `${token ? token : sessionStorage.getItem("token")}`,
			},
		};
		//axios[method](`${ENDPOINT}${path}`, data && data, config)
		//
		axios({
			method: method,
			url: `${ENDPOINT}${path}`,
			data,
			headers: config.headers,
		})
			.then((res) => {
				resolve();
				callback(res.data);
				// toast.success(res.data.message);
			})
			.catch((error) => {
				reject();

				onFailure(error);
				// toast.error(error.response.data.message);
			});
	});
export const apiFetch = (method, path, callback, onFailure) =>
	new Promise((resolve, reject) => {
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};
		axios[method](`${ENDPOINT}${path}`, config)
			.then((res) => {
				resolve();
				callback(res.data);
				console.log(res.data.message);
			})
			.catch((error) => {
				reject();
				onFailure(error);
			});
	});
