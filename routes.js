import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';
import LoginComponent from './components/login';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/login',
      component: LoginComponent
    }
  ]
}

export { routes };
