// 1. Extracting Emails: This example uses regex to extract email addresses from a string:
const text = "This is an email johndoe@example.com and another jane.doe@company.org";
const emailRegex = /\b[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\b/g;
const emails = text.match(emailRegex);

console.log(emails); // Output: ["johndoe@example.com", "jane.doe@company.org"]

// Explanation:
// `\b`: Matches a word boundary (ensures the email is not part of another word).
// `[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+`: Matches one or more occurrences of username characters.
// `@`: Matches the "@" symbol.
// `[a-zA-Z0-9]`: Matches the first character of the domain name.
// `(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?`: Matches an optional subdomain (up to 61 characters).
// `(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*`: Matches zero or more repetitions of the subdomain pattern.
// `\b`: Matches another word boundary (ensures the entire email is captured).
// `g`: Global flag to find all email addresses in the text.


// 2. Validating Phone Numbers (US Format): This example checks if a string matches a valid US phone number format:
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
const phoneNumber = "123-456-7890";

console.log(phoneRegex.test(phoneNumber)); // Output: true

// Explanation:
// `^`: Matches the beginning of the string.
// `\(?`: Matches an optional opening parenthesis.
// `([0-9]{3})`: Captures the first three digits (area code) in a group.
// `\)?`: Matches an optional closing parenthesis.
// `[-. ]`: Matches a hyphen, dot, or space (delimiter).
// `([0-9]{3})`: Captures the next three digits in a group.
// `[-. ]`: Matches another delimiter.
// `([0-9]{4})`: Captures the last four digits in a group.
// `$`: Matches the end of the string.


// Regular Expression Object Methods:

// 1. `match(string)`:
  // - Returns an array of all matches of the pattern in the string.
  // - Returns an empty array `[]` if there are no matches.

  const text5 = "This is a sentence with repeated words words";
  const wordRegex = /\bwords\b/g;
  const matches = text5.match(wordRegex);
  console.log(matches); // Output: ["words", "words"]

// 2. `search(string)`:
  // - Returns the index of the first match of the pattern in the string.
  // - Returns -1 if no match is found.

  const text6 = "Find the hidden code 12345";
  const codeRegex = /\d{4}/;
  const codeIndex = text6.search(codeRegex);
  console.log(codeIndex); // Output: 21