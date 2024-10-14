let data = [
	{
		id: 1,
		name: 'Rizki',
		age: 20,
		address: 'bacem',
		city: 'blitar',
		phone: '085735913078',
		favoriteFoods: ['pizza', 'burger', 'nugget'],
		favoriteDrinks: ['coffee', 'tea'],
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 20,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678-567',
		favoriteFoods: ['salad', 'sushi'],
		favoriteDrinks: ['water', 'juice'],
	},
	{
		id: 3,
		name: 'Kim Mingyu',
		age: 18,
		address: 'Busan',
		city: 'Korea',
		phone: '555-8765-777',
		favoriteFoods: ['steak', 'burger'],
		favoriteDrinks: ['beer', 'whiskey'],
	},
	{
		id: 4,
		name: 'Matthew',
		age: 25,
		address: 'Gangnam',
		city: 'Australia',
		phone: '555-4321-678',
		favoriteFoods: ['pasta', 'tacos'],
		favoriteDrinks: ['wine', 'smoothie'],
	},
];

// Menampilkan semua data dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan makanan kesukaan tertentu
const getDataByFavoriteFood = (food) => data.filter(person => person.favoriteFoods.includes(food));
console.log("Data dengan makanan kesukaan 'burger':", getDataByFavoriteFood('burger'));

// TODO 2: Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(person => person.name === name);
console.log("Data dengan nama Jane Smith:", getDataByName('Jane Smith'));

// TODO 3: Dapatkan data dengan city 'Korea'
const getDataByCity = (city) => data.filter(person => person.city === city);
console.log("Data dengan city 'Korea':", getDataByCity('Korea'));

// TODO 4: Dapatkan data dengan phone tertentu
const getDataByPhone = (phone) => data.find(person => person.phone === phone);
console.log("Data dengan phone '555-8765-777':", getDataByPhone('555-8765-777'));

// TODO 5: Dapatkan data dengan minuman kesukaan tertentu
const getDataByFavoriteDrink = (drink) => data.filter(person => person.favoriteDrinks.includes(drink));
console.log("Data dengan minuman kesukaan 'coffee':", getDataByFavoriteDrink('coffee'));

// TODO 6: Dapatkan data dengan alamat tertentu
const getDataByAddress = (address) => data.filter(person => person.address === address);
console.log("Data dengan alamat 'bacem':", getDataByAddress('bacem'));
