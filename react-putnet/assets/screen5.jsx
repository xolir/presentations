import ReactDOM from 'react-dom';
import React from 'react';

const eventData = [
  {
    eventName: 'webpack-putnet',
    eventDate: '11/27/2017',
    eventDescription: 'Introduction to Webpack'
  },
  {
    eventName: 'react-putnet',
    eventDate: '12/4/2017',
    eventDescription: 'Introduction to React'
  }
];

const EventCard = ({ eventName, eventDate, eventDescription }) => (
  <div>
    <h2>{ eventName }</h2>
    <p>{ eventDate }</p>
    <p>{ eventDescription }</p>
  </div>
);

const AppContainer = () => (
  <div>
    <h1>Put net events</h1>
    {
      eventData.map(evt => (
        <EventCard
          eventName={evt.eventName}
          eventDate={evt.eventDate}
          eventDescription={evt.eventDescription}
        />
      ))
    }
  </div>
);

ReactDOM.render(<AppContainer/>, document.getElementById('app'));