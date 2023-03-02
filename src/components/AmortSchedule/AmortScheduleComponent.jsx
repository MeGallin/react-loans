import { useState } from 'react';
import './AmortScheduleComponent.css';
import CurrencyFormat from 'react-currency-format';
import InputComponent from '../Input/InputComponent';

const AmortScheduleComponent = () => {
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const randId = (length) => {
    const chars =
      '0123456789abcdefghijklmnopqrstxyzABCDEFGHIJKLMNOPQRSTXYZ!"£$%^&*';
    let result = '';
    for (let index = 0; index < length; index++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  function calculateAmortizationSchedule(
    loanAmount,
    interestRate,
    loanTermInMonths,
  ) {
    // Convert interest rate to monthly decimal rate
    const monthlyInterestRate = interestRate / 100 / 12;
    // Calculate monthly payment
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 / (1 + monthlyInterestRate), loanTermInMonths));
    let balance = loanAmount;
    const schedule = [];
    // Loop through each month and calculate the payment breakdown
    for (let i = 1; i <= loanTermInMonths; i++) {
      const interest = balance * monthlyInterestRate;
      const principal = monthlyPayment - interest;
      balance -= principal;

      schedule.push({
        id: randId(8),
        month: i,
        payment: monthlyPayment.toFixed(2),
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance.toFixed(2),
      });
    }
    return schedule;
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const schedule = calculateAmortizationSchedule(amount, interestRate, period);

  return (
    <div style={{ overflowX: 'auto' }}>
      <div className="input-wrapper">
        <InputComponent
          id="amount"
          type="number"
          label="amount"
          value={amount}
          onChange={handleAmount}
        />
        <InputComponent
          id="interestRate"
          type="number"
          label="interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <InputComponent
          id="period"
          type="number"
          label="period months"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
      </div>
      {!amount || !interestRate || !period ? null : (
        <table>
          <thead>
            <tr>
              <th>MONTH</th>
              <th>PMT</th>
              <th>PRINCIPAL</th>
              <th>INTEREST</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((amort) => (
              <tr key={amort.id}>
                <td>{amort.month}</td>
                <td>
                  <CurrencyFormat
                    value={amort.payment}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
                <td>
                  <CurrencyFormat
                    value={amort.principal}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
                <td>
                  <CurrencyFormat
                    value={amort.interest}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
                <td>
                  <CurrencyFormat
                    value={amort.balance}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AmortScheduleComponent;
