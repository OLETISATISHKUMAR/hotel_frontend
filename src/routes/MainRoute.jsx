// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import UserRouter from './UserRouter';
// import ManagerRouter from './ManagerRouter';
// import AdminRouter from './AdminRouter';

import ManagerRouter from "./ManagerRouter"

// const MainRoute = () => {
//   const userRole = 'user';

//   return (
//     <Router>
//       <Switch>
//         {userRole === 'user' && <Route path="/" component={UserRouter} />}
//         {userRole === 'manager' && <Route path="/" component={ManagerRouter} />}
//         {userRole === 'admin' && <Route path="/" component={AdminRouter} />}
//       </Switch>
//     </Router>
//   );
// };

// export default MainRoute;


function MainRoute() {
  return (
    <div>
      <ManagerRouter />
    </div>
  )
}

export default MainRoute
