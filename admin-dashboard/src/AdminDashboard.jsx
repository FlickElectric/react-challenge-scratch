import React, { useState } from "react";
import { TextField } from "@mui/material";
import accountData from "./accounts.json";
import AccountCard from "./AccountCard";
import SelectedAccount from "./SelectedAccount";
import History from "./History";

function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [history, setHistory] = useState([])

  function handleSelect(newSelectedAccount) {
    setSelectedAccount(newSelectedAccount)
    setHistory([...history, newSelectedAccount])
  }

  function handleSearch(newSearch) {
    setSearchQuery(newSearch);
    if (newSearch) {
      const results = accountData.accounts.filter((account) =>
        account.email.includes(searchQuery)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }

  return (
    <>
      <div>
        <TextField
          label="User search by email"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="results-container">
          <div className="results-left">
            {searchResults?.map((account, i) => (
              <AccountCard key={i} account={account} handleSelect={handleSelect}/>
            ))}
          </div>
          <div className="results-right">
            <h3>Selected Account:</h3>
            <SelectedAccount account={selectedAccount} />
            <h3>History:</h3>
            <History history={history} />
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
