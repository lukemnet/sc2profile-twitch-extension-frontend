import React from 'react';
import RefreshPageButton from 'components/RefreshPageButton/RefreshPageButton';

const ConfigDataError = () => (
  <p>Error fetching configuration data. <RefreshPageButton /></p>
);

export default ConfigDataError;