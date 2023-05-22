class FamilyMember {
	constructor(
		firstName,
		lastName,
		gender,
		education,
		profession,
		familyWalletAmount
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.education = education;
		this.profession = profession;
		this.familyWalletAmount = familyWalletAmount;
	}

	contributeToFamilyWallet(moneyContribution) {
		this.familyWalletAmount = 0;
		this.familyWalletAmount += moneyContribution;
		return this.familyWalletAmount;
	}
}

class Address {
	constructor(city, country) {
		this.city = city;
		this.country = country;
	}
}

const ekeopreO = new FamilyMember();
const karina = new FamilyMember();
const karipre = new FamilyMember();
const ebi = new FamilyMember();
const kala = new FamilyMember();
const ekeopre = new FamilyMember(
	"ekeopre",
	"beredugo",
	"male",
	"bsc",
	"frontend developer",
	0
);
const yanate = new FamilyMember();

// ekeopre.contribution(30);
console.log(ekeopre.contributeToFamilyWallet(30));

// to export all classes list them in here
// module.exports = {
//   ClassA,
//   ClassB
// };

//to import them in the other file, use this at the top
//const { ClassA, ClassB } = require('./pathTOFILE');
