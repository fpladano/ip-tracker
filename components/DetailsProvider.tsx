import { createContext, useContext, useState } from 'react';

interface DetailsContextInterface {
  detailsData: Details;
  updateDetails: (data: Details) => void;
}

interface Props {
  children: React.ReactNode;
}

const DetailsContext = createContext<DetailsContextInterface | null>(null);

const defaultValue = {
  ip: '8.8.8.8',
  isp: 'Google LLC',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.38605,
    lng: -122.08385,
    postalCode: '94035',
    timezone: '-07:00',
    geonameId: 5375480,
  },
};

export function DetailsProvider({ children }: Props) {
  const [detailsData, setDetailsData] = useState<Details>(defaultValue);

  const updateDetails = (data: Details) => {
    setDetailsData(data);
  };

  return (
    <DetailsContext.Provider value={{ detailsData, updateDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}

export function useDetailsContext() {
  return useContext(DetailsContext);
}
