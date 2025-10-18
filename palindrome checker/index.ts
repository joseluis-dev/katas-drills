const word = 'anilina';

export const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let palindrome = false

  const mid = cleanedStr.length >> 1
  for (let i = 0; i < mid; i++) {
    palindrome = cleanedStr[i] === cleanedStr[cleanedStr.length - 1 - i]
  }

  return palindrome
}

const main = () => {
  console.log(`Is "${word}" a palindrome?`, isPalindrome(word));
}

main()