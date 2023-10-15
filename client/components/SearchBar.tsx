import { useState, useMemo, useCallback } from 'react'
import { accounts } from '../../data/accounts.json'

function SearchBar() {
  const [search, setSearch] = useState('')
  const [accounts, setAccounts] = useState()


  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) => {
      if (search === '') {
        return account
      } else if (account.email.toLowerCase().includes(search.toLowerCase())) {
        return account
      }
    })
  },[accounts, search])

  // using api, would use debounce

 const getAccounts = useCallback(() => {
  const response = fetch("../../data/accounts.json").then(resp => resp.json())
  
 }, [])

// export default function ProductPage({ productId, referrer, theme }) {
//   const handleSubmit = useCallback((orderDetails) => {
//     post('/product/' + productId + '/buy', {
//       referrer,
//       orderDetails,
//     });
//   }, [productId, referrer]);


  return (
    <>
      <form>
        <input
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getAccounts}>Fetch accounts</button>
      </form>
      <div>
        {filteredAccounts.map((account) => {
          return (
            <div key={account._id}>
              <p>Name: {account.name}</p>
              <p>Email: {account.email}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SearchBar
