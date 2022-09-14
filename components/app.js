import React from 'react';
import { Link } from 'react-router';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Profile App</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
