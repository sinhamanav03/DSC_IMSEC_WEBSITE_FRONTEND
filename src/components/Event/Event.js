import { Component } from "react";
import EventCard from "./EventCard";
import Modal from "./Modal";

class Event extends Component {
  constructor(props) {
    super();

    this.state = {
      events: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    state.events = props.events;
    return state;
  }

  componentDidMount() {
    const M = window.M;
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }
  render() {
    return (
      <section>
        <section className="container">
          <div className="row">
            {this.state.events.map((event) => (
              <EventCard
                name={event.name}
                location={event.location}
                time={event.time}
              />
            ))}
          </div>
        </section>

        <div
          id="modal1"
          className="modal"
          style={{ fontFamily: "sans-serif" }}
        >
          {
            this.state.events.map(event => (
              <Modal {...event}/>
            ))
          }
        </div>
      </section>
    );
  }
}
export default Event;