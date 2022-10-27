import React from "react";
import { Heading, Box, Spinner } from "@chakra-ui/react";
import useVoterStats from "./hooks/useVoterStats";
import useVoterPage from "./useVoterPage";
import VoterPageSegmentDropDown from "./VoterPageSegmentDropDrown";
const VoterPagePercentageSection: React.FC = () => {
  const currentSegmentName: string = useVoterPage((state) => {
    return state.segment;
  });

  const { data, error } = useVoterStats();

  const loading = !data && !error;

  if (loading) {
    return <Spinner />;
  }

  const rows = data?.data?.rows;

  const segmentName = "dem";
  const totalVoterCount = rows
    ?.map((row: any) => {
      return row["total"];
    })
    ?.reduce((prev: number, curr: number) => prev + curr, 0);
  const voterCount = rows
    ?.map((row: any) => {
      return row[segmentName];
    })
    ?.reduce((prev: number, curr: number) => prev + curr, 0);
  const voterPercentage = ((voterCount / totalVoterCount) * 100)?.toFixed(2);
  const currentVoterCount = rows
    ?.map((row: any) => {
      return row[currentSegmentName];
    })
    ?.reduce((prev: number, curr: number) => prev + curr, 0);
  const currentVoterPercentage = ((currentVoterCount / totalVoterCount) * 100)?.toFixed(2);


  return (
    <Box display={"flex"} flexDirection="row" justifyContent={"space-between"}>
      <Heading size={"sm"} m="2rem">
        {`Top Segment of All Voters: ${segmentName} - ${voterCount} - ${voterPercentage}%`}
      </Heading>
      <Heading size={"sm"} m="2rem">
        {`Percentage of All Voters that are ${currentSegmentName} - ${currentVoterCount} - ${currentVoterPercentage}%`}
      </Heading>
      <VoterPageSegmentDropDown />
    </Box>
  );
};

export default VoterPagePercentageSection;
