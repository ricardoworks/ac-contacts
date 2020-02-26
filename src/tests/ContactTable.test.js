import React from "react";
import { shallow } from "enzyme";
import ContactTable from "../components/ContactTable";

let wrapper;

beforeEach(() => {
  const contacts = [
    { firstName: "Bob", lastName: "Builder" },
    { firstName: "Dave", lastName: "Mathew" }
  ];
  wrapper = shallow(<ContactTable contacts={contacts} />);
});

describe("<ContactTable />", () => {
  describe("#render", () => {
    it("Should render a #contactTable element", () => {
      expect(wrapper.exists("#contactTable")).toBe(true);
    });
    it("Should render 2 .contacts elements", () => {
      expect(wrapper.find(".contacts")).toHaveLength(2);
    });
  });
});
