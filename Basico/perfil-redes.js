//social media profile
//1.Username
const username = 'codingADventure'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

//2.Address 
const address = {
    street: '123 Main Street',
    city : 'Techville',
    state : 'Codingland',
    zipCode: 54321
}

//3.Hobbies
const hobbies = ['Coding','Reading','Gaming']

// generating Personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(',')}.
Follow me for coding adventures!`

console.log(personalizedBio)