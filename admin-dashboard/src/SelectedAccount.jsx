import React from 'react'; 
import {Card} from '@mui/material'

function SelectedAccount ({account}) { 
    return (
        <Card variant="outlined" className="account-card">
            <p><strong>Name: </strong> {account?.name}</p>
            <p><strong>Account Number: </strong> {account?.account_number}</p>
            <p><strong>Email: </strong> {account?.email}</p>
            <p><strong>Usage Type: </strong> {account?.usage_type}</p>
            <p><strong>Address: </strong> {account?.address}</p>
            <p><strong>Date Joined: </strong> {account?.date_joined}</p>
            <p><strong>Plan: </strong> {account?.plan}</p>
        </Card>       
    ) 
} 
export default SelectedAccount 