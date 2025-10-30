require('dotenv').config();

module.exports = {
  //CYPHER-X:~UEsDBBQAAAgIAOptXlu8o*fiUwQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOUmYERHLCIiKogi3jbmoYQCSm5lUWDjhP8+Qff0zDzszvbyVGRlZJ48eU59A0WJK7RELRh*A4TiBjLUHVlLEBiDSR1FiII+CCGDYAxGS7p8GNMJGl3aOd4rZCcO*dcyeWjelCfEDFt3wL*eknNuvYBnH5D6kuHgDwXb9ixcDTINzUpbD8Jg0ztNbRkqVysJrTJ3G+fkrb2Dt8TpC3h2FSGmuIgNkqAcUZgtUetCTD8Hv7RbzjtrkqufrltLu1XBoLFwct+ke2Ewuzc3+y4*Ip8Y8*vn4BdquDv5us8NeuvS1*KprurW+lHdYiNyRu5MNa*nbRiHwqvxDr*CcYFCK0QFw6z9NO9wIm1WKJqKi82R9ZzyoquJCa9r3RqNeKhhqzHxjYvTCx9*DjiaPszSovcltSO2ZWa22ItTbr5EeMZO54C7T3ZBFRg0zO3fgbv0Qyvp*+FdW1LH2KoWP0p70BNRkfDWiW2CU13M*GmSTlbKKx05CzP9JPyFfpEcym+nUe7oVaptIvI4NttYTnvTgUzamdu7cFnYrLX0F3zIavonlPN8f*bKtX2VAswtdmuyLZnTyH6NvEOmSsK1bZ35wijlk63urVRiijZUmupghufKW9wLnNZnXbcXe9PsEVVNT4UvXrWXt4lS1FohGHPPPqAoxhWjkOGy6GJqH8Cw8VBAEXsjF8ys031ptUjghwcF88Mj1qG1zJHI19FhuEZZ2MwVlmsrqL2APiC0DFBVoXCOK1bS1kZVBWNUgfHfX*ugQK*sfW1dM4HrgwjTivlFTbIShh87*biEQVDWBfPaItC7A6JgPPwVRozhIq46FusC0iDBDdITyCowjmBWoZ*zIYpCMGa0Rj89q5dhR7u9Pbsr86yBPsjf1oFDMAYqL3CSqKjDEceNefGv6su9KwsJ+VIgBvoge0sTJU4RZF4eSqKq8F1iF3*+BNjVCxGDOKvAGOjWQahde244pnINYtPUjFjT4671x0Afunhnfpnu1*IhWVwyI3nwC5Emqx69qytSpWu9yuTwknn2Yzj3Bf*lH4qAMSAJGdRy7dnDkW+SbXNc7y8n03FcB+KcBUVv5x7bWF5FBQpTuh*d82l7bwRdiZyrqEZTZSYd9dnCz5mRXU690QVu40n80nULUYMD9Huz*RC6ns9ZfOm5QsGMvRrNaZRebwmWGlH3mVYpsjI5KMZBC4rX2024k1G4Yb2tdHQtj0psIu2iaM3s7JUn+vW+3+vJ5l2xb47JfrxU+E1N3aq63wijN+MXsFvgf6*uHXinsOGz*1uNH0*Jv9hx4pHZruZK7yBtrUDFaCl6g5vieqPLYhrTBRIOkn+11QnncOD5*NoHJIMsKmnePZhFSEscgj6gZd1J1iqi8g*NdM2yJj8mz2DFtF822OEcVQzmBIw5ecQpvCIK8nuWS0syh1UCxoBbislc7DTdaoR4DLIPVwGt+xbXOXh+B1BLAQIUAxQAAAgIAOptXlu8o*fiUwQAAG8HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==
  SESSION_ID: process.env.SESSION_ID || '',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
