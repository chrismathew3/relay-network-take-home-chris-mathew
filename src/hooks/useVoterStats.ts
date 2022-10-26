import useSWR, { SWRResponse } from 'swr';
import axios from 'axios';

 const useVoterStats = (): SWRResponse => {
    return useSWR('GET_VOTER_DATA', async () => {
      return await axios.get(`https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id`);
    });
  };
  
  export default useVoterStats;
  