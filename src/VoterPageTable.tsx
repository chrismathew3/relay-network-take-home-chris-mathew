import {
  Spinner,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import useVoterStats from "./hooks/useVoterStats";
import useVoterPage from "./useVoterPage";

const VoterPageTable = () => {
  const currentSegmentName: string = useVoterPage((state) => {
    return state.segment;
  });

  const { data, error } = useVoterStats();

  const loading = !data && !error;

  if (loading) {
    return <Spinner />;
  }

  const rows = data?.data?.rows;
  const fields = Object.keys(data?.data?.fields).filter(
    (v) => v !== "the_geom" && v !== "the_geom_webmercator" && v !== "ward"
  );
  
  const totalVoterCount = rows
    .map((row: any) => {
      return row["total"];
    })
    .reduce((prev: number, curr: number) => prev + curr, 0);

  const currentVoterCount = rows
    .map((row: any) => {
      return row[currentSegmentName];
    })
    .reduce((prev: number, curr: number) => prev + curr, 0);
  const currentVoterPercentage = ((currentVoterCount / totalVoterCount) * 100).toFixed(2);

  return (
    <TableContainer m="2rem">
      <Table variant="simple">
        <TableCaption>Philadelphia Qualified Voter Listing 2018</TableCaption>
        <Thead>
          <Tr>
            {fields.map((field) => (
              <Th>{field}</Th>
            ))}
            <Th>%</Th>
          </Tr>
        </Thead>
        <Tbody>
           {rows.map((row: any) => {return (
               <Tr>
                   {fields.map((field) => {return (
                       <Td>{row[field]}</Td>
                   )})}
                   <Td>{((row[currentSegmentName]/row['total']) * 100).toFixed(2)}</Td>
               </Tr>
           )})} 
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default VoterPageTable;
