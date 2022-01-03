import AuthService from "../../service/AuthService";	//test

//TODO clean up

function wyloguj(){
	console.log("logout now")
	AuthService.logout(AuthService.getCurrentUser())
	window.location.reload()
}
function Home() {
	let user = toString(AuthService.login.username)
	//test
	let userStringified = 0	//test
	console.log("to jest user")	//test
	console.log(AuthService.login)	//test


	return (

			<>
				<p>witaj {userStringified}</p>
				<button onClick={wyloguj}>Wyloguj</button>

			</>
	);
}

export default Home;
