import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';import Searchbar from './Searchbar';
import logo from '../../../assets/images/logo.png';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);


  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);

  return (

    <header className="bg-black fixed top-0 py-4 w-full z-10">

      {/* <!-- navbar container --> */}
      <div className="w-full sm:w-11/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">

        {/* <!-- logo & search container --> */}
        <div className="flex justify-start flex-1 items-center">
          <Link className="h-10 mr-4 sm:mr-4 mb-3" to="/">
            <img draggable="false" className="h-full w-full object-contain" src={logo} alt="Tashyeed Logo" style={{ height: "40px", width: "auto",}} />
          </Link>
          <Searchbar />
        </div>
        

              <div className="flex items-center justify-end gap-0.5 sm:gap-7 relative">
                {isAuthenticated === false ? (
                  <Link
                    to="/login"
                    className="px-3 sm:px-9 py-2 text-primary-gold font-small rounded-sm cursor-pointer"
                  >
                    <span>
                      <PersonOutlineIcon className="mb-1" sx={{ fontSize: "23px" }} />
                    </span>{" "}
                    LOGIN
                  </Link>
                ) : (
                  <span
                    className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer"
                    onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}
                  >
                    {user.name && user.name.split(" ", 1)}
                    <span>
                      {togglePrimaryDropDown ? (
                        <ExpandLessIcon sx={{ fontSize: "16px" }} />
                      ) : (
                        <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                      )}
                    </span>
                  </span>
                )}

                {togglePrimaryDropDown && (
                  <PrimaryDropDownMenu
                    setTogglePrimaryDropDown={setTogglePrimaryDropDown}
                    user={user}
                  />
                )}

                <span className="languageSelection flex items-center text-primary-gold font-medium gap-1 cursor-pointer">
                  <LanguageIcon sx={{ fontSize: "20px" }} />
                  <select className="bg-transparent border-none outline-none text-sm">
                    <option value="en">ENGLISH</option>
                    <option value="ar">ARABIC</option>
                  </select>
                </span>

               < span className='FavoriteIcon flex items-center text-primary-gold font-medium gap-1 cursor-pointer'>
                  <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                  <span className='text-sm'>MY LIST</span>
                </span>   
              </div>

      </div>
      {/* <!-- navbar container --> */}
    </header>
  )
};

export default Header;
