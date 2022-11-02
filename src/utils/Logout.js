const { useNavigate } = require("react-router-dom");

const logOut = (home) => {
    if(!home){
        const navigate = useNavigate();
        navigate('/');
    }
    localStorage.clear();
	location.reload();
};
export default logOut;
