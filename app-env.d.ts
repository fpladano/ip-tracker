interface Details {
  ip: string;
  isp: string;
  location: LocationDetails;
}

interface LocationDetails {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
