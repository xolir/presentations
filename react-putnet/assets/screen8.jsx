import ReactDOM from 'react-dom';
import React from 'react';

const fullEventData = [
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

class AppContainer extends React.Component {
  constructor() {
    this.state = {
      eventData: [],
      filterActive: false,
    };
  }
  componentWillMount() {
    axios.get('/api/events').then(response => {
      this.setState(state => ({
        state,
        eventData: response.data
      }));
    });
  }
  toggleFilter() {
    const dateNow = new Date();
    const eventData = !this.state.filterActive
      ? fullEventData.filter(event => event.eventDate > dateNow)
      : fullEventData;

    this.setState(state => ({
      filterActive: !state.filterActive,
      eventData: eventData,
    }))
  }
  render() {
    return (
      <div>
        <h1>Put net events</h1>
        <button onClick={this.toggleFilter.bind(this)}>Filter past events</button>
        {
          this.state.eventData.map(event => (
            <EventCard
              eventName={event.eventName}
              eventDate={event.eventDate}
              eventDescription={event.eventDescription}
            />
          ))
        }
      </div>
    )
  }
}
