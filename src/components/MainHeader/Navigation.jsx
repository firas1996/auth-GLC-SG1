import { useContext } from "react";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/contextStore";

const Navigation = () => {
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

// import AuthContext from "../../store/contextStore";
// import classes from "./Navigation.module.css";

// const Navigation = () => {
//   return (
//     <AuthContext.Consumer>
//       {(ctx) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {ctx.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {ctx.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {ctx.isLoggedIn && (
//                 <li>
//                   <button onClick={ctx.logoutHandler}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         );
//       }}
//     </AuthContext.Consumer>
//   );
// };

// export default Navigation;
