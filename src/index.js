import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const toPerson = {
  fullName: 'Mr. Receiver',
  address: '123 Fake st.\n Boston, MA 02118',
};

const fromPerson = {
  fullName: 'Mr. Sender',
  address: '123 Fake st.\n San Francisco, CA 94101',
};

const AdressLabel = ({ person }) => {
  return (
    <div>
      <div>{person.fullName}</div>
      <div className='display-linebreak'>{person.address}</div>
    </div>
  );
};

const Envelope = ({ to, from }) => {
  return (
    <div className='envelope'>
      <div className='stamp'>
        <div className='stamp-text'>STAMP</div>
      </div>
      <div className='sender'>
        <AdressLabel person={from} />
      </div>
      <div className='receiver'>
        <AdressLabel person={to} />
      </div>
    </div>
  );
};

ReactDOM.render(
  <Envelope to={toPerson} from={fromPerson} />,
  document.querySelector('#root')
);
