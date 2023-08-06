// Write your code here
import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  onWithdrawal = value => {
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    return (
      <div className="mainContainer">
        <div className="miniContainer">
          <div className="nameDetails">
            <div className="firstLetterContainer">
              <p className="firstLetter">S</p>
            </div>
            <p className="fullName">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="balanceTitle">Your Balance</p>
            <div className="amountContainer">
              <p className="amount">{currentBalance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdrawalTitle">Withdrawal</p>
          <p className="chooseDenomination">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationsContainer">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                eachDenomination={eachDenomination}
                onWithdrawal={this.onWithdrawal}
                currentBalance={currentBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
