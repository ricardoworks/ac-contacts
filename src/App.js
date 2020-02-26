import React from "react";
import "./App.scss";
import ContactTable from "./components/ContactTable";
import { fetchACData } from "./services/fetchACData";
import loadingIcon from "./assets/images/loading.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    const contactsUrl =
      "https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts";
    this.fetchInitialData(contactsUrl);
  }

  fetchInitialData(url) {
    return fetchACData(url)
      .then(data => {
        this.setState({
          loading: false,
          contacts: data.contacts.map(contact => {
            return contact;
          })
        });
      })
      .catch(error => {
        const { message } = error;
        this.setState({ loading: false, error: message });
      });
  }

  render() {
    const { contacts, error, loading } = this.state;
    if (error) {
      return (
        <div id="errorModal">
          <div className="errorIcon">!</div>
          <div className="errorText">Error: {error}</div>
          <div className="errorClose">&#10005;</div>
        </div>
      );
    }
    if (loading) {
      return (
        <div id="loader">
          <img src={loadingIcon} alt="Loading" />
        </div>
      );
    }
    return <ContactTable contacts={contacts} />;
  }
}

export default App;
