import React from "react";
import { Select, Spinner } from "@chakra-ui/react";
import useVoterStats from "./hooks/useVoterStats";
import useVoterPage from "./useVoterPage";

const VoterPageSegmentDropDown: React.FC = () => {
  const { data, error } = useVoterStats();

  const segment: string = useVoterPage((state) => {
    return state.segment;
  });

  const loading = !data && !error;

  if (loading) {
    return <Spinner />;
  }

  const fields = Object?.keys(data?.data?.fields)?.filter((v) => v !== "the_geom" && v !== 'the_geom_webmercator' && v !== 'ward');

  const handleChange = (e: { target: { value: any } }) => {
    useVoterPage.setState({
      segment: e.target.value,
    });
  };

  return (
    <Select
      placeholder="Select Segment"
      value={segment}
      onChange={handleChange}
      m="2rem"
      width={'30%'}
    >
      {fields?.map((field) => {
        return (
          <option key={field} value={field}>
            {field}
          </option>
        );
      })}
    </Select>
  );
};

export default VoterPageSegmentDropDown;
