// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenomination, onWithdrawal, currentBalance} = props
  const {value} = eachDenomination

  const onWithdrawalAction = () => {
    if (currentBalance > 0) {
      if (currentBalance - value >= 0) {
        onWithdrawal(value)
      }
    }
  }

  return (
    <li>
      <button
        onClick={onWithdrawalAction}
        className="denominationStyle"
        type="button"
      >
        {value}
      </button>
      {currentBalance - value < 0 ? (
        <p className="insufficientFunds">**Insufficient Funds**</p>
      ) : null}
    </li>
  )
}

export default DenominationItem
