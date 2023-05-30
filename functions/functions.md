## Functions

Functions are a way to organise the instructions that you write in a script
into code blocks. A function can have a descriptive name that gives anyone that
reads it an idea of what the function does.
For example `function repeatWord(word)` can be a function that takes in a word and repeats
the word acertain number of times.

## Function declaration vs function expression

###function declaration

Function declaration has a property of being able to be hjoisted to the top and
seen by the interpreter even when it is called before it is declared.

For example:

```
printWord("hello")

function printWord(){
  console.log(word)
}

```

this code will work fine even as it is called before it is declared
and output will be `//hello`

### function expression

function expression is used when you want to store a function in a variable

for example

```
const age = function(personAge){
      return personAge
}
```

Here, the age variable is being assigned the value of a function that returns personAge.
It is is commonly used when working with an IFFE, to be called immediately.
example

```
const age = (function(personAge){
      return personAge
})(4)
```

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
