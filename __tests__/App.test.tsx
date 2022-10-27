import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";
import VoterPage from "../src/VoterPage";
import axios from "axios";

const data = {
  "rows": [
      {
          "the_geom": null,
          "the_geom_webmercator": null,
          "ward": "Totals:",
          "dem": 798647,
          "rep": 116884,
          "other_party": 119889,
          "total": 1035420,
          "white": 189630,
          "black": 291084,
          "hispanic": 69485,
          "other_race": 33868,
          "male": 337264,
          "female": 417251,
          "unknown_sex": 280905
      }
  ],
  "time": 0.003,
  "fields": {
      "the_geom": {
          "type": "geometry",
          "wkbtype": "Unknown",
          "dims": 2,
          "srid": 4326
      },
      "the_geom_webmercator": {
          "type": "geometry",
          "wkbtype": "Unknown",
          "dims": 2,
          "srid": 3857
      },
      "ward": {
          "type": "string",
          "pgtype": "text"
      },
      "dem": {
          "type": "number",
          "pgtype": "int4"
      },
      "rep": {
          "type": "number",
          "pgtype": "int4"
      },
      "other_party": {
          "type": "number",
          "pgtype": "int4"
      },
      "total": {
          "type": "number",
          "pgtype": "int4"
      },
      "white": {
          "type": "number",
          "pgtype": "int4"
      },
      "black": {
          "type": "number",
          "pgtype": "int4"
      },
      "hispanic": {
          "type": "number",
          "pgtype": "int4"
      },
      "other_race": {
          "type": "number",
          "pgtype": "int4"
      },
      "male": {
          "type": "number",
          "pgtype": "int4"
      },
      "female": {
          "type": "number",
          "pgtype": "int4"
      },
      "unknown_sex": {
          "type": "number",
          "pgtype": "int4"
      }
  },
  "total_rows": 67
}

jest.mock("../src/hooks/useVoterStats", () => {
  return jest.fn(() => ({
    data: {data}
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
  test("<VoterPagePercentageSection/> should render", () => {
    const component = renderer.create(<VoterPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
