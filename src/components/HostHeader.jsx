import {NavLink} from 'react-router-dom';

const activeStyles = 
{
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
function HostHeader()
{
    return(

        <nav className='host-nav'>
                  <NavLink 
                    to="/host"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>
                
                <NavLink 
                    to="/host/income"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>
                
                <NavLink 
                    to="/host/reviews"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink></nav>
    );
}

export default HostHeader;