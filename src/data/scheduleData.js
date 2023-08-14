export const getOnlyRksSchedule = () => {
  const schedule = getAllTeamsSchedule();

  return schedule.map((fixture) => ({
    name: fixture.name.split(" - ")[0],
    match: fixture.match.find((match) => match.home === "RKS Radgoszcz" || match.away === "RKS Radgoszcz")
  }))
}

export const getNearestMatch = () => {
  const currentDate = new Date();
  let nearestMatch = null;
  let nearestDifference = Infinity;
  const matches = getOnlyRksSchedule()
  console.log(matches)

  for (const match of matches) {
    const matchDate = parsePolishDate(match.match);
    const timeDifference = Math.abs(matchDate - currentDate);

    if (timeDifference < nearestDifference) {
      nearestMatch = match;
      nearestDifference = timeDifference;
    }
  }

  return nearestMatch.match;
}

const months = {
  stycznia: 0, // January
  lutego: 1, // February
  marca: 2, // March
  kwietnia: 3, // April
  maja: 4, // May
  czerwca: 5, // June
  lipca: 6, // July
  sierpnia: 7, // August
  września: 8, // September
  października: 9, // October
  listopada: 10, // November
  grudnia: 11, // December
};

const parsePolishDate = (match) => {
  const dateString = match.date
  const [dayWithMonthString, time] = dateString.split(', ');
  const [day, month] = dayWithMonthString.split(' ');

  const matchDate = new Date();
  matchDate.setHours(parseInt(time.split(':')[0], 10));
  matchDate.setMinutes(parseInt(time.split(':')[1], 10));
  matchDate.setDate(parseInt(day, 10));
  matchDate.setMonth(months[month]);
  matchDate.setFullYear(match.year);

  return matchDate;
}

const getAllTeamsSchedule = () => {
  return BASIC_SCHEDULE.fixture
    .map((fix) => ({
      ...fix,
      match: fix.match.map((match) => {
        if (match.home === "Spartakus Radgoszcz") {
          return { ...match, home: "RKS Radgoszcz" }
        } else if (match.away === "Spartakus Radgoszcz") {
          return { ...match, away: "RKS Radgoszcz" }
        } else {
          return match
        }
      })
    }))
    .map((fix) => ({
      ...fix,
      match: fix.match.map((match) => {
        const [dayWithMonthString, time] = match.date.split(', ');
        const [day, month] = dayWithMonthString.split(' ');
        if (months[month] >= 7 && months[month] <= 11) {
          return { ...match, year: BASIC_SCHEDULE.start }
        } else {
          return { ...match, year: BASIC_SCHEDULE.end }
        }
      })
    }));
}

const BASIC_SCHEDULE = {
  "start": 2022,
  "end": 2023,
  "fixture": [
   {
    "name": "Kolejka 1 - 13-14 sierpnia",
    "match": [
     {
      "date": "13 sierpnia, 18:00",
      "home": "Brzoza Brzezówka",
      "away": "LKS Niwka",
      "score": "1-2"
     },
     {
      "date": "14 sierpnia, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "LKS Smęgorzów",
      "score": "1-0"
     },
     {
      "date": "14 sierpnia, 17:00",
      "home": "Polonia Kłyż",
      "away": "LZS Olesno",
      "score": "4-3"
     },
     {
      "date": "14 sierpnia, 11:00",
      "home": "Wolania Wola Żelichowska",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "7-2"
     },
     {
      "date": "14 sierpnia, 14:00",
      "home": "Kłos Słupiec",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "1-5"
     },
     {
      "date": "13 sierpnia, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Powiśle Bolesław",
      "score": "4-2"
     },
     {
      "date": "11 listopada, 13:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Spartakus Radgoszcz",
      "score": "5-4"
     }
    ]
   },
   {
    "name": "Kolejka 2 - 20-21 sierpnia",
    "match": [
     {
      "date": "21 sierpnia, 17:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Orzeł Miechowice Małe",
      "score": "0-0"
     },
     {
      "date": "21 sierpnia, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Kłos Słupiec",
      "score": "8-1"
     },
     {
      "date": "21 sierpnia, 11:00",
      "home": "LZS Olesno",
      "away": "Wolania Wola Żelichowska",
      "score": "1-4"
     },
     {
      "date": "21 sierpnia, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Polonia Kłyż",
      "score": "4-1"
     },
     {
      "date": "21 sierpnia, 11:00",
      "home": "LKS Niwka",
      "away": "Dunajec Ujście Jezuickie",
      "score": "1-0"
     },
     {
      "date": "20 sierpnia, 17:00",
      "home": "Spartakus Radgoszcz",
      "away": "Brzoza Brzezówka",
      "score": "1-0"
     },
     {
      "date": "21 sierpnia, 11:00",
      "home": "Powiśle Bolesław",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "0-6"
     }
    ]
   },
   {
    "name": "Kolejka 3 - 27-28 sierpnia",
    "match": [
     {
      "date": "27 sierpnia, 17:30",
      "home": "Brzoza Brzezówka",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "3-2"
     },
     {
      "date": "28 sierpnia, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Spartakus Radgoszcz",
      "score": "0-3"
     },
     {
      "date": "28 sierpnia, 14:00",
      "home": "Polonia Kłyż",
      "away": "LKS Niwka",
      "score": "1-3"
     },
     {
      "date": "27 sierpnia, 17:00",
      "home": "Wolania Wola Żelichowska",
      "away": "LKS Smęgorzów",
      "score": "1-1"
     },
     {
      "date": "28 sierpnia, 14:00",
      "home": "Kłos Słupiec",
      "away": "LZS Olesno",
      "score": "0-3"
     },
     {
      "date": "27 sierpnia, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "3-2"
     },
     {
      "date": "28 sierpnia, 11:00",
      "home": "Powiśle Bolesław",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "1-3"
     }
    ]
   },
   {
    "name": "Kolejka 4 - 3-4 września",
    "match": [
     {
      "date": "3 września, 17:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "0-5"
     },
     {
      "date": "4 września, 16:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Powiśle Bolesław",
      "score": "3-1"
     },
     {
      "date": "4 września, 11:00",
      "home": "LZS Olesno",
      "away": "Orzeł Miechowice Małe",
      "score": "3-0"
     },
     {
      "date": "4 września, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Kłos Słupiec",
      "score": "3-0"
     },
     {
      "date": "3 września, 17:00",
      "home": "LKS Niwka",
      "away": "Wolania Wola Żelichowska",
      "score": "2-3"
     },
     {
      "date": "3 września, 17:00",
      "home": "Spartakus Radgoszcz",
      "away": "Polonia Kłyż",
      "score": "5-0"
     },
     {
      "date": "3 września, 17:00",
      "home": "Brzoza Brzezówka",
      "away": "Dunajec Ujście Jezuickie",
      "score": "0-1"
     }
    ]
   },
   {
    "name": "Kolejka 5 - 10-11 września",
    "match": [
     {
      "date": "14 września, 17:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "3-4"
     },
     {
      "date": "11 września, 14:00",
      "home": "Polonia Kłyż",
      "away": "Brzoza Brzezówka",
      "score": "2-2"
     },
     {
      "date": "10 września, 17:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Spartakus Radgoszcz",
      "score": "1-1"
     },
     {
      "date": "11 września, 14:00",
      "home": "Kłos Słupiec",
      "away": "LKS Niwka",
      "score": "0-6"
     },
     {
      "date": "10 września, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "LKS Smęgorzów",
      "score": "2-3"
     },
     {
      "date": "10 września, 17:00",
      "home": "Powiśle Bolesław",
      "away": "LZS Olesno",
      "score": "1-6"
     },
     {
      "date": "11 września, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "4-3"
     }
    ]
   },
   {
    "name": "Kolejka 6 - 17-18 września",
    "match": [
     {
      "date": "18 września, 11:00",
      "home": "LZS Olesno",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "0-0"
     },
     {
      "date": "18 września, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Powiśle Bolesław",
      "score": "5-3"
     },
     {
      "date": "18 września, 11:00",
      "home": "LKS Niwka",
      "away": "Orzeł Miechowice Małe",
      "score": "1-0"
     },
     {
      "date": "17 września, 17:00",
      "home": "Spartakus Radgoszcz",
      "away": "Kłos Słupiec",
      "score": "4-0"
     },
     {
      "date": "17 września, 17:00",
      "home": "Brzoza Brzezówka",
      "away": "Wolania Wola Żelichowska",
      "score": "0-2"
     },
     {
      "date": "18 września, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Polonia Kłyż",
      "score": "2-1"
     },
     {
      "date": "17 września, 16:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "0-4"
     }
    ]
   },
   {
    "name": "Kolejka 7 - 24-25 września",
    "match": [
     {
      "date": "25 września, 13:00",
      "home": "Polonia Kłyż",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "5-3"
     },
     {
      "date": "25 września, 11:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Dunajec Ujście Jezuickie",
      "score": "4-2"
     },
     {
      "date": "25 września, 14:00",
      "home": "Kłos Słupiec",
      "away": "Brzoza Brzezówka",
      "score": "1-3"
     },
     {
      "date": "25 września, 14:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Spartakus Radgoszcz",
      "score": "2-3"
     },
     {
      "date": "25 września, 11:00",
      "home": "Powiśle Bolesław",
      "away": "LKS Niwka",
      "score": "0-7"
     },
     {
      "date": "25 września, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "LKS Smęgorzów",
      "score": "1-0"
     },
     {
      "date": "25 września, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "LZS Olesno",
      "score": "0-3"
     }
    ]
   },
   {
    "name": "Kolejka 8 - 1-2 października",
    "match": [
     {
      "date": "1 października, 15:30",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "LZS Olesno",
      "score": "3-4"
     },
     {
      "date": "2 października, 11:00",
      "home": "LKS Smęgorzów",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "1-1"
     },
     {
      "date": "1 października, 16:30",
      "home": "LKS Niwka",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "4-0"
     },
     {
      "date": "1 października, 16:30",
      "home": "Spartakus Radgoszcz",
      "away": "Powiśle Bolesław",
      "score": "5-0"
     },
     {
      "date": "1 października, 16:30",
      "home": "Brzoza Brzezówka",
      "away": "Orzeł Miechowice Małe",
      "score": "4-1"
     },
     {
      "date": "2 października, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Kłos Słupiec",
      "score": "3-0"
     },
     {
      "date": "2 października, 14:00",
      "home": "Polonia Kłyż",
      "away": "Wolania Wola Żelichowska",
      "score": "1-3"
     }
    ]
   },
   {
    "name": "Kolejka 9 - 8-9 października",
    "match": [
     {
      "date": "9 października, 11:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "5-0"
     },
     {
      "date": "9 października, 14:00",
      "home": "Kłos Słupiec",
      "away": "Polonia Kłyż",
      "score": "2-2"
     },
     {
      "date": "9 października, 14:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Dunajec Ujście Jezuickie",
      "score": "0-1"
     },
     {
      "date": "9 października, 14:00",
      "home": "Powiśle Bolesław",
      "away": "Brzoza Brzezówka",
      "score": "0-6"
     },
     {
      "date": "9 października, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Spartakus Radgoszcz",
      "score": "1-1"
     },
     {
      "date": "9 października, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "LKS Niwka",
      "score": "1-3"
     },
     {
      "date": "9 października, 11:00",
      "home": "LZS Olesno",
      "away": "LKS Smęgorzów",
      "score": "0-4"
     }
    ]
   },
   {
    "name": "Kolejka 10 - 15-16 października",
    "match": [
     {
      "date": "16 października, 15:30",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "LKS Smęgorzów",
      "score": "1-5"
     },
     {
      "date": "16 października, 11:00",
      "home": "LKS Niwka",
      "away": "LZS Olesno",
      "score": "5-0"
     },
     {
      "date": "15 października, 16:00",
      "home": "Spartakus Radgoszcz",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "0-0"
     },
     {
      "date": "15 października, 16:00",
      "home": "Brzoza Brzezówka",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "3-2"
     },
     {
      "date": "16 października, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Powiśle Bolesław",
      "score": "0-2"
     },
     {
      "date": "16 października, 14:00",
      "home": "Polonia Kłyż",
      "away": "Orzeł Miechowice Małe",
      "score": "1-0"
     },
     {
      "date": "16 października, 11:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Kłos Słupiec",
      "score": "4-0"
     }
    ]
   },
   {
    "name": "Kolejka 11 - 22-23 października",
    "match": [
     {
      "date": "23 października, 11:00",
      "home": "Kłos Słupiec",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "3-5"
     },
     {
      "date": "23 października, 14:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Wolania Wola Żelichowska",
      "score": "1-2"
     },
     {
      "date": "23 października, 11:00",
      "home": "Powiśle Bolesław",
      "away": "Polonia Kłyż",
      "score": "1-5"
     },
     {
      "date": "23 października, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Dunajec Ujście Jezuickie",
      "score": "1-4"
     },
     {
      "date": "23 października, 11:00",
      "home": "LZS Olesno",
      "away": "Spartakus Radgoszcz",
      "score": "2-1"
     },
     {
      "date": "23 października, 11:00",
      "home": "LKS Smęgorzów",
      "away": "LKS Niwka",
      "score": "1-5"
     },
     {
      "date": "23 października, 14:00",
      "home": "Brzoza Brzezówka",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "5-1"
     }
    ]
   },
   {
    "name": "Kolejka 12 - 29-30 października",
    "match": [
     {
      "date": "30 października, 14:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "LKS Niwka",
      "score": "0-2"
     },
     {
      "date": "30 października, 11:00",
      "home": "Spartakus Radgoszcz",
      "away": "LKS Smęgorzów",
      "score": "1-0"
     },
     {
      "date": "29 października, 15:30",
      "home": "Brzoza Brzezówka",
      "away": "LZS Olesno",
      "score": "3-0"
     },
     {
      "date": "30 października, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "4-2"
     },
     {
      "date": "30 października, 14:00",
      "home": "Polonia Kłyż",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "6-1"
     },
     {
      "date": "30 października, 11:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Powiśle Bolesław",
      "score": "7-0"
     },
     {
      "date": "30 października, 14:00",
      "home": "Kłos Słupiec",
      "away": "Orzeł Miechowice Małe",
      "score": "0-3"
     }
    ]
   },
   {
    "name": "Kolejka 13 - 5-6 listopada",
    "match": [
     {
      "date": "6 listopada, 14:00",
      "home": "Powiśle Bolesław",
      "away": "Kłos Słupiec",
      "score": "1-1"
     },
     {
      "date": "6 listopada, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Wolania Wola Żelichowska",
      "score": "2-2"
     },
     {
      "date": "6 listopada, 11:00",
      "home": "LZS Olesno",
      "away": "Dunajec Ujście Jezuickie",
      "score": "2-2"
     },
     {
      "date": "6 listopada, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Brzoza Brzezówka",
      "score": "4-2"
     },
     {
      "date": "6 listopada, 11:00",
      "home": "LKS Niwka",
      "away": "Spartakus Radgoszcz",
      "score": "4-2"
     },
     {
      "date": "5 listopada, 13:30",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Orzeł Miechowice Małe",
      "score": "1-2"
     },
     {
      "date": "6 listopada, 11:00",
      "home": "Polonia Kłyż",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "1-6"
     }
    ]
   },
   {
    "name": "Kolejka 14 - 1-2 kwietnia",
    "match": [
     {
      "date": "1 kwietnia, 17:00",
      "home": "Spartakus Radgoszcz",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "4-1"
     },
     {
      "date": "2 kwietnia, 17:00",
      "home": "LKS Niwka",
      "away": "Brzoza Brzezówka",
      "score": "0-1"
     },
     {
      "date": "2 kwietnia, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Dunajec Ujście Jezuickie",
      "score": "5-0"
     },
     {
      "date": "2 kwietnia, 11:00",
      "home": "LZS Olesno",
      "away": "Polonia Kłyż",
      "score": "3-1"
     },
     {
      "date": "2 kwietnia, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Wolania Wola Żelichowska",
      "score": "0-5"
     },
     {
      "date": "1 kwietnia, 17:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Kłos Słupiec",
      "score": "3-0"
     },
     {
      "date": "2 kwietnia, 11:00",
      "home": "Powiśle Bolesław",
      "away": "Orzeł Miechowice Małe",
      "score": "0-2"
     }
    ]
   },
   {
    "name": "Kolejka 15 - 15-16 kwietnia",
    "match": [
     {
      "date": "16 kwietnia, 16:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Powiśle Bolesław",
      "score": "7-1"
     },
     {
      "date": "16 kwietnia, 14:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "1-2"
     },
     {
      "date": "16 kwietnia, 14:00",
      "home": "Kłos Słupiec",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "2-6"
     },
     {
      "date": "16 kwietnia, 14:00",
      "home": "Wolania Wola Żelichowska",
      "away": "LZS Olesno",
      "score": "4-0"
     },
     {
      "date": "16 kwietnia, 17:00",
      "home": "Polonia Kłyż",
      "away": "LKS Smęgorzów",
      "score": "2-2"
     },
     {
      "date": "16 kwietnia, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "LKS Niwka",
      "score": "3-2"
     },
     {
      "date": "15 kwietnia, 17:00",
      "home": "Brzoza Brzezówka",
      "away": "Spartakus Radgoszcz",
      "score": "1-1"
     }
    ]
   },
   {
    "name": "Kolejka 16 - 22-23 kwietnia",
    "match": [
     {
      "date": "22 kwietnia, 17:15",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Brzoza Brzezówka",
      "score": "2-2"
     },
     {
      "date": "23 kwietnia, 11:00",
      "home": "Spartakus Radgoszcz",
      "away": "Dunajec Ujście Jezuickie",
      "score": "2-0"
     },
     {
      "date": "22 kwietnia, 16:00",
      "home": "LKS Niwka",
      "away": "Polonia Kłyż",
      "score": "4-0"
     },
     {
      "date": "23 kwietnia, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Wolania Wola Żelichowska",
      "score": "1-3"
     },
     {
      "date": "23 kwietnia, 11:00",
      "home": "LZS Olesno",
      "away": "Kłos Słupiec",
      "score": "3-3"
     },
     {
      "date": "23 kwietnia, 10:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Orzeł Miechowice Małe",
      "score": "1-8"
     },
     {
      "date": "23 kwietnia, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Powiśle Bolesław",
      "score": "3-2"
     }
    ]
   },
   {
    "name": "Kolejka 17 - 29-30 kwietnia",
    "match": [
     {
      "date": "29 kwietnia, 17:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "1-1"
     },
     {
      "date": "30 kwietnia, 11:00",
      "home": "Powiśle Bolesław",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "1-3"
     },
     {
      "date": "29 kwietnia, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "LZS Olesno",
      "score": "1-6"
     },
     {
      "date": "30 kwietnia, 14:00",
      "home": "Kłos Słupiec",
      "away": "LKS Smęgorzów",
      "score": "1-2"
     },
     {
      "date": "30 kwietnia, 17:00",
      "home": "Wolania Wola Żelichowska",
      "away": "LKS Niwka",
      "score": "3-0"
     },
     {
      "date": "29 kwietnia, 18:00",
      "home": "Polonia Kłyż",
      "away": "Spartakus Radgoszcz",
      "score": "1-6"
     },
     {
      "date": "30 kwietnia, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Brzoza Brzezówka",
      "score": "0-3"
     }
    ]
   },
   {
    "name": "Kolejka 18 - 6-7 maja",
    "match": [
     {
      "date": "7 maja, 17:30",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Dunajec Ujście Jezuickie",
      "score": "6-1"
     },
     {
      "date": "6 maja, 17:00",
      "home": "Brzoza Brzezówka",
      "away": "Polonia Kłyż",
      "score": "2-0"
     },
     {
      "date": "6 maja, 18:00",
      "home": "Spartakus Radgoszcz",
      "away": "Wolania Wola Żelichowska",
      "score": "2-1"
     },
     {
      "date": "7 maja, 17:00",
      "home": "LKS Niwka",
      "away": "Kłos Słupiec",
      "score": "3-0"
     },
     {
      "date": "7 maja, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Orzeł Miechowice Małe",
      "score": "4-0"
     },
     {
      "date": "7 maja, 11:00",
      "home": "LZS Olesno",
      "away": "Powiśle Bolesław",
      "score": "3-1"
     },
     {
      "date": "7 maja, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "1-2"
     }
    ]
   },
   {
    "name": "Kolejka 19 - 13-14 maja",
    "match": [
     {
      "date": "14 maja, 11:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "4-2"
     },
     {
      "date": "14 maja, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "LZS Olesno",
      "score": "1-3"
     },
     {
      "date": "14 maja, 11:00",
      "home": "Powiśle Bolesław",
      "away": "LKS Smęgorzów",
      "score": "0-4"
     },
     {
      "date": "13 maja, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "LKS Niwka",
      "score": "1-2"
     },
     {
      "date": "14 maja, 14:00",
      "home": "Kłos Słupiec",
      "away": "Spartakus Radgoszcz",
      "score": "0-2"
     },
     {
      "date": "13 maja, 17:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Brzoza Brzezówka",
      "score": "3-3"
     },
     {
      "date": "14 maja, 11:00",
      "home": "Polonia Kłyż",
      "away": "Dunajec Ujście Jezuickie",
      "score": "3-7"
     }
    ]
   },
   {
    "name": "Kolejka 20 - 20-21 maja",
    "match": [
     {
      "date": "21 maja, 17:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Polonia Kłyż",
      "score": "6-3"
     },
     {
      "date": "21 maja, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Wolania Wola Żelichowska",
      "score": "1-1"
     },
     {
      "date": "20 maja, 18:00",
      "home": "Brzoza Brzezówka",
      "away": "Kłos Słupiec",
      "score": "6-1"
     },
     {
      "date": "20 maja, 18:00",
      "home": "Spartakus Radgoszcz",
      "away": "Orzeł Miechowice Małe",
      "score": "5-2"
     },
     {
      "date": "20 maja, 17:00",
      "home": "LKS Niwka",
      "away": "Powiśle Bolesław",
      "score": "5-0"
     },
     {
      "date": "21 maja, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "4-2"
     },
     {
      "date": "21 maja, 11:00",
      "home": "LZS Olesno",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "5-0"
     }
    ]
   },
   {
    "name": "Kolejka 21 - 27-28 maja",
    "match": [
     {
      "date": "28 maja, 11:00",
      "home": "LZS Olesno",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "5-0"
     },
     {
      "date": "28 maja, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "LKS Smęgorzów",
      "score": "1-6"
     },
     {
      "date": "28 maja, 11:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "LKS Niwka",
      "score": "0-1"
     },
     {
      "date": "27 maja, 18:00",
      "home": "Powiśle Bolesław",
      "away": "Spartakus Radgoszcz",
      "score": "0-1"
     },
     {
      "date": "28 maja, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Brzoza Brzezówka",
      "score": "1-1"
     },
     {
      "date": "28 maja, 14:00",
      "home": "Kłos Słupiec",
      "away": "Dunajec Ujście Jezuickie",
      "score": "0-5"
     },
     {
      "date": "28 maja, 17:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Polonia Kłyż",
      "score": "8-1"
     }
    ]
   },
   {
    "name": "Kolejka 22 - 3-4 czerwca",
    "match": [
     {
      "date": "4 czerwca, 17:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Wolania Wola Żelichowska",
      "score": "1-4"
     },
     {
      "date": "4 czerwca, 11:00",
      "home": "Polonia Kłyż",
      "away": "Kłos Słupiec",
      "score": "5-4"
     },
     {
      "date": "4 czerwca, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Orzeł Miechowice Małe",
      "score": "1-0"
     },
     {
      "date": "4 czerwca, 14:00",
      "home": "Brzoza Brzezówka",
      "away": "Powiśle Bolesław",
      "score": "6-1"
     },
     {
      "date": "4 czerwca, 11:00",
      "home": "Spartakus Radgoszcz",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "3-0"
     },
     {
      "date": "3 czerwca, 17:30",
      "home": "LKS Niwka",
      "away": "DTS Dąbrowa Tarnowska",
      "score": "3-1"
     },
     {
      "date": "4 czerwca, 11:00",
      "home": "LKS Smęgorzów",
      "away": "LZS Olesno",
      "score": "2-3"
     }
    ]
   },
   {
    "name": "Kolejka 23 - 8 czerwca",
    "match": [
     {
      "date": "7 czerwca, 18:00",
      "home": "LKS Smęgorzów",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "4-3"
     },
     {
      "date": "7 czerwca, 18:00",
      "home": "LZS Olesno",
      "away": "LKS Niwka",
      "score": "2-1"
     },
     {
      "date": "7 czerwca, 18:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Spartakus Radgoszcz",
      "score": "1-6"
     },
     {
      "date": "8 czerwca, 17:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Brzoza Brzezówka",
      "score": "1-1"
     },
     {
      "date": "7 czerwca, 18:00",
      "home": "Powiśle Bolesław",
      "away": "Dunajec Ujście Jezuickie",
      "score": "2-1"
     },
     {
      "date": "7 czerwca, 18:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Polonia Kłyż",
      "score": "3-2"
     },
     {
      "date": "7 czerwca, 18:00",
      "home": "Kłos Słupiec",
      "away": "Wolania Wola Żelichowska",
      "score": "0-6"
     }
    ]
   },
   {
    "name": "Kolejka 24 - 10-11 czerwca",
    "match": [
     {
      "date": "11 czerwca, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Brzoza Brzezówka",
      "score": "1-4"
     },
     {
      "date": "11 czerwca, 17:00",
      "home": "Dąbrovia II Dąbrowa Tarnowska",
      "away": "Kłos Słupiec",
      "score": "3-3"
     },
     {
      "date": "11 czerwca, 17:00",
      "home": "Wolania Wola Żelichowska",
      "away": "Orzeł Miechowice Małe",
      "score": "6-0"
     },
     {
      "date": "11 czerwca, 11:00",
      "home": "Polonia Kłyż",
      "away": "Powiśle Bolesław",
      "score": "4-1"
     },
     {
      "date": "11 czerwca, 11:00",
      "home": "Dunajec Ujście Jezuickie",
      "away": "Olimpia Biskupice Radłowskie",
      "score": "4-1"
     },
     {
      "date": "11 czerwca, 11:00",
      "home": "Spartakus Radgoszcz",
      "away": "LZS Olesno",
      "score": "2-1"
     },
     {
      "date": "11 czerwca, 11:00",
      "home": "LKS Niwka",
      "away": "LKS Smęgorzów",
      "score": "3-0"
     }
    ]
   },
   {
    "name": "Kolejka 25 - 17-18 czerwca",
    "match": [
     {
      "date": "17 czerwca, 17:30",
      "home": "LKS Niwka",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "2-1"
     },
     {
      "date": "18 czerwca, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Spartakus Radgoszcz",
      "score": "2-5"
     },
     {
      "date": "18 czerwca, 11:00",
      "home": "LZS Olesno",
      "away": "Brzoza Brzezówka",
      "score": "2-5"
     },
     {
      "date": "18 czerwca, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Dunajec Ujście Jezuickie",
      "score": "0-4"
     },
     {
      "date": "17 czerwca, 17:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Polonia Kłyż",
      "score": "1-1"
     },
     {
      "date": "18 czerwca, 17:00",
      "home": "Powiśle Bolesław",
      "away": "Wolania Wola Żelichowska",
      "score": "1-4"
     },
     {
      "date": "17 czerwca, 17:00",
      "home": "Orzeł Miechowice Małe",
      "away": "Kłos Słupiec",
      "score": "7-0"
     }
    ]
   },
   {
    "name": "Kolejka 26 - 24-25 czerwca",
    "match": [
     {
      "date": "17 czerwca, 17:30",
      "home": "LKS Niwka",
      "away": "Dąbrovia II Dąbrowa Tarnowska",
      "score": "2-1"
     },
     {
      "date": "18 czerwca, 11:00",
      "home": "LKS Smęgorzów",
      "away": "Another team",
      "score": "2-5"
     },
     {
      "date": "18 czerwca, 11:00",
      "home": "LZS Olesno",
      "away": "Brzoza Brzezówka",
      "score": "2-5"
     },
     {
      "date": "18 czerwca, 11:00",
      "home": "DTS Dąbrowa Tarnowska",
      "away": "Dunajec Ujście Jezuickie",
      "score": "0-4"
     },
     {
      "date": "17 czerwca, 17:00",
      "home": "Olimpia Biskupice Radłowskie",
      "away": "Polonia Kłyż",
      "score": "1-1"
     },
     {
      "date": "18 czerwca, 17:00",
      "home": "Powiśle Bolesław",
      "away": "Wolania Wola Żelichowska",
      "score": "1-4"
     },
     {
      "date": "25 czerwca, 17:00",
      "home": "Spartakus Radgoszcz",
      "away": "LKS Niwka",
      "score": "1-2"
     }
    ]
   }
  ]
 }