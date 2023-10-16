import React from 'react'; 

function History ({history}) { 
    return (
        <>
            <ul>
                {history?.map((account, i) => (
                    <li key={i}>{account.email}</li>
                ))}
            </ul>
        </>
    ) 
} 
export default History 