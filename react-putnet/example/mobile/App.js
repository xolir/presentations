import React from 'react';
import { Text, View, Button } from 'react-native';

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
  },
  {
    eventName: 'TBA',
    eventDate: '12/4/2020',
    eventDescription: 'TBA'
  }
];

const EventCard = ({ eventName, eventDate, eventDescription }) => (
  <View>
    <Text>{ eventName }</Text>
    <Text>{ eventDate }</Text>
    <Text>{ eventDescription }</Text>
  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eventData: fullEventData,
      filterActive: false,
    };
  }
  toggleFilter() {
    const dateNow = new Date();
    const eventData = !this.state.filterActive
      ? fullEventData.filter(l => new Date(l.eventDate) > dateNow)
      : fullEventData;

    this.setState(state => ({
      filterActive: !state.filterActive,
      eventData: eventData,
    }))
  }
  render() {
    return (
      <View>
        <Text>Put net events</Text>
        <Button title="Filter past events" onPress={this.toggleFilter.bind(this)}></Button>
        {
          this.state.eventData.map(evt => (
            <EventCard
              eventName={evt.eventName}
              eventDate={evt.eventDate}
              eventDescription={evt.eventDescription}
            />
          ))
        }
      </View>
    )
  }
}
