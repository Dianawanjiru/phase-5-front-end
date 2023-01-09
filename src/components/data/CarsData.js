
const carsData = [
    {
      "id": 1,
      "make": "Chevy",
      "model": "Malibu",
      "price": "94577.00",
      "fuel_type": "E-85/Gasoline",
      "transmission": "Manual",
      "mileage": "46860",
      "engine_size": "1 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1610915504025-d806f0041582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEZvcmQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 2,
      "make": "Chevy",
      "model": "Malibu",
      "price": "53113.00",
      "fuel_type": "Gasoline",
      "transmission": "Manual",
      "mileage": "72511",
      "engine_size": "4 Cylinder Engine",
      "year": "2014",
      "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 3,
      "make": "Honda",
      "model": "Civic",
      "price": "77655.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Automanual",
      "mileage": "81930",
      "engine_size": "2 Cylinder Engine",
      "year": "2019",
      "image": "https://images.unsplash.com/photo-1610915504025-d806f0041582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEZvcmQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 4,
      "make": "Honda",
      "model": "Civic",
      "price": "94739.00",
      "fuel_type": "Diesel",
      "transmission": "Automatic",
      "mileage": "44246",
      "engine_size": "2 Cylinder Engine",
      "year": "2014",
      "image": "https://images.unsplash.com/photo-1669215420018-098507d14861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmVueiUyMGFuZCUyMGplZXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 5,
      "make": "Dodge",
      "model": "Durango",
      "price": "56890.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "61647",
      "engine_size": "2 Cylinder Engine",
      "year": "2014",
      "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 6,
      "make": "Dodge",
      "model": "Durango",
      "price": "48728.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Manual",
      "mileage": "67209",
      "engine_size": "2 Cylinder Engine",
      "year": "2012",
      "image": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TGluY29sbiUyME1LUyUyMENhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 7,
      "make": "Honda",
      "model": "Odyssey",
      "price": "75924.00",
      "fuel_type": "Ethanol",
      "transmission": "Automatic",
      "mileage": "21027",
      "engine_size": "1 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1667297413691-6a07f6127ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEJ1aWNrJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 8,
      "make": "Honda",
      "model": "Odyssey",
      "price": "79552.00",
      "fuel_type": "Electric",
      "transmission": "CVT",
      "mileage": "16290",
      "engine_size": "2 Cylinder Engine",
      "year": "2018",
      "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fEZvcmQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 9,
      "make": "Toyota",
      "model": "Prius",
      "price": "86569.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Manual",
      "mileage": "16009",
      "engine_size": "1 Cylinder Engine",
      "year": "2015",
      "image": "https://images.unsplash.com/photo-1525264626954-d57032a1ab1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FuJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 10,
      "make": "Toyota",
      "model": "Prius",
      "price": "51651.00",
      "fuel_type": "E-85/Gasoline",
      "transmission": "Automanual",
      "mileage": "30805",
      "engine_size": "1 Cylinder Engine",
      "year": "2013",
      "image": "https://images.unsplash.com/photo-1667297413691-6a07f6127ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEJ1aWNrJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 11,
      "make": "Lincoln",
      "model": "MKS",
      "price": "89732.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "CVT",
      "mileage": "31932",
      "engine_size": "4 Cylinder Engine",
      "year": "2015",
      "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 12,
      "make": "Lincoln",
      "model": "MKS",
      "price": "52698.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "48126",
      "engine_size": "3 Cylinder Engine",
      "year": "2010",
      "image": "https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?b=1&s=170667a&w=0&k=20&c=m2g-wU5m2tbqC7C_nWAgu7txHzeEnXKSFuby01V4dtI="
    },
    {
      "id": 13,
      "make": "BMW",
      "model": "X1",
      "price": "80383.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "42751",
      "engine_size": "4 Cylinder Engine",
      "year": "2015",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 14,
      "make": "BMW",
      "model": "X1",
      "price": "49910.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "28796",
      "engine_size": "2 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1616634375264-2d2e17736a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QXV0b21vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 15,
      "make": "Chevy",
      "model": "Silverado",
      "price": "60978.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Automatic",
      "mileage": "64143",
      "engine_size": "1 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 16,
      "make": "Chevy",
      "model": "Silverado",
      "price": "33487.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Manual",
      "mileage": "15144",
      "engine_size": "1 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1541038019982-5b38b55ddea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8QXV0b21vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 17,
      "make": "Chevy",
      "model": "Camero",
      "price": "84338.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Automanual",
      "mileage": "71430",
      "engine_size": "4 Cylinder Engine",
      "year": "2016",
      "image": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TGluY29sbiUyME1LUyUyMENhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 18,
      "make": "Chevy",
      "model": "Camero",
      "price": "56087.00",
      "fuel_type": "Diesel",
      "transmission": "Automanual",
      "mileage": "41150",
      "engine_size": "1 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 19,
      "make": "BMW",
      "model": "X5",
      "price": "94089.00",
      "fuel_type": "Electric",
      "transmission": "Manual",
      "mileage": "12279",
      "engine_size": "4 Cylinder Engine",
      "year": "2018",
      "image": "https://images.unsplash.com/photo-1669215420018-098507d14861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmVueiUyMGFuZCUyMGplZXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 20,
      "make": "BMW",
      "model": "X5",
      "price": "50356.00",
      "fuel_type": "Ethanol",
      "transmission": "Manual",
      "mileage": "75783",
      "engine_size": "2 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 21,
      "make": "Toyota",
      "model": "Corolla",
      "price": "64962.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "15791",
      "engine_size": "1 Cylinder Engine",
      "year": "2015",
      "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 22,
      "make": "Toyota",
      "model": "Corolla",
      "price": "93901.00",
      "fuel_type": "Electric",
      "transmission": "CVT",
      "mileage": "41623",
      "engine_size": "2 Cylinder Engine",
      "year": "2020",
      "image": "https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?b=1&s=170667a&w=0&k=20&c=m2g-wU5m2tbqC7C_nWAgu7txHzeEnXKSFuby01V4dtI="
    },
    {
      "id": 23,
      "make": "Audi",
      "model": "A8",
      "price": "93463.00",
      "fuel_type": "Electric",
      "transmission": "Automanual",
      "mileage": "51315",
      "engine_size": "2 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 24,
      "make": "Audi",
      "model": "A8",
      "price": "63978.00",
      "fuel_type": "Diesel",
      "transmission": "CVT",
      "mileage": "60877",
      "engine_size": "4 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1669215420018-098507d14861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmVueiUyMGFuZCUyMGplZXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 25,
      "make": "Toyota",
      "model": "Prius",
      "price": "66383.00",
      "fuel_type": "Electric",
      "transmission": "CVT",
      "mileage": "66112",
      "engine_size": "2 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1525264626954-d57032a1ab1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FuJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 26,
      "make": "Toyota",
      "model": "Prius",
      "price": "43403.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "11342",
      "engine_size": "1 Cylinder Engine",
      "year": "2017",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 27,
      "make": "BMW",
      "model": "X5",
      "price": "54138.00",
      "fuel_type": "Electric",
      "transmission": "Automanual",
      "mileage": "20912",
      "engine_size": "1 Cylinder Engine",
      "year": "2012",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 28,
      "make": "BMW",
      "model": "X5",
      "price": "38598.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "CVT",
      "mileage": "88868",
      "engine_size": "2 Cylinder Engine",
      "year": "2018",
      "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 29,
      "make": "Dodge",
      "model": "Challenger",
      "price": "90540.00",
      "fuel_type": "E-85/Gasoline",
      "transmission": "Manual",
      "mileage": "21726",
      "engine_size": "4 Cylinder Engine",
      "year": "2019",
      "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 30,
      "make": "Dodge",
      "model": "Challenger",
      "price": "40944.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Manual",
      "mileage": "40301",
      "engine_size": "3 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 31,
      "make": "Lincoln",
      "model": "Navigator",
      "price": "98493.00",
      "fuel_type": "Ethanol",
      "transmission": "Automatic",
      "mileage": "27528",
      "engine_size": "2 Cylinder Engine",
      "year": "2014",
      "image": "https://images.unsplash.com/photo-1525264626954-d57032a1ab1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FuJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 32,
      "make": "Lincoln",
      "model": "Navigator",
      "price": "89422.00",
      "fuel_type": "E-85/Gasoline",
      "transmission": "Automanual",
      "mileage": "39224",
      "engine_size": "3 Cylinder Engine",
      "year": "2014",
      "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 33,
      "make": "Audi",
      "model": "A4",
      "price": "68563.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "75758",
      "engine_size": "1 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 34,
      "make": "Audi",
      "model": "A4",
      "price": "38508.00",
      "fuel_type": "Gasoline",
      "transmission": "Manual",
      "mileage": "44824",
      "engine_size": "3 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 35,
      "make": "Ford",
      "model": "Focus",
      "price": "94859.00",
      "fuel_type": "Ethanol",
      "transmission": "Automanual",
      "mileage": "30243",
      "engine_size": "1 Cylinder Engine",
      "year": "2019",
      "image": "https://images.unsplash.com/photo-1541038019982-5b38b55ddea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8QXV0b21vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 36,
      "make": "Ford",
      "model": "Focus",
      "price": "71074.00",
      "fuel_type": "Gasoline",
      "transmission": "Automatic",
      "mileage": "27738",
      "engine_size": "2 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1610915504025-d806f0041582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEZvcmQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 37,
      "make": "Buick",
      "model": "Verano",
      "price": "38837.00",
      "fuel_type": "Ethanol",
      "transmission": "Automanual",
      "mileage": "45656",
      "engine_size": "3 Cylinder Engine",
      "year": "2016",
      "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 38,
      "make": "Buick",
      "model": "Verano",
      "price": "90351.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Automanual",
      "mileage": "19240",
      "engine_size": "1 Cylinder Engine",
      "year": "2015",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 39,
      "make": "Dodge",
      "model": "Ram",
      "price": "44107.00",
      "fuel_type": "Electric",
      "transmission": "Automanual",
      "mileage": "71945",
      "engine_size": "2 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 40,
      "make": "Dodge",
      "model": "Ram",
      "price": "65790.00",
      "fuel_type": "Gasoline",
      "transmission": "Automanual",
      "mileage": "82752",
      "engine_size": "2 Cylinder Engine",
      "year": "2018",
      "image": "https://images.unsplash.com/photo-1616634375264-2d2e17736a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QXV0b21vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 41,
      "make": "Toyota",
      "model": "Camry",
      "price": "58193.00",
      "fuel_type": "Gasoline",
      "transmission": "Manual",
      "mileage": "55261",
      "engine_size": "1 Cylinder Engine",
      "year": "2018",
      "image": "https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?b=1&s=170667a&w=0&k=20&c=m2g-wU5m2tbqC7C_nWAgu7txHzeEnXKSFuby01V4dtI="
    },
    {
      "id": 42,
      "make": "Toyota",
      "model": "Camry",
      "price": "46570.00",
      "fuel_type": "Gasoline",
      "transmission": "Manual",
      "mileage": "64910",
      "engine_size": "1 Cylinder Engine",
      "year": "2017",
      "image": "https://images.unsplash.com/photo-1525264626954-d57032a1ab1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Tmlzc2FuJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 43,
      "make": "Toyota",
      "model": "Camry",
      "price": "64693.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Manual",
      "mileage": "50755",
      "engine_size": "1 Cylinder Engine",
      "year": "2019",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 44,
      "make": "Toyota",
      "model": "Camry",
      "price": "46260.00",
      "fuel_type": "Gasoline",
      "transmission": "Manual",
      "mileage": "47982",
      "engine_size": "4 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 45,
      "make": "BMW",
      "model": "X1",
      "price": "43695.00",
      "fuel_type": "Ethanol",
      "transmission": "Manual",
      "mileage": "46638",
      "engine_size": "1 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 46,
      "make": "BMW",
      "model": "X1",
      "price": "51196.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "22536",
      "engine_size": "2 Cylinder Engine",
      "year": "2016",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 47,
      "make": "Audi",
      "model": "S5",
      "price": "33244.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "CVT",
      "mileage": "70868",
      "engine_size": "4 Cylinder Engine",
      "year": "2019",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 48,
      "make": "Audi",
      "model": "S5",
      "price": "41612.00",
      "fuel_type": "Diesel",
      "transmission": "CVT",
      "mileage": "58296",
      "engine_size": "4 Cylinder Engine",
      "year": "2017",
      "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 49,
      "make": "Nissan",
      "model": "Pathfiner",
      "price": "63648.00",
      "fuel_type": "Ethanol",
      "transmission": "Manual",
      "mileage": "75151",
      "engine_size": "2 Cylinder Engine",
      "year": "2016",
      "image": "https://images.unsplash.com/photo-1541038019982-5b38b55ddea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8QXV0b21vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 50,
      "make": "Nissan",
      "model": "Pathfiner",
      "price": "31199.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Manual",
      "mileage": "41343",
      "engine_size": "3 Cylinder Engine",
      "year": "2017",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 51,
      "make": "Ford",
      "model": "Mustang",
      "price": "74471.00",
      "fuel_type": "Electric",
      "transmission": "CVT",
      "mileage": "10788",
      "engine_size": "3 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1667297413691-6a07f6127ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEJ1aWNrJTIwQ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 52,
      "make": "Ford",
      "model": "Mustang",
      "price": "77008.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Automatic",
      "mileage": "58251",
      "engine_size": "2 Cylinder Engine",
      "year": "2019",
      "image": "https://images.unsplash.com/photo-1656468014942-fc3f9084b2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEJlbnolMjBhbmQlMjBqZWVwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 53,
      "make": "Chevy",
      "model": "Malibu",
      "price": "65534.00",
      "fuel_type": "Ethanol",
      "transmission": "CVT",
      "mileage": "73285",
      "engine_size": "2 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 54,
      "make": "Chevy",
      "model": "Malibu",
      "price": "46226.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Automatic",
      "mileage": "43815",
      "engine_size": "3 Cylinder Engine",
      "year": "2010",
      "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fEZvcmQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 55,
      "make": "Chevy",
      "model": "Camero",
      "price": "81111.00",
      "fuel_type": "Gasoline Hybrid",
      "transmission": "Automanual",
      "mileage": "72674",
      "engine_size": "2 Cylinder Engine",
      "year": "2022",
      "image": "https://images.unsplash.com/photo-1610915504025-d806f0041582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEZvcmQlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 56,
      "make": "Chevy",
      "model": "Camero",
      "price": "93039.00",
      "fuel_type": "Ethanol",
      "transmission": "Manual",
      "mileage": "31040",
      "engine_size": "2 Cylinder Engine",
      "year": "2021",
      "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 57,
      "make": "Chevy",
      "model": "Malibu",
      "price": "95927.00",
      "fuel_type": "Compressed Natural Gas",
      "transmission": "Automanual",
      "mileage": "71998",
      "engine_size": "2 Cylinder Engine",
      "year": "2017",
      "image": "https://images.unsplash.com/photo-1596768336967-50e29bea4d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 58,
      "make": "Chevy",
      "model": "Malibu",
      "price": "67620.00",
      "fuel_type": "Electric",
      "transmission": "Automatic",
      "mileage": "23688",
      "engine_size": "4 Cylinder Engine",
      "year": "2012",
      "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEF1dG9tb2JpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 59,
      "make": "Lincoln",
      "model": "MKX",
      "price": "83974.00",
      "fuel_type": "E-85/Gasoline",
      "transmission": "CVT",
      "mileage": "26574",
      "engine_size": "1 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1459603677915-a62079ffd002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TGluY29sbiUyME1LUyUyMENhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 60,
      "make": "Lincoln",
      "model": "MKX",
      "price": "74985.00",
      "fuel_type": "Diesel",
      "transmission": "Automatic",
      "mileage": "60025",
      "engine_size": "2 Cylinder Engine",
      "year": "2020",
      "image": "https://images.unsplash.com/photo-1669215420018-098507d14861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmVueiUyMGFuZCUyMGplZXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  export default carsData;