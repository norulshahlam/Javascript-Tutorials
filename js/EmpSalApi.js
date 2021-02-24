class EmpSalApi {
	async getOneUser(url) {
		const getOneUsersRes = await fetch(url);
		const getOneUsers = await getOneUsersRes.json();

		return getOneUsers;
	}
	async getAllUser(url) {
		const getAllUserRes = await fetch(url);
		const getAllUser = await getAllUserRes.json();
		console.log(getAllUser);
		return getAllUser;
	}
}
