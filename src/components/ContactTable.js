import React from "react";
import PropTypes from "prop-types";

function ContactTable(props) {
  const { contacts } = props;
  return (
    <table id="contactTable">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Contact</th>
          <th>
            <div id="totalValueText">Total Value</div>
            <div className="triangleDown" />
          </th>
          <th>Location</th>
          <th>Deals</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact;
          const firstInitial = firstName ? firstName.split("")[0] : "";
          const lastInitial = lastName ? lastName.split("")[0] : "";
          const initials = `${firstInitial}${lastInitial}`;
          // Data is missing: total value, location deals, and tags
          // Putting placeholder data for now
          return (
            <tr className="contacts" key={`${index}-${new Date().getTime()}`}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="userIcon">{initials}</div>
                <div className="userName">
                  <a href="/#">{`${firstName} ${lastName}`}</a>
                </div>
              </td>
              <td>$00,000</td>
              <td>Chicago, IL, USA</td>
              <td>2</td>
              <td>customer, new deals</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

ContactTable.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ContactTable;
