function telephoneCheck(str) {
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 5555555555
    /^\d{10}$/,
  ];
  return validPatterns.some((pattern) => pattern.test(str));
}


numberlist = [
  "555-555-5555",

  "(555)555-5555",

  "1 (555) 555-5555",

  "1 555 555 5555",

  "5555555555",

  "1 555 555 5555",
];

numberlist.forEach(element => {
    console.log(telephoneCheck(element));
    
});