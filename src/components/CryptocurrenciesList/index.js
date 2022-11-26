// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)

    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="m-loader">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <div className="sub-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-image"
            />
            <div className="s-section">
              <div className="s1-section">
                <div className="currency">
                  <p className="currencyName">Coin Type</p>
                </div>
                <div className="sub-title">
                  <p className="currencyName3">USD</p>
                  <p className="currencyName1">EURO</p>
                </div>
              </div>

              <li className="item">
                {currencyList.map(each => (
                  <CryptocurrencyItem currencydetails={each} key={each.id} />
                ))}
              </li>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
