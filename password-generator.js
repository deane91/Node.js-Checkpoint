//first we installed 'generate-paswword' package using npm install generate-password
const generatePassword = require("generate-password");

function generateRandomPassword()
{
    const password = generatePassword.generate({
        length : 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true,
        strict: true

    })

    console.log('Generated Password:', password);
}

generateRandomPassword();
