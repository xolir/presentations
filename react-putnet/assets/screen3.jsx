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

const EventCard = (props) => (
  <div>
    <h2>{ props.eventName }</h2>
    <p>{ props.eventDate }</p>
    <p>{ props.eventDescription }</p>
  </div>
);

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
    <EventCard
      eventName={eventData[0].eventName}
      eventDate={eventData[0].eventDate}
      eventDescription={eventData[0].eventDescription}
    />
    <EventCard
      eventName={eventData[1].eventName}
      eventDate={eventData[1].eventDate}
      eventDescription={eventData[1].eventDescription}
    />
  </div>
);