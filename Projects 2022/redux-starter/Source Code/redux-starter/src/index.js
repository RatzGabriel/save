import { loadBugs } from './store/bugs';
import configureAppStore from './store/configureStore';
import { addBug } from './store/bugs';

const store = configureAppStore();

store.dispatch(loadBugs());
