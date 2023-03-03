import { useState } from 'react';
import './CapitalAppreciationComponent.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import CurrencyFormat from 'react-currency-format';
import InputComponent from '../Input/InputComponent';
import { randId } from '../../Utils/randomIdGenerator';

export const CapitalAppreciationComponent = () => {
  const [initialValue, setInitialValue] = useState(10000);
  const [interestRate, setInterestRate] = useState(0.1);
  const [periodInYears, setPeriodInYears] = useState(2);

  function calculateMonthlyAppreciationSchedule(
    initialValue,
    interestRate,
    periodInYears,
  ) {
    let schedule = [];
    let currentValue = Number(initialValue);
    let periodInMonths = Number(periodInYears * 12);

    for (let i = 1; i <= periodInMonths; i++) {
      let interestEarned = currentValue * (interestRate / 12);
      currentValue += interestEarned;
      schedule.push({
        id: randId(8),
        month: i,
        startingValue: i === 1 ? initialValue : schedule[i - 2].endingValue,
        interestEarned: Number(interestEarned.toFixed(2)),
        endingValue: Number(currentValue.toFixed(2)),
      });
    }
    return schedule;
  }

  const schedule = calculateMonthlyAppreciationSchedule(
    initialValue,
    interestRate,
    periodInYears,
  );

  const endVal = schedule[schedule.length - 1]?.endingValue;
  const accumulatedInt = () => {
    if (schedule) {
      const tempArray = schedule.map((intEarned) => intEarned.interestEarned);
      return tempArray.reduce((acc, val) => {
        return acc + val;
      }, 0);
    }
  };

  return (
    <>
      <div style={{ overflowX: 'auto' }}>
        <div className="input-wrapper">
          <InputComponent
            id="initialValue"
            type="number"
            label="initialValue"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
          <InputComponent
            id="interestRate"
            type="number"
            label="interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <InputComponent
            id="periodInYears"
            type="number"
            label="periodInYears years"
            value={periodInYears}
            onChange={(e) => setPeriodInYears(e.target.value)}
          />
        </div>

        <div style={{ width: '100%', height: 360, margin: '10px auto' }}>
          <ResponsiveContainer>
            <BarChart
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
              <Bar
                dataKey="startingValue"
                fill="rgba(51,51,51,1)"
                stackId="a"
              />
              <Bar dataKey="interestEarned" fill="blue" stackId="a" />
              <Bar dataKey="endingValue" fill="green" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          {' '}
          <h3>Summary</h3>
          <div>
            INITIAL IVESTMENT{' '}
            <CurrencyFormat
              value={initialValue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
            />{' '}
          </div>
          <div>
            RETURN{' '}
            <CurrencyFormat
              value={accumulatedInt()}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
            />{' '}
            @ {interestRate * 100}%
          </div>
          <div>
            END BALANCE{' '}
            <CurrencyFormat
              value={endVal}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>MONTH</th>
              <th>PRINCIPAL</th>
              <th>INTEREST EARNED</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => (
              <tr key={item.id}>
                <td>{item.month}</td>
                <td>
                  <CurrencyFormat
                    value={item.startingValue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
                <td>
                  <CurrencyFormat
                    value={item.interestEarned}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
                <td>
                  <CurrencyFormat
                    value={item.endingValue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
