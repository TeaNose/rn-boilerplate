import React from 'react';

import Navigator from '_navigations';
import { StoreProvider } from '_reducers';

const App = () => <StoreProvider><Navigator /></StoreProvider>;

export default App;