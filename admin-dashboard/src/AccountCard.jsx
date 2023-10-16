import React from 'react'; 
import {Card} from '@mui/material'

function AccountCard ({account, handleSelect}) { 
    return (
        <Card variant="outlined" className="account-card" onClick={() => handleSelect(account)}>
            <p><strong>Email: </strong> {account?.email}</p>
            <p><strong>Usage Type: </strong> {account?.usage_type}</p>
            <p><strong>Address: </strong> {account?.address}</p>
        </Card>
    ) 
} 
export default AccountCard 