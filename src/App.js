// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import {PostList, PostEdit, PostCreate} from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashbaord from './Dashboard';
import authProvider from './authProvider';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin authProvider={authProvider} dashboard={Dashbaord} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} icon={UserIcon}/>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
);
export default App;