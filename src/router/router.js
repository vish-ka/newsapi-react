import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Sources from '../containers/sources';
import News from '../containers/news'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Sources} />
        <Route path="news" components={News}/>
    </Route>
);
