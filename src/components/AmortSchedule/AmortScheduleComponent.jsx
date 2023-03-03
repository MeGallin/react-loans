import { useState } from 'react';
import './AmortScheduleComponent.css';
import CurrencyFormat from 'react-currency-format';
import InputComponent from '../Input/InputComponent';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { randId } from '../../Utils/randomIdGenerator';

const AmortScheduleComponent = () => {
  const [amount, setAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [period, setPeriod] = useState(36);

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
        payment: Number(monthlyPayment.toFixed(2)),
        principal: Number(principal.toFixed(2)),
        interest: Number(interest.toFixed(2)),
        balance: Number(balance.toFixed(2)),
      });
    }
    return schedule;
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const schedule = calculateAmortizationSchedule(amount, interestRate, period);

  const totalPMT = () => {
    if (schedule) {
      const payments = schedule.map((pmt) => pmt.payment);
      return payments.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    }
  };
  const totalIntPmt = () => {
    if (schedule) {
      const intPayments = schedule.map((int) => int.interest);
      return intPayments.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    }
  };

  return (
    <>
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

        <div style={{ width: '100%', height: 360, margin: '10px auto' }}>
          <ResponsiveContainer>
            <LineChart
              width={500}
              height={300}
              data={schedule}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="2 10" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="interest"
                stroke="orange"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="payment" stroke="pink" />
              <Line type="monotone" dataKey="principal" stroke="blue" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {!amount || !interestRate || !period ? null : (
          <>
            <div className="summary-wrapper">
              <h3>Summary</h3>
              <div>
                TOTAL PAYMENTS{' '}
                <CurrencyFormat
                  value={totalPMT().toFixed(2)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                />
              </div>
              <div>
                TOTAL INTEREST PAYMENTS{' '}
                <CurrencyFormat
                  value={totalIntPmt().toFixed(2)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>MO</th>
                  <th>PMT</th>
                  <th>PV</th>
                  <th>INT</th>
                  <th>BAL</th>
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
          </>
        )}
      </div>
    </>
  );
};

export default AmortScheduleComponent;
