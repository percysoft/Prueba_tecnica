const headers = {
	Accept: "application/json, text/plain, */*",
	"Content-Type": "application/json",
};

export const getCharacters = (page, status, name) => {
	let queryString = [`${page && `page=${page}`}`, `${status === "all" ? undefined : `status=${status}`}`, `${name === "" ? undefined : `name=${name}`}`];

	let queryStringNew = queryString.filter((dato) => {
		return dato !== "undefined";
	});

	return fetch(`${process.env.REACT_APP_BASE_URL}/character${queryStringNew.length > 0 ? "?" : ""}${queryStringNew.join("&")}`, {
		method: "GET",
		headers: {
			...headers,
		},
	})
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => {
			console.log(err);
			return false;
		});
};
