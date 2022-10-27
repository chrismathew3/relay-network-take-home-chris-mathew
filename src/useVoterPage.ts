import create from "zustand";

export type VoterPageState = {
  segment: string;
};

const useVoterPage = create<VoterPageState>(() => {
  return {
    segment: "",
  };
});

export default useVoterPage;
