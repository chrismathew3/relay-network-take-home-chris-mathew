import React from "react";
import { Box } from "@chakra-ui/react";
import VoterPagePercentageSection from "./VoterPagePercentageSection";
import VoterPageTable from "./VoterPageTable";

const VoterPage: React.FC = () => {


    return (
        <Box>
            <VoterPagePercentageSection/>
            <VoterPageTable/>
        </Box>
    )

}

export default VoterPage;