import React from 'react';
import { Button, View, Text } from 'react-native';

const EventCard = ({ eventName, eventDate, eventDescription }) => (
  <View>
    <Text>{ eventName }</Text>
    <Text>{ eventDate }</Text>
    <Text>{ eventDescription } </Text>
  </View>
);

class AppContainer extends React.Component {
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
      ? fullEventData.filter(event => event.eventDate > dateNow)
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
        <Button onPress={this.toggleFilter.bind(this)}>Filter past events</Button>
        {
          this.state.eventData.map(event => (
            <EventCard
              eventName={event.eventName}
              eventDate={event.eventDate}
              eventDescription={event.eventDescription}
            />
          ))
        }
      </View>
    )
  }
}
