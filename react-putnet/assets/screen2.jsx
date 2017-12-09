import React from 'react';
import './event-card.css';

const EventCard = () => (
  <div>
    <h2>react-putnet</h2>
    <p>4-12-2017</p>
    <p>Introduction to React</p>
  </div>
);

<EventCard/>

const EventCard = () => (
  <div>
    <h2 className="event-card-header">react-putnet</h2>
    <p className="event-card-date">4-12-2017</p>
    <p className="event-card-description">Introduction to React</p>
  </div>
);