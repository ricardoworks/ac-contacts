import React from "react";
import { mount } from "enzyme";
import App from "../App";

let wrapper;
const contactsUrl =
  "https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts";
beforeEach(() => {
  wrapper = mount(<App />);
});

describe("<App />", () => {
  describe("#fetchInitialData", () => {
    it("Should update the loading state to false when the call is complete", async () => {
      await wrapper.instance().fetchInitialData(contactsUrl);
      expect(wrapper.state().loading).toBe(false);
    });
    it("Should update the contacts state when the call is complete", async () => {
      await wrapper.instance().fetchInitialData(contactsUrl);
      expect(wrapper.state().contacts.length).toBeGreaterThan(0);
    });
  });
  describe("#render", () => {
    it("Should render #loader element before data is fetched", () => {
      expect(wrapper.exists("#loader")).toBe(true);
    });
    it("Should render #errorModal when error state has updated", () => {
      wrapper.setState({ error: "Error!" });
      expect(wrapper.exists("#errorModal")).toBe(true);
    });
    it("Should render #contactTable element when data is fetched", async () => {
      await wrapper.instance().fetchInitialData(contactsUrl);
      wrapper.update();
      expect(wrapper.exists("#contactTable")).toBe(true);
    });
  });
});
