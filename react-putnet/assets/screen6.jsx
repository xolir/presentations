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
      ? fullEventData.filter(evt => evt.eventDate > dateNow)
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
