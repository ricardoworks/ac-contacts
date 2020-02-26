import React from "react";
import "./App.scss";
import ContactTable from "./components/ContactTable";
import { fetchACData } from "./services/fetchACData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null
    };
  }

  componentDidMount() {
    const contactsUrl =
      "https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts";
    fetchACData(contactsUrl)
      .then(data => {
        this.setState({
          contacts: data.contacts.map(contact => {
            return contact;
          })
        });
      })
      .catch(error => {
        const { message } = error;
        this.setState({ error: message });
      });
  }

  render() {
    const { contacts, error } = this.state;
    if (error) {
      return (
        <div className="error">
          <div className="errorIcon">!</div>
          <div className="errorText">Error: {error}</div>
          <div className="errorClose">&#10005;</div>
        </div>
      );
    }
    return (
      <div>
        <ContactTable contacts={contacts} />
      </div>
    );
  }
}

export default App;
