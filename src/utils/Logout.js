const logOut = () => {
    // Pq je peux pas utiliser le useNavigate() putain de merde de merde de merde
    localStorage.clear();
	location.reload();
};
module.exports = logOut;
