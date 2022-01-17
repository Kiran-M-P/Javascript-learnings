function palindrome(str) {
  cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  flipedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === flipedStr) {
    return true;
  }
  return false;
}

palindrome("A man, a plan, a canal. Panama");
