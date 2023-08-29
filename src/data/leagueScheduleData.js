export const getRKSSchedule = () => {
  return LEAGUE_SCHEDULE.fixture
    .filter((fix) => fix.home === "Spartakus Radgoszcz" || fix.away === "Spartakus Radgoszcz")
    .map((fix, idx) => {
        if (fix.home === "Spartakus Radgoszcz") {
          return { ...fix, home: "RKS Radgoszcz", round: idx + 1 }
        } else {
          return { ...fix, away: "RKS Radgoszcz", round: idx + 1 }
        }
    });
}
       

const LEAGUE_SCHEDULE = {
  "start": 2023,
  "end": 2024,
  "fixture": [
   {
    "score": "-",
    "away": "---",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "3-1",
    "away": "Brzoza Brzezówka",
    "home": "Polonia Kłyż",
    "date": "20 sierpnia, 17:00"
   },
   {
    "score": "4-5",
    "away": "Spartakus Radgoszcz",
    "home": "MLKS II Żabno",
    "date": "20 sierpnia, 16:30"
   },
   {
    "score": "1-0",
    "away": "LZS Wójcina",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": "19 sierpnia, 17:30"
   },
   {
    "score": "4-4",
    "away": "LZS Mędrzechów",
    "home": "Kłos Słupiec",
    "date": "20 sierpnia, 14:00"
   },
   {
    "score": "1-1",
    "away": "Wisła Borusowa",
    "home": "LKS Smęgorzów",
    "date": "20 sierpnia, 17:00"
   },
   {
    "score": "3-3",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "LZS Olesno",
    "date": "20 sierpnia, 11:00"
   },
   {
    "score": "1-1",
    "away": "Orzeł Miechowice Małe",
    "home": "Olimpia Biskupice Radłowskie",
    "date": "20 sierpnia, 11:00"
   },
   {
    "score": "2-1",
    "away": "Powiśle Bolesław",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": "19 sierpnia, 17:00"
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "---",
    "date": ""
   },
   {
    "score": "5-0",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Orzeł Miechowice Małe",
    "date": "26 sierpnia, 17:00"
   },
   {
    "score": "1-0",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "DTS Dąbrowa Tarnowska",
    "date": "27 sierpnia, 11:00"
   },
   {
    "score": "5-3",
    "away": "LZS Olesno",
    "home": "Wisła Borusowa",
    "date": "27 sierpnia, 17:00"
   },
   {
    "score": "0-3",
    "away": "LKS Smęgorzów",
    "home": "LZS Mędrzechów",
    "date": "27 sierpnia, 11:00"
   },
   {
    "score": "3-2",
    "away": "Kłos Słupiec",
    "home": "LZS Wójcina",
    "date": "27 sierpnia, 15:00"
   },
   {
    "score": "6-2",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Spartakus Radgoszcz",
    "date": "26 sierpnia, 17:00"
   },
   {
    "score": "1-2",
    "away": "MLKS II Żabno",
    "home": "Brzoza Brzezówka",
    "date": "26 sierpnia, 18:00"
   },
   {
    "score": "5-4",
    "away": "Polonia Kłyż",
    "home": "Dunajec Ujście Jezuickie",
    "date": "27 sierpnia, 11:00"
   },
   {
    "score": "-",
    "away": "---",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "MLKS II Żabno",
    "date": "3 września, 11:00"
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": "3 września, 17:00"
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Kłos Słupiec",
    "date": "3 września, 14:00"
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "LZS Olesno",
    "date": "3 września, 11:00"
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Olimpia Biskupice Radłowskie",
    "date": "2 września, 17:00"
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": "2 września, 17:00"
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Powiśle Bolesław",
    "date": "3 września, 11:00"
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "LZS Wójcina",
    "date": "3 września, 11:00"
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "---",
    "home": "Brzoza Brzezówka",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dunajec Ujście Jezuickie",
    "home": "Spartakus Radgoszcz",
    "date": ""
   },
   {
    "score": "-",
    "away": "Polonia Kłyż",
    "home": "LZS Wójcina",
    "date": ""
   },
   {
    "score": "-",
    "away": "MLKS II Żabno",
    "home": "LZS Mędrzechów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Dąbrovia II Dąbrowa Tarnowska",
    "home": "Wisła Borusowa",
    "date": ""
   },
   {
    "score": "-",
    "away": "Kłos Słupiec",
    "home": "DTS Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "LKS Smęgorzów",
    "home": "Orzeł Miechowice Małe",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Olesno",
    "home": "Powiśle Bolesław",
    "date": ""
   },
   {
    "score": "-",
    "away": "Olimpia Biskupice Radłowskie",
    "home": "Łęgovia II Łęg Tarnowski",
    "date": ""
   },
   {
    "score": "-",
    "away": "Łęgovia II Łęg Tarnowski",
    "home": "---",
    "date": ""
   },
   {
    "score": "-",
    "away": "Powiśle Bolesław",
    "home": "Olimpia Biskupice Radłowskie",
    "date": ""
   },
   {
    "score": "-",
    "away": "Orzeł Miechowice Małe",
    "home": "LZS Olesno",
    "date": ""
   },
   {
    "score": "-",
    "away": "DTS Dąbrowa Tarnowska",
    "home": "LKS Smęgorzów",
    "date": ""
   },
   {
    "score": "-",
    "away": "Wisła Borusowa",
    "home": "Kłos Słupiec",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Mędrzechów",
    "home": "Dąbrovia II Dąbrowa Tarnowska",
    "date": ""
   },
   {
    "score": "-",
    "away": "LZS Wójcina",
    "home": "MLKS II Żabno",
    "date": ""
   },
   {
    "score": "-",
    "away": "Spartakus Radgoszcz",
    "home": "Polonia Kłyż",
    "date": ""
   },
   {
    "score": "-",
    "away": "Brzoza Brzezówka",
    "home": "Dunajec Ujście Jezuickie",
    "date": ""
   }
  ]
 }