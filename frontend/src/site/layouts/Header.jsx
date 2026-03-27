// import "../css/Header";
import "../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <div className="header">
      <div className=" d-flex justify-content-between p-2 topMenu">
        <div className=" m-2 leftMenu">
          <img src="" alt="logo shop" />
          <input type="search" name="search" id="ChooseSearch" />
        </div>
        <div className=" m-2 rightMenu ">
          
          <select name="selectLang" id="selectLang">
            <option value="en">English</option>
            <option value="fa">فارسی</option>
            <option value="pash">پشتو</option>
          </select>
          <button>Sign in</button>
          <button className="signUp">Create Acount</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
