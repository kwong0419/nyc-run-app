`
// Queens	Team WEPA	Active	https://www.instagram.com/team_wepa_nyc/	Queens Bully, 113-30 Queens Boulevard	Thursday		6:45 PM	Membership?	NYRR
// Queens	Run LIC	Active	https://www.meetup.com/LongIslandCity-Runners/	LIC - Corner 46th Rd & 5th St Meet	Monday	4M	7:00 AM	Free, all levels
// Queens	Run LIC	Active	https://www.meetup.com/LongIslandCity-Runners/	LIC Ferry Stop 46th Ave & Waterfront	Wednesday	3M	6:30 PM	Free, all levels
// Queens	Run LIC	Active	https://www.meetup.com/LongIslandCity-Runners/	LIC - Corner 46th Rd & 5th St Meet	Thursday	Speed	6:30 PM	Free, all levels
// Queens	Run LIC	Active	https://www.meetup.com/LongIslandCity-Runners/	LIC - John Murray Park, 45th Rd. and 11th St near the Citibikes	Saturday	Long Run 4-6M	7:00 AM	Free, all levels
// Queens	Run Hustle Run	Active	https://www.instagram.com/runhustlerun/	Richmond Hill - Hustle Barber Shop, 135-22 Hillside Avenue, Richmond Hill, NY 11418	Tuesday		7:00 PM	Free, all levels
// Queens	Run Hustle Run	Active	https://www.instagram.com/runhustlerun/	Forest Park - Victory Field Track	Thursday	Track	6:00 AM	Free, all levels
// Queens	Run Hustle Run	Active	https://www.instagram.com/runhustlerun/	Richmond Hill - Hustle Barber Shop, 135-22 Hillside Avenue, Richmond Hill, NY 11418	Sunday	Long Run	6:45 AM	Free, all levels
// Queens	Woodside-Sunnyside Runners	Active	https://www.meetup.com/Woodside-Sunnyside-Runners/?_cookie-check=_rB-Q70x-pvBinUq	Woodside Ave & 54th Street	Tuesday	3.5M	7:00 PM	Free, all levels
// Queens	Woodside-Sunnyside Runners	Active	https://www.meetup.com/Woodside-Sunnyside-Runners/?_cookie-check=_rB-Q70x-pvBinUq	Astoria Park - Front of Field House	Wednesday	Track	7:00 PM	Free, all levels
// Queens	Woodside-Sunnyside Runners	Active	https://www.meetup.com/Woodside-Sunnyside-Runners/?_cookie-check=_rB-Q70x-pvBinUq	Skillman Ave & 43rd Street	Thursday	6M	7:00 PM	Free, all levels
// Queens	Woodside-Sunnyside Runners	Active	https://www.meetup.com/Woodside-Sunnyside-Runners/?_cookie-check=_rB-Q70x-pvBinUq	Woodside Ave & 54th Street	Saturday	3.5M	8:30 AM	Free, all levels
// Queens	Woodside-Sunnyside Runners	Active	https://www.meetup.com/Woodside-Sunnyside-Runners/?_cookie-check=_rB-Q70x-pvBinUq	Varies - see website	Sunday	Varies - see website	Varies - check website	Free, all levels
// Queens	World's Fair Run Crew (WFRC)	Active	https://www.instagram.com/worldsfairruncrew/	Alumni, 135-18 Northern BLVD	Wednesday		6:45 PM	Free, all levels
`
const Team = 
[{ 
  "team_id": "001",
  "name": "Team WEPA",
  "borough": "Queens",
  "status": "Active",
  "instagram": "https://www.instagram.com/team_wepa_nyc/",
  "website": "",
  "location": "Queens Bully, 113-30 Queens Boulevard",
  "membership": true,
  "Description": "",
},
{
  "team_id": "002",
  "name": "Run LIC",
  "borough": "Queens",
  "status": "Active",
  "instagram": "https://www.meetup.com/LongIslandCity-Runners/",
  "website": "",
  "location": "LIC - Corner 46th Rd & 5th St Meet",
  "membership": false,
  "Description": "",
},
{
  "team_id": "003",
  "name": "Run Hustle Run",
  "borough": "Queens",
  "status": "Active",
  "instagram": "https://www.instagram.com/runhustlerun/",
  "website": "",
  "location": "Richmond Hill - Hustle Barber Shop, 135-22 Hillside Avenue, Richmond Hill, NY 11418",
  "membership": false,
  "Description": "",
},
{
  "team_id": "004",
  "name": "Woodside-Sunnyside Runners",
  "borough": "Queens",
  "status": "Active",
  "instagram": "https://www.meetup.com/Woodside-Sunnyside-Runners/?_cookie-check=_rB-Q70x-pvBinUq",
  "website": "",
  "location": "Woodside Ave & 54th Street",
  "membership": false,
  "Description": "",
},
{
  "team_id": "005",
  "name": "World's Fair Run Crew (WFRC)",
  "borough": "Queens",
  "status": "Active",
  "instagram": "https://www.instagram.com/worldsfairruncrew/",
  "website": "",
  "location": "Alumni, 135-18 Northern BLVD",
  "membership": false,
  "Description": "",
}]

const event =
[{
  "team_id": "001",
  "day": "Thursday",
  "time": "6:45 PM",
  "recurring": true,
  "location": "Queens Bully, 113-30 Queens Boulevard",
  "meetup_info": "Free, all levels",
},
{
  "team_id": "002",
  "day": "Monday",
  "time": "7:00 AM",
  "recurring": true,
  "location": "LIC - Corner 46th Rd & 5th St Meet",
  "meetup_info": "Free, all levels",
},{
  "team_id": "002",
  "day": "Wednesday",
  "time": "6:30 PM",
  "recurring": true,
  "location": "LIC Ferry Stop 46th Ave & Waterfront",
  "meetup_info": "Free, all levels",
},{
  "team_id": "002",
  "day": "Thursday",
  "time": "6:30 PM",
  "recurring": true,
  "location": "LIC - Corner 46th Rd & 5th St Meet",
  "meetup_info": "Free, all levels",
},{
  "team_id": "002",
  "day": "Saturday",
  "time": "7:00 AM",
  "recurring": true,
  "location": "LIC - John Murray Park, 45th Rd. and 11th St near the Citibikes",
  "meetup_info": "Free, all levels",
},{
  "team_id": "003",
  "day": "Tuesday",
  "time": "7:00 PM",
  "recurring": true,
  "location": "Richmond Hill - Hustle Barber Shop, 135-22 Hillside Avenue, Richmond Hill, NY 11418",
  "meetup_info": "Free, all levels",
},{
  "team_id": "003",
  "day": "Thursday",
  "time": "6:00 AM",
  "recurring": true,
  "location": "Forest Park - Victory Field Track",
  "meetup_info": "Free, all levels",
},{
  "team_id": "003",
  "day": "Sunday",
  "time": "6:45 AM",
  "recurring": true,
  "location": "Richmond Hill - Hustle Barber Shop, 135-22 Hillside Avenue, Richmond Hill, NY 11418",
  "meetup_info": "Free, all levels",
},{
  "team_id": "004",
  "day": "Tuesday",
  "time": "7:00 PM",
  "recurring": true,
  "location": "Woodside Ave & 54th Street",
  "meetup_info": "Free, all levels",
},{
  "team_id": "004",
  "day": "Wednesday",
  "time": "7:00 PM",
  "recurring": true,
  "location": "Astoria Park - Front of Field House",
  "meetup_info": "Free, all levels",
},{
  "team_id": "004",
  "day": "Thursday",
  "time": "7:00 PM",
  "recurring": true,
  "location": "Skillman Ave & 43rd Street",
  "meetup_info": "Free, all levels",
},{
  "team_id": "004",
  "day": "Saturday",
  "time": "8:30 AM",
  "recurring": true,
  "location": "Woodside Ave & 54th Street",
  "meetup_info": "Free, all levels",
}]