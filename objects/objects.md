# Objects

### When you think about objects, think of:

- Properties - They describe the characteristics of a web page (such as titile of the page)

- Methods - Perform a partucular task using properties of the object

- Events - Triggered whwen the user interacts with the computer

Events trigger methods and methods then access properties.

## How to create constructor functions

constructor functions are used to create a type of template that all other objects created from it using the "new" keyword will follow. The function name always starts with uppercase letter for example:

```
Class EkeopreFamilyMember {
constructor (firstName, LastName, gender education, profession){
this.firstName = firstName;
this.lastName = lastName;
this.gender = gender;
this.education = education;
this.profession = profession;
}

contribution(){
	return moneyContribution
}

}

```

Other family member objects can now be created from the above function and given values

```
const ekeopre = new FamilyMember()
const karina = new FamilyMember()
const karipre = new FamilyMember()
const ebi = new FamilyMember()
const kala = new FamilyMember()
const ekeopre = new FamilyMember()
const yanate = new FamilyMember()

```
