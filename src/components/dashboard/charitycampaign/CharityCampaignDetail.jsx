import React from 'react';
import { useParams } from 'react-router-dom';

const CharityCampaignDetail = () => {
  const { id } = useParams();

  // Fetch detail data using id here, if needed

  return (
    <div>
      <h1>Detail Charity Campaign - {id}</h1>
      {/* Tampilkan detail campaign di sini */}
    </div>
  );
};

export default CharityCampaignDetail;
