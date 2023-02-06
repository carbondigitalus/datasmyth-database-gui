import React from 'react';

const AccountContext = React.createContext<AccountDTO | null>(null);
export default AccountContext;

class AccountDTO {
  email: string;
}
