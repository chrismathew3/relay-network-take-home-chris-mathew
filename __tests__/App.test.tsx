import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";
import VoterPage from "../src/VoterPage";
const data = {
  rows: [
    {
      the_geom: null,
      the_geom_webmercator: null,
      ward: "Totals:",
      dem: 798647,
      rep: 116884,
      other_party: 119889,
      total: 1035420,
      white: 189630,
      black: 291084,
      hispanic: 69485,
      other_race: 33868,
      male: 337264,
      female: 417251,
      unknown_sex: 280905,
    },
  ],
  time: 0.003,
  fields: {
    the_geom: {
      type: "geometry",
      wkbtype: "Unknown",
      dims: 2,
      srid: 4326,
    },
    the_geom_webmercator: {
      type: "geometry",
      wkbtype: "Unknown",
      dims: 2,
      srid: 3857,
    },
    ward: {
      type: "string",
      pgtype: "text",
    },
    dem: {
      type: "number",
      pgtype: "int4",
    },
    rep: {
      type: "number",
      pgtype: "int4",
    },
    other_party: {
      type: "number",
      pgtype: "int4",
    },
    total: {
      type: "number",
      pgtype: "int4",
    },
    white: {
      type: "number",
      pgtype: "int4",
    },
    black: {
      type: "number",
      pgtype: "int4",
    },
    hispanic: {
      type: "number",
      pgtype: "int4",
    },
    other_race: {
      type: "number",
      pgtype: "int4",
    },
    male: {
      type: "number",
      pgtype: "int4",
    },
    female: {
      type: "number",
      pgtype: "int4",
    },
    unknown_sex: {
      type: "number",
      pgtype: "int4",
    },
  },
  total_rows: 67,
};

jest.mock("../src/hooks/useVoterStats", () => {
  return jest.fn(() => ({
    data: { data },
  }));
});

describe("<App/>", () => {
  test("<VoterPage/> should render", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<VoterPage/>", () => {
  let component;
  let tree;
  beforeEach(() => {
    component = renderer.create(<VoterPage />);
    tree = component.toJSON();
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  

  test("<VoterPage/> first tag should be be <div/> and should match snapshot", () => {
    expect(
      tree.type
    ).toEqual("div");
    expect(
      tree.props.id
    ).toEqual("VoterPage");
    expect(tree).toMatchSnapshot();
  });

  test("<VoterPage/> children should be <VoterPagePercentageSection/> and <VoterPageTable/> ", () => {
    expect(
      tree.children[0].type
    ).toEqual("div");
    expect(
      tree.children[0].props.id
    ).toEqual("VoterPagePercentageSection");
    expect(
      tree.children[1].type
    ).toEqual("div");
    expect(
      tree.children[1].props.id
    ).toEqual("VoterPageTable");
  });

  test("<VoterPagePercentageSection/> children should be <VoterPageSegmentDropDown/> and <h2/> ", () => {
    expect(
      tree.children[0].children[0].type
    ).toEqual("h2");
    expect(
      tree.children[0].children[1].type
    ).toEqual("h2");
    expect(
      tree.children[0].children[2].type
    ).toEqual("div");
    console.log(tree.children[0].children[2].children[0].props.id)
    expect(
      tree.children[0].children[2].children[0].props.id
    ).toEqual("VoterPageSegmentDropDown");
    expect(
      tree.children[0].children[2].children[0].children.length
     ).toEqual(12);
  });
});
