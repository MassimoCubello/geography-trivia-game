const CITY_POOLS = {
  "capital-cities": [
    { city: "Rome", country: "Italy", flag: "🇮🇹" },
    { city: "Ottawa", country: "Canada", flag: "🇨🇦" },
    { city: "Canberra", country: "Australia", flag: "🇦🇺" },
    { city: "Brasilia", country: "Brazil", flag: "🇧🇷" },
    { city: "Accra", country: "Ghana", flag: "🇬🇭" },
    { city: "Hanoi", country: "Vietnam", flag: "🇻🇳" },
    { city: "Santiago", country: "Chile", flag: "🇨🇱" },
    { city: "Lisbon", country: "Portugal", flag: "🇵🇹" },
    { city: "Rabat", country: "Morocco", flag: "🇲🇦" },
    { city: "Seoul", country: "South Korea", flag: "🇰🇷" },
    { city: "Tokyo", country: "Japan", flag: "🇯🇵" },
    { city: "Nairobi", country: "Kenya", flag: "🇰🇪" },
  ],
  "normal-mode": [
    { city: "Barcelona", country: "Spain", flag: "🇪🇸" },
    { city: "Lyon", country: "France", flag: "🇫🇷" },
    { city: "Hamburg", country: "Germany", flag: "🇩🇪" },
    { city: "Busan", country: "South Korea", flag: "🇰🇷" },
    { city: "Medellin", country: "Colombia", flag: "🇨🇴" },
    { city: "Izmir", country: "Turkey", flag: "🇹🇷" },
    { city: "Cusco", country: "Peru", flag: "🇵🇪" },
    { city: "Chiang Mai", country: "Thailand", flag: "🇹🇭" },
    { city: "Krakow", country: "Poland", flag: "🇵🇱" },
    { city: "Bordeaux", country: "France", flag: "🇫🇷" },
    { city: "Utrecht", country: "Netherlands", flag: "🇳🇱" },
    { city: "Da Nang", country: "Vietnam", flag: "🇻🇳" },
    { city: "Pune", country: "India", flag: "🇮🇳" },
    { city: "Alexandria", country: "Egypt", flag: "🇪🇬" },
  ],
  "globe-trotter": [
    { city: "Valparaiso", country: "Chile", flag: "🇨🇱" },
    { city: "Fes", country: "Morocco", flag: "🇲🇦" },
    { city: "Sapporo", country: "Japan", flag: "🇯🇵" },
    { city: "Arequipa", country: "Peru", flag: "🇵🇪" },
    { city: "Surabaya", country: "Indonesia", flag: "🇮🇩" },
    { city: "Thessaloniki", country: "Greece", flag: "🇬🇷" },
    { city: "Aarhus", country: "Denmark", flag: "🇩🇰" },
    { city: "Bergen", country: "Norway", flag: "🇳🇴" },
    { city: "Curitiba", country: "Brazil", flag: "🇧🇷" },
    { city: "Kaohsiung", country: "Taiwan", flag: "🇹🇼" },
    { city: "Porto", country: "Portugal", flag: "🇵🇹" },
    { city: "Luang Prabang", country: "Laos", flag: "🇱🇦" },
    { city: "Invercargill", country: "New Zealand", flag: "🇳🇿" },
    { city: "Antofagasta", country: "Chile", flag: "🇨🇱" },
    { city: "Mombasa", country: "Kenya", flag: "🇰🇪" },
    { city: "Davao", country: "Philippines", flag: "🇵🇭" },
  ],
  "atlas-god": [
    { city: "Ushuaia", country: "Argentina", flag: "🇦🇷" },
    { city: "Tromso", country: "Norway", flag: "🇳🇴" },
    { city: "Lviv", country: "Ukraine", flag: "🇺🇦" },
    { city: "Bujumbura", country: "Burundi", flag: "🇧🇮" },
    { city: "Samarqand", country: "Uzbekistan", flag: "🇺🇿" },
    { city: "Gdansk", country: "Poland", flag: "🇵🇱" },
    { city: "Rotorua", country: "New Zealand", flag: "🇳🇿" },
    { city: "Coimbra", country: "Portugal", flag: "🇵🇹" },
    { city: "Cochabamba", country: "Bolivia", flag: "🇧🇴" },
    { city: "Lulea", country: "Sweden", flag: "🇸🇪" },
    { city: "Ouarzazate", country: "Morocco", flag: "🇲🇦" },
    { city: "Bursa", country: "Turkey", flag: "🇹🇷" },
    { city: "Zadar", country: "Croatia", flag: "🇭🇷" },
    { city: "Da Lat", country: "Vietnam", flag: "🇻🇳" },
    { city: "Trondheim", country: "Norway", flag: "🇳🇴" },
    { city: "Tucuman", country: "Argentina", flag: "🇦🇷" },
    { city: "Split", country: "Croatia", flag: "🇭🇷" },
    { city: "Sibiu", country: "Romania", flag: "🇷🇴" },
  ],
};

const TARGET_POOL_SIZES = {
  "capital-cities": 150,
  "normal-mode": 100,
  "globe-trotter": 100,
  "atlas-god": 100,
};

const CAPITAL_CITY_BANK = [
  { city: "Kabul", country: "Afghanistan", flag: "🇦🇫" },
  { city: "Tirana", country: "Albania", flag: "🇦🇱" },
  { city: "Algiers", country: "Algeria", flag: "🇩🇿" },
  { city: "Andorra la Vella", country: "Andorra", flag: "🇦🇩" },
  { city: "Luanda", country: "Angola", flag: "🇦🇴" },
  { city: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  { city: "Yerevan", country: "Armenia", flag: "🇦🇲" },
  { city: "Vienna", country: "Austria", flag: "🇦🇹" },
  { city: "Baku", country: "Azerbaijan", flag: "🇦🇿" },
  { city: "Nassau", country: "Bahamas", flag: "🇧🇸" },
  { city: "Manama", country: "Bahrain", flag: "🇧🇭" },
  { city: "Dhaka", country: "Bangladesh", flag: "🇧🇩" },
  { city: "Bridgetown", country: "Barbados", flag: "🇧🇧" },
  { city: "Minsk", country: "Belarus", flag: "🇧🇾" },
  { city: "Brussels", country: "Belgium", flag: "🇧🇪" },
  { city: "Belmopan", country: "Belize", flag: "🇧🇿" },
  { city: "Porto-Novo", country: "Benin", flag: "🇧🇯" },
  { city: "Thimphu", country: "Bhutan", flag: "🇧🇹" },
  { city: "La Paz", country: "Bolivia", flag: "🇧🇴" },
  { city: "Sarajevo", country: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { city: "Gaborone", country: "Botswana", flag: "🇧🇼" },
  { city: "Bandar Seri Begawan", country: "Brunei", flag: "🇧🇳" },
  { city: "Sofia", country: "Bulgaria", flag: "🇧🇬" },
  { city: "Ouagadougou", country: "Burkina Faso", flag: "🇧🇫" },
  { city: "Gitega", country: "Burundi", flag: "🇧🇮" },
  { city: "Phnom Penh", country: "Cambodia", flag: "🇰🇭" },
  { city: "Yaounde", country: "Cameroon", flag: "🇨🇲" },
  { city: "Praia", country: "Cape Verde", flag: "🇨🇻" },
  { city: "Bangui", country: "Central African Republic", flag: "🇨🇫" },
  { city: "N Djamena", country: "Chad", flag: "🇹🇩" },
  { city: "Beijing", country: "China", flag: "🇨🇳" },
  { city: "Bogota", country: "Colombia", flag: "🇨🇴" },
  { city: "Moroni", country: "Comoros", flag: "🇰🇲" },
  { city: "Kinshasa", country: "DR Congo", flag: "🇨🇩" },
  { city: "Brazzaville", country: "Republic of the Congo", flag: "🇨🇬" },
  { city: "San Jose", country: "Costa Rica", flag: "🇨🇷" },
  { city: "Yamoussoukro", country: "Cote d Ivoire", flag: "🇨🇮" },
  { city: "Zagreb", country: "Croatia", flag: "🇭🇷" },
  { city: "Havana", country: "Cuba", flag: "🇨🇺" },
  { city: "Nicosia", country: "Cyprus", flag: "🇨🇾" },
  { city: "Prague", country: "Czech Republic", flag: "🇨🇿" },
  { city: "Copenhagen", country: "Denmark", flag: "🇩🇰" },
  { city: "Djibouti", country: "Djibouti", flag: "🇩🇯" },
  { city: "Roseau", country: "Dominica", flag: "🇩🇲" },
  { city: "Santo Domingo", country: "Dominican Republic", flag: "🇩🇴" },
  { city: "Quito", country: "Ecuador", flag: "🇪🇨" },
  { city: "San Salvador", country: "El Salvador", flag: "🇸🇻" },
  { city: "Malabo", country: "Equatorial Guinea", flag: "🇬🇶" },
  { city: "Asmara", country: "Eritrea", flag: "🇪🇷" },
  { city: "Tallinn", country: "Estonia", flag: "🇪🇪" },
  { city: "Mbabane", country: "Eswatini", flag: "🇸🇿" },
  { city: "Addis Ababa", country: "Ethiopia", flag: "🇪🇹" },
  { city: "Suva", country: "Fiji", flag: "🇫🇯" },
  { city: "Paris", country: "France", flag: "🇫🇷" },
  { city: "Libreville", country: "Gabon", flag: "🇬🇦" },
  { city: "Banjul", country: "Gambia", flag: "🇬🇲" },
  { city: "Tbilisi", country: "Georgia", flag: "🇬🇪" },
  { city: "Guatemala City", country: "Guatemala", flag: "🇬🇹" },
  { city: "Conakry", country: "Guinea", flag: "🇬🇳" },
  { city: "Bissau", country: "Guinea-Bissau", flag: "🇬🇼" },
  { city: "Georgetown", country: "Guyana", flag: "🇬🇾" },
  { city: "Port-au-Prince", country: "Haiti", flag: "🇭🇹" },
  { city: "Tegucigalpa", country: "Honduras", flag: "🇭🇳" },
  { city: "Budapest", country: "Hungary", flag: "🇭🇺" },
  { city: "Reykjavik", country: "Iceland", flag: "🇮🇸" },
  { city: "New Delhi", country: "India", flag: "🇮🇳" },
  { city: "Tehran", country: "Iran", flag: "🇮🇷" },
  { city: "Baghdad", country: "Iraq", flag: "🇮🇶" },
  { city: "Dublin", country: "Ireland", flag: "🇮🇪" },
  { city: "Amman", country: "Jordan", flag: "🇯🇴" },
  { city: "Astana", country: "Kazakhstan", flag: "🇰🇿" },
  { city: "Tarawa", country: "Kiribati", flag: "🇰🇮" },
  { city: "Pristina", country: "Kosovo", flag: "🇽🇰" },
  { city: "Kuwait City", country: "Kuwait", flag: "🇰🇼" },
  { city: "Bishkek", country: "Kyrgyzstan", flag: "🇰🇬" },
  { city: "Vientiane", country: "Laos", flag: "🇱🇦" },
  { city: "Riga", country: "Latvia", flag: "🇱🇻" },
  { city: "Beirut", country: "Lebanon", flag: "🇱🇧" },
  { city: "Maseru", country: "Lesotho", flag: "🇱🇸" },
  { city: "Monrovia", country: "Liberia", flag: "🇱🇷" },
  { city: "Tripoli", country: "Libya", flag: "🇱🇾" },
  { city: "Vaduz", country: "Liechtenstein", flag: "🇱🇮" },
  { city: "Vilnius", country: "Lithuania", flag: "🇱🇹" },
  { city: "Luxembourg", country: "Luxembourg", flag: "🇱🇺" },
  { city: "Antananarivo", country: "Madagascar", flag: "🇲🇬" },
  { city: "Lilongwe", country: "Malawi", flag: "🇲🇼" },
  { city: "Kuala Lumpur", country: "Malaysia", flag: "🇲🇾" },
  { city: "Male", country: "Maldives", flag: "🇲🇻" },
  { city: "Bamako", country: "Mali", flag: "🇲🇱" },
  { city: "Valletta", country: "Malta", flag: "🇲🇹" },
  { city: "Majuro", country: "Marshall Islands", flag: "🇲🇭" },
  { city: "Nouakchott", country: "Mauritania", flag: "🇲🇷" },
  { city: "Port Louis", country: "Mauritius", flag: "🇲🇺" },
  { city: "Chisinau", country: "Moldova", flag: "🇲🇩" },
  { city: "Ulaanbaatar", country: "Mongolia", flag: "🇲🇳" },
  { city: "Podgorica", country: "Montenegro", flag: "🇲🇪" },
  { city: "Maputo", country: "Mozambique", flag: "🇲🇿" },
  { city: "Naypyidaw", country: "Myanmar", flag: "🇲🇲" },
  { city: "Windhoek", country: "Namibia", flag: "🇳🇦" },
  { city: "Kathmandu", country: "Nepal", flag: "🇳🇵" },
  { city: "Amsterdam", country: "Netherlands", flag: "🇳🇱" },
  { city: "Wellington", country: "New Zealand", flag: "🇳🇿" },
  { city: "Managua", country: "Nicaragua", flag: "🇳🇮" },
  { city: "Niamey", country: "Niger", flag: "🇳🇪" },
  { city: "Abuja", country: "Nigeria", flag: "🇳🇬" },
  { city: "Pyongyang", country: "North Korea", flag: "🇰🇵" },
  { city: "Skopje", country: "North Macedonia", flag: "🇲🇰" },
  { city: "Muscat", country: "Oman", flag: "🇴🇲" },
  { city: "Islamabad", country: "Pakistan", flag: "🇵🇰" },
  { city: "Ngerulmud", country: "Palau", flag: "🇵🇼" },
  { city: "Panama City", country: "Panama", flag: "🇵🇦" },
  { city: "Asuncion", country: "Paraguay", flag: "🇵🇾" },
  { city: "Manila", country: "Philippines", flag: "🇵🇭" },
  { city: "Doha", country: "Qatar", flag: "🇶🇦" },
  { city: "Bucharest", country: "Romania", flag: "🇷🇴" },
  { city: "Moscow", country: "Russia", flag: "🇷🇺" },
  { city: "Kigali", country: "Rwanda", flag: "🇷🇼" },
  { city: "Basseterre", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { city: "Castries", country: "Saint Lucia", flag: "🇱🇨" },
  { city: "Kingstown", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { city: "Apia", country: "Samoa", flag: "🇼🇸" },
  { city: "San Marino", country: "San Marino", flag: "🇸🇲" },
  { city: "Sao Tome", country: "Sao Tome and Principe", flag: "🇸🇹" },
  { city: "Riyadh", country: "Saudi Arabia", flag: "🇸🇦" },
  { city: "Dakar", country: "Senegal", flag: "🇸🇳" },
  { city: "Belgrade", country: "Serbia", flag: "🇷🇸" },
  { city: "Victoria", country: "Seychelles", flag: "🇸🇨" },
  { city: "Freetown", country: "Sierra Leone", flag: "🇸🇱" },
  { city: "Singapore", country: "Singapore", flag: "🇸🇬" },
  { city: "Bratislava", country: "Slovakia", flag: "🇸🇰" },
  { city: "Ljubljana", country: "Slovenia", flag: "🇸🇮" },
  { city: "Honiara", country: "Solomon Islands", flag: "🇸🇧" },
  { city: "Mogadishu", country: "Somalia", flag: "🇸🇴" },
  { city: "Madrid", country: "Spain", flag: "🇪🇸" },
  { city: "Colombo", country: "Sri Lanka", flag: "🇱🇰" },
  { city: "Khartoum", country: "Sudan", flag: "🇸🇩" },
  { city: "Paramaribo", country: "Suriname", flag: "🇸🇷" },
  { city: "Stockholm", country: "Sweden", flag: "🇸🇪" },
  { city: "Bern", country: "Switzerland", flag: "🇨🇭" },
  { city: "Damascus", country: "Syria", flag: "🇸🇾" },
  { city: "Taipei", country: "Taiwan", flag: "🇹🇼" },
  { city: "Dushanbe", country: "Tajikistan", flag: "🇹🇯" },
  { city: "Dodoma", country: "Tanzania", flag: "🇹🇿" },
  { city: "Bangkok", country: "Thailand", flag: "🇹🇭" },
  { city: "Lome", country: "Togo", flag: "🇹🇬" },
  { city: "Nuku alofa", country: "Tonga", flag: "🇹🇴" },
  { city: "Tunis", country: "Tunisia", flag: "🇹🇳" },
  { city: "Ankara", country: "Turkey", flag: "🇹🇷" },
  { city: "Ashgabat", country: "Turkmenistan", flag: "🇹🇲" },
  { city: "Funafuti", country: "Tuvalu", flag: "🇹🇻" },
  { city: "Kampala", country: "Uganda", flag: "🇺🇬" },
  { city: "Kyiv", country: "Ukraine", flag: "🇺🇦" },
  { city: "Abu Dhabi", country: "United Arab Emirates", flag: "🇦🇪" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Washington", country: "United States", flag: "🇺🇸" },
  { city: "Montevideo", country: "Uruguay", flag: "🇺🇾" },
  { city: "Tashkent", country: "Uzbekistan", flag: "🇺🇿" },
  { city: "Port Vila", country: "Vanuatu", flag: "🇻🇺" },
  { city: "Vatican City", country: "Vatican City", flag: "🇻🇦" },
  { city: "Caracas", country: "Venezuela", flag: "🇻🇪" },
  { city: "Sanaa", country: "Yemen", flag: "🇾🇪" },
  { city: "Lusaka", country: "Zambia", flag: "🇿🇲" },
  { city: "Harare", country: "Zimbabwe", flag: "🇿🇼" },
];

const NON_CAPITAL_CITY_BANK = [
  { city: "New York", country: "United States", flag: "🇺🇸" },
  { city: "Los Angeles", country: "United States", flag: "🇺🇸" },
  { city: "Chicago", country: "United States", flag: "🇺🇸" },
  { city: "Houston", country: "United States", flag: "🇺🇸" },
  { city: "Phoenix", country: "United States", flag: "🇺🇸" },
  { city: "Philadelphia", country: "United States", flag: "🇺🇸" },
  { city: "San Antonio", country: "United States", flag: "🇺🇸" },
  { city: "San Diego", country: "United States", flag: "🇺🇸" },
  { city: "Dallas", country: "United States", flag: "🇺🇸" },
  { city: "San Jose", country: "United States", flag: "🇺🇸" },
  { city: "Manchester", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Birmingham", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Liverpool", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Glasgow", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Leeds", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Bristol", country: "United Kingdom", flag: "🇬🇧" },
  { city: "Marseille", country: "France", flag: "🇫🇷" },
  { city: "Nice", country: "France", flag: "🇫🇷" },
  { city: "Toulouse", country: "France", flag: "🇫🇷" },
  { city: "Nantes", country: "France", flag: "🇫🇷" },
  { city: "Lille", country: "France", flag: "🇫🇷" },
  { city: "Munich", country: "Germany", flag: "🇩🇪" },
  { city: "Cologne", country: "Germany", flag: "🇩🇪" },
  { city: "Frankfurt", country: "Germany", flag: "🇩🇪" },
  { city: "Stuttgart", country: "Germany", flag: "🇩🇪" },
  { city: "Dortmund", country: "Germany", flag: "🇩🇪" },
  { city: "Milan", country: "Italy", flag: "🇮🇹" },
  { city: "Naples", country: "Italy", flag: "🇮🇹" },
  { city: "Turin", country: "Italy", flag: "🇮🇹" },
  { city: "Palermo", country: "Italy", flag: "🇮🇹" },
  { city: "Bologna", country: "Italy", flag: "🇮🇹" },
  { city: "Valencia", country: "Spain", flag: "🇪🇸" },
  { city: "Seville", country: "Spain", flag: "🇪🇸" },
  { city: "Malaga", country: "Spain", flag: "🇪🇸" },
  { city: "Bilbao", country: "Spain", flag: "🇪🇸" },
  { city: "Zaragoza", country: "Spain", flag: "🇪🇸" },
  { city: "Braga", country: "Portugal", flag: "🇵🇹" },
  { city: "Faro", country: "Portugal", flag: "🇵🇹" },
  { city: "Rotterdam", country: "Netherlands", flag: "🇳🇱" },
  { city: "Eindhoven", country: "Netherlands", flag: "🇳🇱" },
  { city: "Groningen", country: "Netherlands", flag: "🇳🇱" },
  { city: "Antwerp", country: "Belgium", flag: "🇧🇪" },
  { city: "Ghent", country: "Belgium", flag: "🇧🇪" },
  { city: "Liege", country: "Belgium", flag: "🇧🇪" },
  { city: "Yokohama", country: "Japan", flag: "🇯🇵" },
  { city: "Osaka", country: "Japan", flag: "🇯🇵" },
  { city: "Nagoya", country: "Japan", flag: "🇯🇵" },
  { city: "Kyoto", country: "Japan", flag: "🇯🇵" },
  { city: "Fukuoka", country: "Japan", flag: "🇯🇵" },
  { city: "Shanghai", country: "China", flag: "🇨🇳" },
  { city: "Guangzhou", country: "China", flag: "🇨🇳" },
  { city: "Shenzhen", country: "China", flag: "🇨🇳" },
  { city: "Chengdu", country: "China", flag: "🇨🇳" },
  { city: "Wuhan", country: "China", flag: "🇨🇳" },
  { city: "Hangzhou", country: "China", flag: "🇨🇳" },
  { city: "Nanjing", country: "China", flag: "🇨🇳" },
  { city: "Qingdao", country: "China", flag: "🇨🇳" },
  { city: "Mumbai", country: "India", flag: "🇮🇳" },
  { city: "Bangalore", country: "India", flag: "🇮🇳" },
  { city: "Hyderabad", country: "India", flag: "🇮🇳" },
  { city: "Chennai", country: "India", flag: "🇮🇳" },
  { city: "Kolkata", country: "India", flag: "🇮🇳" },
  { city: "Ahmedabad", country: "India", flag: "🇮🇳" },
  { city: "Jaipur", country: "India", flag: "🇮🇳" },
  { city: "Surat", country: "India", flag: "🇮🇳" },
  { city: "Karachi", country: "Pakistan", flag: "🇵🇰" },
  { city: "Lahore", country: "Pakistan", flag: "🇵🇰" },
  { city: "Faisalabad", country: "Pakistan", flag: "🇵🇰" },
  { city: "Adana", country: "Turkey", flag: "🇹🇷" },
  { city: "Sao Paulo", country: "Brazil", flag: "🇧🇷" },
  { city: "Rio de Janeiro", country: "Brazil", flag: "🇧🇷" },
  { city: "Salvador", country: "Brazil", flag: "🇧🇷" },
  { city: "Fortaleza", country: "Brazil", flag: "🇧🇷" },
  { city: "Recife", country: "Brazil", flag: "🇧🇷" },
  { city: "Belo Horizonte", country: "Brazil", flag: "🇧🇷" },
  { city: "Manaus", country: "Brazil", flag: "🇧🇷" },
  { city: "Belem", country: "Brazil", flag: "🇧🇷" },
  { city: "Porto Alegre", country: "Brazil", flag: "🇧🇷" },
  { city: "Cali", country: "Colombia", flag: "🇨🇴" },
  { city: "Barranquilla", country: "Colombia", flag: "🇨🇴" },
  { city: "Cartagena", country: "Colombia", flag: "🇨🇴" },
  { city: "Guadalajara", country: "Mexico", flag: "🇲🇽" },
  { city: "Monterrey", country: "Mexico", flag: "🇲🇽" },
  { city: "Tijuana", country: "Mexico", flag: "🇲🇽" },
  { city: "Puebla", country: "Mexico", flag: "🇲🇽" },
  { city: "Merida", country: "Mexico", flag: "🇲🇽" },
  { city: "Lagos", country: "Nigeria", flag: "🇳🇬" },
  { city: "Kano", country: "Nigeria", flag: "🇳🇬" },
  { city: "Ibadan", country: "Nigeria", flag: "🇳🇬" },
  { city: "Port Harcourt", country: "Nigeria", flag: "🇳🇬" },
  { city: "Johannesburg", country: "South Africa", flag: "🇿🇦" },
  { city: "Cape Town", country: "South Africa", flag: "🇿🇦" },
  { city: "Durban", country: "South Africa", flag: "🇿🇦" },
  { city: "Sydney", country: "Australia", flag: "🇦🇺" },
  { city: "Melbourne", country: "Australia", flag: "🇦🇺" },
  { city: "Brisbane", country: "Australia", flag: "🇦🇺" },
  { city: "Perth", country: "Australia", flag: "🇦🇺" },
  { city: "Adelaide", country: "Australia", flag: "🇦🇺" },
  { city: "Gold Coast", country: "Australia", flag: "🇦🇺" },
  { city: "Auckland", country: "New Zealand", flag: "🇳🇿" },
  { city: "Christchurch", country: "New Zealand", flag: "🇳🇿" },
  { city: "Alexandria", country: "Egypt", flag: "🇪🇬" },
  { city: "Giza", country: "Egypt", flag: "🇪🇬" },
  { city: "Luxor", country: "Egypt", flag: "🇪🇬" },
  { city: "Casablanca", country: "Morocco", flag: "🇲🇦" },
  { city: "Marrakesh", country: "Morocco", flag: "🇲🇦" },
  { city: "Tangier", country: "Morocco", flag: "🇲🇦" },
  { city: "Agadir", country: "Morocco", flag: "🇲🇦" },
  { city: "Phuket", country: "Thailand", flag: "🇹🇭" },
  { city: "Pattaya", country: "Thailand", flag: "🇹🇭" },
  { city: "Ho Chi Minh City", country: "Vietnam", flag: "🇻🇳" },
  { city: "Hai Phong", country: "Vietnam", flag: "🇻🇳" },
  { city: "Can Tho", country: "Vietnam", flag: "🇻🇳" },
  { city: "Bandung", country: "Indonesia", flag: "🇮🇩" },
  { city: "Medan", country: "Indonesia", flag: "🇮🇩" },
  { city: "Semarang", country: "Indonesia", flag: "🇮🇩" },
  { city: "Makassar", country: "Indonesia", flag: "🇮🇩" },
  { city: "Cebu City", country: "Philippines", flag: "🇵🇭" },
  { city: "Quezon City", country: "Philippines", flag: "🇵🇭" },
  { city: "Jeddah", country: "Saudi Arabia", flag: "🇸🇦" },
  { city: "Mecca", country: "Saudi Arabia", flag: "🇸🇦" },
  { city: "Medina", country: "Saudi Arabia", flag: "🇸🇦" },
  { city: "Mashhad", country: "Iran", flag: "🇮🇷" },
  { city: "Isfahan", country: "Iran", flag: "🇮🇷" },
  { city: "Shiraz", country: "Iran", flag: "🇮🇷" },
  { city: "Tabriz", country: "Iran", flag: "🇮🇷" },
  { city: "Saint Petersburg", country: "Russia", flag: "🇷🇺" },
  { city: "Novosibirsk", country: "Russia", flag: "🇷🇺" },
  { city: "Yekaterinburg", country: "Russia", flag: "🇷🇺" },
  { city: "Kazan", country: "Russia", flag: "🇷🇺" },
  { city: "Kharkiv", country: "Ukraine", flag: "🇺🇦" },
  { city: "Odesa", country: "Ukraine", flag: "🇺🇦" },
  { city: "Dnipro", country: "Ukraine", flag: "🇺🇦" },
  { city: "Cordoba", country: "Argentina", flag: "🇦🇷" },
  { city: "Rosario", country: "Argentina", flag: "🇦🇷" },
  { city: "Mendoza", country: "Argentina", flag: "🇦🇷" },
  { city: "La Plata", country: "Argentina", flag: "🇦🇷" },
  { city: "Concepcion", country: "Chile", flag: "🇨🇱" },
  { city: "Trujillo", country: "Peru", flag: "🇵🇪" },
];

const NORMAL_MODE_CITY_BANK = NON_CAPITAL_CITY_BANK;

const GLOBE_TROTTER_CITY_BANK = [
  ...NON_CAPITAL_CITY_BANK.filter(
    (entry) =>
      ![
        "United States",
        "United Kingdom",
        "France",
        "Germany",
        "Italy",
        "Spain",
        "Japan",
        "China",
        "India",
      ].includes(entry.country),
  ),
  ...CAPITAL_CITY_BANK.filter(
    (entry) =>
      ![
        "United States",
        "United Kingdom",
        "France",
        "Germany",
        "Italy",
        "Spain",
        "Japan",
        "China",
        "India",
        "Brazil",
        "Canada",
        "Australia",
        "South Korea",
      ].includes(entry.country),
  ),
];

const ATLAS_GOD_CITY_BANK = [
  ...CAPITAL_CITY_BANK.filter(
    (entry) =>
      ![
        "United States",
        "United Kingdom",
        "France",
        "Germany",
        "Italy",
        "Spain",
        "Japan",
        "China",
        "India",
        "Brazil",
        "Canada",
        "Australia",
        "Mexico",
        "Netherlands",
        "Belgium",
      ].includes(entry.country),
  ),
  ...NON_CAPITAL_CITY_BANK.filter((entry) =>
    [
      "Morocco",
      "Peru",
      "Bolivia",
      "Romania",
      "Croatia",
      "Turkey",
      "Chile",
      "Philippines",
      "Indonesia",
      "Vietnam",
      "Ukraine",
      "Argentina",
      "Laos",
      "New Zealand",
      "Kenya",
      "South Africa",
      "Egypt",
      "Pakistan",
    ].includes(entry.country),
  ),
];

const DIFFICULTY_POOL_CONFIG = {
  "capital-cities": {
    basePool: CITY_POOLS["capital-cities"],
    fillBank: CAPITAL_CITY_BANK,
    targetSize: TARGET_POOL_SIZES["capital-cities"],
    bankOffset: 0,
  },
  "normal-mode": {
    basePool: CITY_POOLS["normal-mode"],
    fillBank: NORMAL_MODE_CITY_BANK,
    targetSize: TARGET_POOL_SIZES["normal-mode"],
    bankOffset: 0,
  },
  "globe-trotter": {
    basePool: CITY_POOLS["globe-trotter"],
    fillBank: GLOBE_TROTTER_CITY_BANK,
    targetSize: TARGET_POOL_SIZES["globe-trotter"],
    bankOffset: 0,
  },
  "atlas-god": {
    basePool: CITY_POOLS["atlas-god"],
    fillBank: ATLAS_GOD_CITY_BANK,
    targetSize: TARGET_POOL_SIZES["atlas-god"],
    bankOffset: 0,
  },
};

function fillPool(basePool, fillBank, targetSize, bankOffset = 0) {
  const unique = new Map();
  [...basePool, ...fillBank].forEach((entry) => {
    const key = `${entry.city}|${entry.country}`;
    if (!unique.has(key)) {
      unique.set(key, entry);
    }
  });

  if (basePool.length >= targetSize) {
    return basePool.slice(0, targetSize);
  }

  const result = [...basePool];
  const inResult = new Set(result.map((entry) => `${entry.city}|${entry.country}`));
  let cursor = bankOffset;
  let safety = 0;

  while (result.length < targetSize && safety < fillBank.length * 4) {
    const candidate = fillBank[cursor % fillBank.length];
    const key = `${candidate.city}|${candidate.country}`;
    if (!inResult.has(key)) {
      result.push(candidate);
      inResult.add(key);
    }
    cursor += 1;
    safety += 1;
  }

  if (result.length < targetSize) {
    throw new Error(`Not enough unique cities to fill target size ${targetSize}`);
  }

  return result;
}

const NORMALIZED_CITY_POOLS = Object.fromEntries(
  Object.entries(DIFFICULTY_POOL_CONFIG).map(([key, config]) => [
    key,
    fillPool(config.basePool, config.fillBank, config.targetSize, config.bankOffset),
  ]),
);

const DIFFICULTY_SETTINGS = {
  "capital-cities": {
    name: "Capital Cities",
    rounds: 20,
    optionsPerQuestion: 4,
    pointsOnCorrect: 10,
    penaltyOnWrong: 0,
  },
  "normal-mode": {
    name: "Normal Mode",
    rounds: 20,
    optionsPerQuestion: 4,
    pointsOnCorrect: 12,
    penaltyOnWrong: 2,
  },
  "globe-trotter": {
    name: "Globe Trotter",
    rounds: 20,
    optionsPerQuestion: 6,
    pointsOnCorrect: 14,
    penaltyOnWrong: 4,
  },
  "atlas-god": {
    name: "Atlas God",
    rounds: 20,
    optionsPerQuestion: 6,
    pointsOnCorrect: 16,
    penaltyOnWrong: 8,
  },
};

const roundEl = document.getElementById("round");
const scoreEl = document.getElementById("score");
const correctEl = document.getElementById("correct");
const difficultyNameEl = document.getElementById("difficulty-name");
const cityEl = document.getElementById("city");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const quitBtn = document.getElementById("quit");
const difficultyInputs = document.querySelectorAll('input[name="difficulty"]');

let rounds = [];
let currentRoundIndex = 0;
let score = 0;
let correctCount = 0;
let answered = false;
let gameActive = false;
let activeDifficultyKey = "capital-cities";

function shuffle(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function getActiveDifficulty() {
  return DIFFICULTY_SETTINGS[activeDifficultyKey];
}

function getActiveCityPool() {
  return NORMALIZED_CITY_POOLS[activeDifficultyKey] || [];
}

function pickUniqueCountryDistractors(pool, correctEntry, count) {
  const byCountry = new Map();
  pool.forEach((entry) => {
    if (!byCountry.has(entry.country)) {
      byCountry.set(entry.country, entry);
    }
  });

  byCountry.delete(correctEntry.country);
  return shuffle([...byCountry.values()]).slice(0, count);
}

function createRounds(config, pool) {
  const roundCount = Math.min(config.rounds, pool.length);
  const picked = shuffle(pool).slice(0, roundCount);
  return picked.map((entry) => {
    const distractors = pickUniqueCountryDistractors(
      pool,
      entry,
      config.optionsPerQuestion - 1,
    );

    if (distractors.length < config.optionsPerQuestion - 1) {
      throw new Error("Not enough unique countries to build options for this difficulty.");
    }

    const options = shuffle([entry, ...distractors]);
    return { answer: entry, options };
  });
}

function setDifficultySelectionEnabled(enabled) {
  difficultyInputs.forEach((input) => {
    input.disabled = !enabled;
  });
}

function refreshDifficultyLabel() {
  difficultyNameEl.textContent = getActiveDifficulty().name;
}

function syncDifficultyFromSelection() {
  const selected = document.querySelector('input[name="difficulty"]:checked');
  if (selected && DIFFICULTY_SETTINGS[selected.value]) {
    activeDifficultyKey = selected.value;
  }
  refreshDifficultyLabel();
}

function updateHud() {
  const config = getActiveDifficulty();
  const roundNumber = gameActive ? Math.min(currentRoundIndex + 1, config.rounds) : 0;
  roundEl.textContent = `${roundNumber} / ${config.rounds}`;
  scoreEl.textContent = String(score);
  correctEl.textContent = String(correctCount);
}

function showFeedback(message, tone = "") {
  feedbackEl.textContent = message;
  feedbackEl.classList.remove("good", "bad");
  if (tone) {
    feedbackEl.classList.add(tone);
  }
}

function disableOptions() {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function handleAnswer(selectedCountry, selectedButton) {
  if (answered) {
    return;
  }

  answered = true;
  nextBtn.disabled = false;
  const round = rounds[currentRoundIndex];
  const isCorrect = selectedCountry === round.answer.country;
  const config = getActiveDifficulty();

  disableOptions();

  const optionButtons = optionsEl.querySelectorAll("button");
  optionButtons.forEach((button) => {
    const country = button.dataset.country;
    if (country === round.answer.country) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    score += config.pointsOnCorrect;
    correctCount += 1;
    selectedButton.classList.add("correct");
    showFeedback(`Correct! +${config.pointsOnCorrect} points`, "good");
  } else {
    if (config.penaltyOnWrong > 0) {
      score -= config.penaltyOnWrong;
    }
    selectedButton.classList.add("wrong");
    const penaltyNote =
      config.penaltyOnWrong > 0 ? ` (-${config.penaltyOnWrong} points)` : "";
    showFeedback(`Not quite. ${round.answer.city} is in ${round.answer.country}.${penaltyNote}`, "bad");
  }

  updateHud();
}

function renderRound() {
  const round = rounds[currentRoundIndex];
  answered = false;
  nextBtn.disabled = true;

  cityEl.textContent = round.answer.city;
  optionsEl.innerHTML = "";

  round.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.country = option.country;
    button.innerHTML = `<span class="flag">${option.flag}</span>${option.country}`;
    button.addEventListener("click", () => handleAnswer(option.country, button));
    optionsEl.appendChild(button);
  });

  showFeedback("Pick one flag.");
  updateHud();
}

function endGame() {
  const config = getActiveDifficulty();
  cityEl.textContent = "Game Over";
  optionsEl.innerHTML = "";
  const accuracy = Math.round((correctCount / config.rounds) * 100);
  showFeedback(
    `Final score: ${score}. Accuracy: ${accuracy}% (${correctCount}/${config.rounds}) on ${config.name}.`,
    "good",
  );
  roundEl.textContent = `${config.rounds} / ${config.rounds}`;
  nextBtn.disabled = true;
  quitBtn.disabled = true;
  startBtn.disabled = false;
  startBtn.textContent = "Play Again";
  gameActive = false;
  setDifficultySelectionEnabled(true);
}

function quitGame() {
  if (!gameActive) {
    return;
  }

  rounds = [];
  currentRoundIndex = 0;
  score = 0;
  correctCount = 0;
  answered = false;
  gameActive = false;

  cityEl.textContent = "Press Start";
  optionsEl.innerHTML = "";
  showFeedback("Game cancelled. You can pick a difficulty and start again.");
  updateHud();

  nextBtn.disabled = true;
  quitBtn.disabled = true;
  startBtn.disabled = false;
  startBtn.textContent = "Start Game";
  setDifficultySelectionEnabled(true);
}

function nextRound() {
  const config = getActiveDifficulty();
  currentRoundIndex += 1;
  if (currentRoundIndex >= config.rounds) {
    endGame();
    return;
  }
  renderRound();
}

function startGame() {
  syncDifficultyFromSelection();
  const config = getActiveDifficulty();
  const pool = getActiveCityPool();
  if (pool.length < config.optionsPerQuestion) {
    showFeedback("Not enough cities configured for this difficulty.", "bad");
    return;
  }

  rounds = createRounds(config, pool);
  currentRoundIndex = 0;
  score = 0;
  correctCount = 0;
  gameActive = true;
  startBtn.disabled = true;
  startBtn.textContent = "Game Running";
  quitBtn.disabled = false;
  setDifficultySelectionEnabled(false);
  renderRound();
}

difficultyInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (gameActive) {
      return;
    }
    syncDifficultyFromSelection();
    updateHud();
    showFeedback("Difficulty updated. Press Start when ready.");
  });
});

syncDifficultyFromSelection();
updateHud();

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextRound);
quitBtn.addEventListener("click", quitGame);