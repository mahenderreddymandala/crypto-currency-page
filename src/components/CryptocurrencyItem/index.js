// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencydetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencydetails

  return (
    <div className="items-container">
      <div className="section1">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p className="currencyName2">{currencyName}</p>
      </div>
      <div className="section2">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
