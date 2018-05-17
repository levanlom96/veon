export const PERSONAL_INFO_MOCK: PersonalInfo[] = [
  {
    Name: '',
    LastName: '',
    ID: '',
    Seat: 33,
    Type: 'Departure'
  },
  {
    Name: '',
    LastName: '',
    ID: '',
    Seat: 35,
    Type: 'Return'
  },
];

export interface PersonalInfo {
  Name: string;
  LastName: string;
  ID: string;
  Seat: number;
  Type: string;
}
