import ReactDOM from 'react-dom';
import React from 'react';

const EventCard = ({ eventName, eventDate, eventDescription }) => (
  <div>
    <h2>{ eventName }</h2>
    <p>{ eventDate }</p>
    <p>{ eventDescription }</p>
  </div>
);

const fullEventsData = [
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

export default class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      eventsData: fullEventsData,
      filterActive: false,
    };
  }
  toggleFilter() {
    const dateNow = new Date();
    const eventData = !this.state.filterActive
      ? fullEventsData.filter(evt => new Date(evt.eventDate) > dateNow)
      : fullEventsData;

    this.setState(state => ({
      filterActive: !state.filterActive,
      eventsData: eventData,
    }))
  }
  render() {
    return (
      <div>
        <h1>Put net events</h1>
        <button onClick={this.toggleFilter.bind(this)}>Filter past events</button>
        {
          this.state.eventsData.map(evt => (
            <EventCard
              eventName={evt.eventName}
              eventDate={evt.eventDate}
              eventDescription={evt.eventDescription}
            />
          ))
        }
      </div>
    )
  }
}

