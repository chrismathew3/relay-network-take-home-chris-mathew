import React from "react";
import { Box } from "@chakra-ui/react";
import VoterPagePercentageSection from "./VoterPagePercentageSection";
import VoterPageTable from "./VoterPageTable";

const VoterPage: React.FC = () => {
  return (
    <Box id="VoterPage">
      <VoterPagePercentageSection/>
      <VoterPageTable />
    </Box>
  );
};

export default VoterPage;
