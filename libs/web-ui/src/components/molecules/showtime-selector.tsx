import React from 'react';
import useCinemaBranchStore from '../../stores/cinema-branch-store';

const ShowtimeSelector = () => {
  const { selectedBranch } = useCinemaBranchStore();
  return (
    <div>
      {selectedBranch && <div>
        <img src={selectedBranch.logo_url} alt='cinema logo'/>
        <p>{selectedBranch.name}</p>
        <p>{selectedBranch.address}</p>
      </div>}
    </div>
  );
};

export default ShowtimeSelector;
