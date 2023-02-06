import React from 'react';
import { AccountDTO } from 'utils/interfaces';

const AccountContext = React.createContext<AccountDTO | null>(null);
export default AccountContext;
