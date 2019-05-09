import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Login = lazy(() => import('./containers/login'));
const Header = lazy(() => import('./containers/header'));
const MemberSearch = lazy(() => import('./containers/memberSearch'));
const MemberDetailPage = lazy(() => import('./containers/memberDetail'));
const ReferralProvider = lazy(() => import('./containers/referralProvider'));
const ReferralManagement = lazy(() =>
  import('./containers/referralManagement')
);

const routes = (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="member-page">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/member-search" component={MemberSearch} />
        <Route
          exact
          path="/member-detail/:memberID"
          component={MemberDetailPage}
        />
        <Route exact path="/referral-provider" component={ReferralProvider} />
        <Route
          exact
          path="/referral-management"
          component={ReferralManagement}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  </Suspense>
);

export default routes;
