import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const info = {
  name: 'Mr. customer',
  expirationDate: '05/25',
  creditCardNumer: '5487 5695 2145 8623',
  bankName: 'Deutch Bank',
};

const CreditCard = ({ cardInfo }) => {
  return (
    <div className='body'>
      <div className='bank-name'>{cardInfo.bankName}</div>
      <br />
      <div className='card-number'>{cardInfo.creditCardNumer}</div>
      <div className='card-number-f'>
        {cardInfo.creditCardNumer.substring(0, 4)}
      </div>
      <div className='exp'>
        <span className='valid-thru'>VALID THRU </span>
        {cardInfo.expirationDate}
      </div>
      <div className='name'>{cardInfo.name}</div>
    </div>
  );
};

ReactDOM.render(
  <CreditCard cardInfo={info} />,
  document.querySelector('#root')
);
