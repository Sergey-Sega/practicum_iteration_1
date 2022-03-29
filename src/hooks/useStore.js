import { useContext } from 'react';
import {StoreContext} from '../store/index';

export const useStore = () => useContext(StoreContext);
