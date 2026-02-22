const QUIZ_DATA = {

  jss1: {

    math: {
      lcm_hcf: [
        {
  question: "Find the HCF of 8 and 12.",
  options: ["2", "4", "6", "8"],
  answer: 1
},
{
  question: "Find the LCM of 4 and 6.",
  options: ["10", "12", "18", "24"],
  answer: 1
},
{
  question: "Find the HCF of 15 and 25.",
  options: ["5", "10", "15", "25"],
  answer: 0
},
{
  question: "Find the LCM of 5 and 7.",
  options: ["12", "30", "35", "42"],
  answer: 2
},
{
  question: "Find the HCF of 18 and 24.",
  options: ["3", "6", "9", "12"],
  answer: 1
},
{
  question: "Find the LCM of 3 and 9.",
  options: ["3", "6", "9", "12"],
  answer: 2
},
{
  question: "Find the HCF of 21 and 28.",
  options: ["5", "6", "7", "9"],
  answer: 2
},
{
  question: "Find the LCM of 8 and 10.",
  options: ["20", "30", "40", "80"],
  answer: 2
},
{
  question: "Find the HCF of 14 and 35.",
  options: ["5", "7", "14", "35"],
  answer: 1
},
{
  question: "Find the LCM of 9 and 12.",
  options: ["18", "24", "36", "48"],
  answer: 2
},
{
  question: "Find the HCF of 27 and 36.",
  options: ["3", "6", "9", "12"],
  answer: 2
},
{
  question: "Find the LCM of 6 and 15.",
  options: ["15", "30", "45", "60"],
  answer: 1
},
{
  question: "Find the HCF of 16 and 24.",
  options: ["4", "6", "8", "12"],
  answer: 2
},
{
  question: "Find the LCM of 11 and 3.",
  options: ["11", "22", "33", "44"],
  answer: 2
},
{
  question: "Find the HCF of 32 and 48.",
  options: ["8", "12", "16", "24"],
  answer: 2
},
{
  question: "Find the LCM of 14 and 21.",
  options: ["28", "35", "42", "63"],
  answer: 2
},
{
  question: "What is the HCF of 20 and 30?",
  options: ["5", "10", "15", "20"],
  answer: 1
},
{
  question: "What is the LCM of 12 and 15?",
  options: ["30", "45", "60", "90"],
  answer: 2
},
{
  question: "Find the HCF of 45 and 60.",
  options: ["5", "10", "15", "20"],
  answer: 2
},
{
  question: "Find the LCM of 16 and 20.",
  options: ["40", "60", "80", "100"],
  answer: 2
},
{
  question: "Find the HCF of 24, 36 and 60.",
  options: ["6", "8", "12", "18"],
  answer: 2
},
{
  question: "Find the LCM of 4, 6 and 8.",
  options: ["12", "16", "24", "32"],
  answer: 2
},
{
  question: "Find the HCF of 18, 27 and 45.",
  options: ["3", "6", "9", "18"],
  answer: 2
},
{
  question: "Find the LCM of 5, 10 and 15.",
  options: ["15", "30", "45", "60"],
  answer: 1
},
{
  question: "Find the HCF of 72 and 108.",
  options: ["12", "18", "24", "36"],
  answer: 3
},
{
  question: "Find the LCM of 18 and 30.",
  options: ["60", "72", "90", "120"],
  answer: 2
},
{
  question: "Find the HCF of 64 and 96.",
  options: ["8", "16", "24", "32"],
  answer: 3
},
{
  question: "Find the LCM of 25 and 30.",
  options: ["100", "120", "150", "200"],
  answer: 2
},
{
  question: "The HCF of two numbers is 6. Which of these pairs could be correct?",
  options: ["12 and 18", "8 and 14", "10 and 15", "9 and 21"],
  answer: 0
},
{
  question: "The LCM of two numbers is 24. Which pair is possible?",
  options: ["6 and 8", "5 and 12", "7 and 9", "10 and 12"],
  answer: 0
},
{
  question: "Three bells ring at intervals of 6, 8 and 12 minutes. After how many minutes will they ring together again?",
  options: ["12", "24", "36", "48"],
  answer: 1
},
{
  question: "Two buses leave a station every 15 minutes and 20 minutes. After how many minutes will they leave together again?",
  options: ["30", "45", "60", "75"],
  answer: 2
},
{
  question: "Find the greatest number that divides 42 and 56 exactly.",
  options: ["7", "14", "21", "28"],
  answer: 1
},
{
  question: "Find the smallest number divisible by both 9 and 15.",
  options: ["30", "45", "60", "90"],
  answer: 1
},
{
  question: "The HCF of 36 and 54 is:",
  options: ["6", "9", "12", "18"],
  answer: 3
},
{
  question: "The LCM of 21 and 6 is:",
  options: ["21", "42", "63", "84"],
  answer: 1
},
{
  question: "Find the HCF of 81 and 108.",
  options: ["9", "18", "27", "36"],
  answer: 2
},
{
  question: "Find the LCM of 16 and 24.",
  options: ["32", "48", "64", "96"],
  answer: 1
},
{
  question: "Find the HCF of 50 and 75.",
  options: ["5", "10", "15", "25"],
  answer: 3
},
{
  question: "Find the LCM of 12 and 18.",
  options: ["24", "36", "48", "72"],
  answer: 1
},
{
  question: "The HCF of two numbers is 8 and their LCM is 96. If one number is 24, find the other.",
  options: ["16", "32", "48", "64"],
  answer: 1
},
{
  question: "If HCF of two numbers is 5 and one number is 35, which could be the other?",
  options: ["15", "20", "25", "40"],
  answer: 0
},
{
  question: "Find the HCF of 84 and 126.",
  options: ["14", "21", "28", "42"],
  answer: 1
},
{
  question: "Find the LCM of 9, 12 and 15.",
  options: ["90", "120", "180", "360"],
  answer: 2
},
{
  question: "The product of two numbers is 180 and their HCF is 6. Find their LCM.",
  options: ["30", "60", "90", "180"],
  answer: 1
},
{
  question: "Find the HCF of 96 and 144.",
  options: ["12", "24", "36", "48"],
  answer: 3
},
{
  question: "Find the LCM of 7, 14 and 21.",
  options: ["21", "28", "42", "84"],
  answer: 2
},
{
  question: "Two lights blink every 18 seconds and 24 seconds. After how many seconds will they blink together?",
  options: ["36", "48", "72", "96"],
  answer: 2
},
{
  question: "Find the HCF of 105 and 140.",
  options: ["5", "7", "14", "35"],
  answer: 3
},
{
  question: "Find the LCM of 18 and 45.",
  options: ["45", "60", "75", "90"],
  answer: 3
},
{
  question: "The HCF of two numbers is 4 and their LCM is 80. If one number is 20, find the other.",
  options: ["8", "12", "16", "16"],
  answer: 2
},
{
  question: "Find the HCF of 120 and 150.",
  options: ["10", "15", "20", "30"],
  answer: 3
},
{
  question: "Find the LCM of 8, 12 and 20.",
  options: ["24", "40", "60", "120"],
  answer: 3
},
{
  question: "The smallest number divisible by 6, 9 and 15 is:",
  options: ["30", "45", "60", "90"],
  answer: 3
},
{
  question: "Find the HCF of 54 and 90.",
  options: ["6", "9", "12", "18"],
  answer: 3
},
{
  question: "Find the LCM of 14 and 35.",
  options: ["35", "70", "105", "140"],
  answer: 1
},
{
  question: "Three events happen every 10, 15 and 20 days. After how many days will they occur together?",
  options: ["30", "60", "90", "120"],
  answer: 1
},
{
  question: "Find the HCF of 121 and 242.",
  options: ["11", "22", "33", "44"],
  answer: 1
},
{
  question: "Find the LCM of 24 and 36.",
  options: ["48", "72", "96", "144"],
  answer: 1
},
{
  question: "The greatest number that divides 63 and 81 exactly is:",
  options: ["3", "9", "18", "27"],
  answer: 1
},
      ],
      algebra: [
        {
          question: "What is 2 + 3?",
          options: ["4", "5", "6", "7"],
          answer: 1
        },
        {
          question: "Solve: 5 × 2",
          options: ["7", "10", "12", "15"],
          answer: 1
        }
      ],
      fractions: [
{
  question: "What is 1/2 + 1/2?",
  options: ["1", "2", "1/2", "0"],
  answer: 0
},
{
  question: "What is 3/4 - 1/4?",
  options: ["1/2", "2/4", "1/4", "3/4"],
  answer: 0
},
{
  question: "Which is equivalent to 2/4?",
  options: ["1/2", "3/4", "2/3", "4/2"],
  answer: 0
},
{
  question: "Simplify 4/8.",
  options: ["1/2", "2/4", "3/4", "4/8"],
  answer: 0
},
{
  question: "What is 5/10 in simplest form?",
  options: ["1/2", "5/10", "2/5", "1/5"],
  answer: 0
},
{
  question: "What is 2/3 + 1/3?",
  options: ["3/6", "1", "2/6", "3/3"],
  answer: 1
},
{
  question: "What is 6/7 - 2/7?",
  options: ["4/7", "5/7", "3/7", "4/14"],
  answer: 0
},
{
  question: "Which fraction is greater?",
  options: ["3/5", "2/5", "1/5", "4/10"],
  answer: 0
},
{
  question: "What is 1/4 of 8?",
  options: ["2", "4", "6", "8"],
  answer: 0
},
{
  question: "What is 3/5 of 10?",
  options: ["5", "6", "7", "8"],
  answer: 1
},
{
  question: "Convert 2/2 to a whole number.",
  options: ["1", "2", "0", "1/2"],
  answer: 0
},
{
  question: "Which is a proper fraction?",
  options: ["3/4", "5/3", "7/2", "9/4"],
  answer: 0
},
{
  question: "Which is an improper fraction?",
  options: ["2/3", "4/5", "7/4", "3/8"],
  answer: 2
},
{
  question: "What is 10/5?",
  options: ["1", "2", "3", "5"],
  answer: 1
},
{
  question: "What is 1/3 + 1/3?",
  options: ["2/6", "2/3", "1/3", "3/3"],
  answer: 1
},
{
  question: "Simplify 9/12.",
  options: ["3/4", "2/3", "1/4", "4/3"],
  answer: 0
},
{
  question: "Which equals 3/6?",
  options: ["1/2", "2/3", "3/4", "4/6"],
  answer: 0
},
{
  question: "What is 4/5 - 1/5?",
  options: ["3/5", "2/5", "4/5", "1/5"],
  answer: 0
},
{
  question: "What is 2/8 simplified?",
  options: ["1/4", "2/4", "3/8", "4/8"],
  answer: 0
},
{
  question: "What is 5/6 - 1/6?",
  options: ["4/6", "2/3", "3/6", "1/6"],
  answer: 1
},
{
  question: "What is 1/2 + 1/2?",
  options: ["1", "2", "1/2", "0"],
  answer: 0
},
{
  question: "What is 3/4 - 1/4?",
  options: ["1/2", "2/4", "1/4", "3/4"],
  answer: 0
},
{
  question: "Which is equivalent to 2/4?",
  options: ["1/2", "3/4", "2/3", "4/2"],
  answer: 0
},
{
  question: "Simplify 4/8.",
  options: ["1/2", "2/4", "3/4", "4/8"],
  answer: 0
},
{
  question: "What is 5/10 in simplest form?",
  options: ["1/2", "5/10", "2/5", "1/5"],
  answer: 0
},
{
  question: "What is 2/3 + 1/3?",
  options: ["3/6", "1", "2/6", "3/3"],
  answer: 1
},
{
  question: "What is 6/7 - 2/7?",
  options: ["4/7", "5/7", "3/7", "4/14"],
  answer: 0
},
{
  question: "Which fraction is greater?",
  options: ["3/5", "2/5", "1/5", "4/10"],
  answer: 0
},
{
  question: "What is 1/4 of 8?",
  options: ["2", "4", "6", "8"],
  answer: 0
},
{
  question: "What is 3/5 of 10?",
  options: ["5", "6", "7", "8"],
  answer: 1
},
{
  question: "Convert 2/2 to a whole number.",
  options: ["1", "2", "0", "1/2"],
  answer: 0
},
{
  question: "Which is a proper fraction?",
  options: ["3/4", "5/3", "7/2", "9/4"],
  answer: 0
},
{
  question: "Which is an improper fraction?",
  options: ["2/3", "4/5", "7/4", "3/8"],
  answer: 2
},
{
  question: "What is 10/5?",
  options: ["1", "2", "3", "5"],
  answer: 1
},
{
  question: "What is 1/3 + 1/3?",
  options: ["2/6", "2/3", "1/3", "3/3"],
  answer: 1
},
{
  question: "Simplify 9/12.",
  options: ["3/4", "2/3", "1/4", "4/3"],
  answer: 0
},
{
  question: "Which equals 3/6?",
  options: ["1/2", "2/3", "3/4", "4/6"],
  answer: 0
},
{
  question: "What is 4/5 - 1/5?",
  options: ["3/5", "2/5", "4/5", "1/5"],
  answer: 0
},
{
  question: "What is 2/8 simplified?",
  options: ["1/4", "2/4", "3/8", "4/8"],
  answer: 0
},
{
  question: "What is 5/6 - 1/6?",
  options: ["4/6", "2/3", "3/6", "1/6"],
  answer: 1
},
{
  question: "A boy ate 1/4 of a cake and his sister ate 1/4. How much was eaten?",
  options: ["1/2", "1/4", "2/4", "3/4"],
  answer: 0
},
{
  question: "A tank is 3/5 full. How much more is needed to fill it?",
  options: ["2/5", "1/5", "3/10", "1/2"],
  answer: 0
},
{
  question: "What is 2/3 - 1/6?",
  options: ["1/2", "1/3", "1/6", "2/6"],
  answer: 0
},
{
  question: "What is 5/12 + 1/4?",
  options: ["2/3", "3/4", "6/12", "5/16"],
  answer: 0
},
{
  question: "Simplify 15/20.",
  options: ["3/4", "2/5", "5/4", "4/5"],
  answer: 0
},
{
  question: "What is 7/9 - 2/3?",
  options: ["1/9", "2/9", "3/9", "4/9"],
  answer: 0
},
{
  question: "What is 3/4 × 8?",
  options: ["4", "5", "6", "7"],
  answer: 2
},
{
  question: "Convert 11/2 to a mixed number.",
  options: ["5 1/2", "4 1/2", "6 1/2", "5 2/2"],
  answer: 0
},
{
  question: "What is 2/9 + 4/9?",
  options: ["6/9", "2/3", "4/9", "1"],
  answer: 1
},
{
  question: "Which is greater?",
  options: ["5/8", "3/4", "2/3", "4/5"],
  answer: 3
},
{
  question: "Find 3/8 of 24.",
  options: ["6", "8", "9", "12"],
  answer: 2
},
{
  question: "What is 4/6 - 1/3?",
  options: ["1/3", "1/6", "2/6", "3/6"],
  answer: 0
},
{
  question: "Simplify 18/24.",
  options: ["3/4", "2/3", "4/6", "6/8"],
  answer: 0
},
{
  question: "What is 5/9 + 1/3?",
  options: ["8/9", "7/9", "6/9", "1"],
  answer: 0
},
{
  question: "A rope is 10m long. 3/5 is cut off. How many meters were cut?",
  options: ["5m", "6m", "7m", "8m"],
  answer: 1
},
{
  question: "Find the missing number: ?/6 = 1/2",
  options: ["2", "3", "4", "5"],
  answer: 1
},
{
  question: "What is 8/10 simplified?",
  options: ["4/5", "3/5", "2/5", "1/5"],
  answer: 0
},
{
  question: "What is 1/4 + 3/8?",
  options: ["5/8", "7/8", "1/2", "6/8"],
  answer: 0
},
{
  question: "What is 6/7 - 3/14?",
  options: ["9/14", "3/14", "6/14", "1/2"],
  answer: 0
},
{
  question: "If 3/4 of a class are girls, what fraction are boys?",
  options: ["1/4", "2/4", "3/4", "1/2"],
  answer: 0
}
        
      ],
      estimation_approximation: [
        {
  question: "Round 47 to the nearest 10.",
  options: ["40", "45", "50", "60"],
  answer: 2
},
{
  question: "Round 63 to the nearest 10.",
  options: ["60", "70", "65", "63"],
  answer: 0
},
{
  question: "Round 145 to the nearest 100.",
  options: ["100", "150", "200", "140"],
  answer: 0
},
{
  question: "Round 278 to the nearest 100.",
  options: ["200", "300", "250", "280"],
  answer: 1
},
{
  question: "Round 3,456 to the nearest 1,000.",
  options: ["3,000", "4,000", "3,500", "3,600"],
  answer: 0
},
{
  question: "Round 8,765 to the nearest 1,000.",
  options: ["8,000", "9,000", "8,500", "8,700"],
  answer: 1
},
{
  question: "Round 92 to the nearest 10.",
  options: ["80", "90", "100", "95"],
  answer: 1
},
{
  question: "Round 349 to the nearest 100.",
  options: ["300", "400", "350", "390"],
  answer: 0
},
{
  question: "Round 555 to the nearest 100.",
  options: ["500", "600", "550", "555"],
  answer: 1
},
{
  question: "Round 6,499 to the nearest 1,000.",
  options: ["6,000", "7,000", "6,500", "6,400"],
  answer: 0
},
{
  question: "Round 74 to the nearest 10.",
  options: ["70", "75", "80", "60"],
  answer: 0
},
{
  question: "Round 815 to the nearest 100.",
  options: ["800", "900", "850", "820"],
  answer: 0
},
{
  question: "Round 2,250 to the nearest 1,000.",
  options: ["2,000", "3,000", "2,500", "2,200"],
  answer: 0
},
{
  question: "Round 999 to the nearest 100.",
  options: ["900", "1,000", "990", "950"],
  answer: 1
},
{
  question: "Round 5,550 to the nearest 1,000.",
  options: ["5,000", "6,000", "5,500", "5,600"],
  answer: 1
},
{
  question: "Round 28 to the nearest 10.",
  options: ["20", "30", "25", "28"],
  answer: 1
},
{
  question: "Round 1,444 to the nearest 100.",
  options: ["1,400", "1,500", "1,450", "1,440"],
  answer: 0
},
{
  question: "Round 3,501 to the nearest 1,000.",
  options: ["3,000", "4,000", "3,500", "3,600"],
  answer: 1
},
{
  question: "Round 86 to the nearest 10.",
  options: ["80", "90", "85", "86"],
  answer: 1
},
{
  question: "Round 620 to the nearest 100.",
  options: ["600", "700", "650", "620"],
  answer: 0
},
{
  question: "Round 47 to 1 significant figure.",
  options: ["40", "50", "45", "47"],
  answer: 1
},
{
  question: "Round 63 to 1 significant figure.",
  options: ["60", "70", "65", "63"],
  answer: 0
},
{
  question: "Round 145 to 2 significant figures.",
  options: ["140", "150", "145", "100"],
  answer: 1
},
{
  question: "Round 278 to 2 significant figures.",
  options: ["270", "280", "300", "290"],
  answer: 1
},
{
  question: "Round 3,456 to 1 significant figure.",
  options: ["3,000", "4,000", "3,500", "3,400"],
  answer: 0
},
{
  question: "Round 8,765 to 2 significant figures.",
  options: ["8,700", "8,800", "8,600", "9,000"],
  answer: 1
},
{
  question: "Round 92 to 1 significant figure.",
  options: ["80", "90", "100", "95"],
  answer: 1
},
{
  question: "Round 349 to 1 significant figure.",
  options: ["300", "400", "350", "390"],
  answer: 1
},
{
  question: "Round 555 to 2 significant figures.",
  options: ["550", "560", "600", "555"],
  answer: 1
},
{
  question: "Round 6,499 to 2 significant figures.",
  options: ["6,400", "6,500", "6,000", "6,600"],
  answer: 1
},
{
  question: "Round 0.456 to 1 significant figure.",
  options: ["0.4", "0.5", "0.45", "0.46"],
  answer: 0
},
{
  question: "Round 0.456 to 2 significant figures.",
  options: ["0.45", "0.46", "0.50", "0.40"],
  answer: 1
},
{
  question: "Round 7.89 to 1 significant figure.",
  options: ["7", "8", "7.8", "8.0"],
  answer: 1
},
{
  question: "Round 7.89 to 2 significant figures.",
  options: ["7.8", "7.9", "8.0", "7.89"],
  answer: 1
},
{
  question: "Round 12.34 to 3 significant figures.",
  options: ["12.3", "12.4", "12.34", "12.30"],
  answer: 0
},
{
  question: "Round 0.0789 to 1 significant figure.",
  options: ["0.07", "0.08", "0.09", "0.078"],
  answer: 1
},
{
  question: "Round 0.0789 to 2 significant figures.",
  options: ["0.078", "0.079", "0.080", "0.07"],
  answer: 1
},
{
  question: "Round 9,876 to 3 significant figures.",
  options: ["9,870", "9,880", "9,900", "9,800"],
  answer: 0
},
{
  question: "Round 1,234 to 2 significant figures.",
  options: ["1,200", "1,300", "1,230", "1,240"],
  answer: 0
},
{
  question: "Round 4.567 to 3 significant figures.",
  options: ["4.56", "4.57", "4.60", "4.50"],
  answer: 1
},
{
  question: "Estimate 47 + 32.",
  options: ["70", "80", "90", "75"],
  answer: 1
},
{
  question: "Estimate 198 + 304.",
  options: ["400", "500", "600", "450"],
  answer: 1
},
{
  question: "Estimate 62 - 29.",
  options: ["20", "30", "40", "35"],
  answer: 1
},
{
  question: "Estimate 489 - 205.",
  options: ["200", "300", "250", "280"],
  answer: 1
},
{
  question: "Estimate 19 × 4.",
  options: ["60", "80", "70", "75"],
  answer: 1
},
{
  question: "Estimate 52 × 6.",
  options: ["300", "350", "400", "320"],
  answer: 0
},
{
  question: "Estimate 201 ÷ 5.",
  options: ["30", "40", "50", "45"],
  answer: 1
},
{
  question: "Estimate 399 ÷ 8.",
  options: ["40", "50", "60", "45"],
  answer: 1
},
{
  question: "Estimate 73 + 28.",
  options: ["90", "100", "110", "95"],
  answer: 1
},
{
  question: "Estimate 125 + 380.",
  options: ["400", "500", "600", "550"],
  answer: 1
},
{
  question: "Estimate 77 - 43.",
  options: ["30", "40", "20", "35"],
  answer: 0
},
{
  question: "Estimate 610 - 295.",
  options: ["200", "300", "400", "350"],
  answer: 1
},
{
  question: "Estimate 33 × 9.",
  options: ["200", "300", "400", "250"],
  answer: 1
},
{
  question: "Estimate 48 × 7.",
  options: ["300", "350", "400", "280"],
  answer: 0
},
{
  question: "Estimate 599 ÷ 3.",
  options: ["100", "200", "300", "150"],
  answer: 1
},
{
  question: "Estimate 720 ÷ 9.",
  options: ["60", "70", "80", "90"],
  answer: 2
},
{
  question: "Estimate 91 + 44.",
  options: ["120", "130", "140", "150"],
  answer: 1
},
{
  question: "Estimate 845 + 167.",
  options: ["900", "1,000", "1,100", "950"],
  answer: 1
},
{
  question: "Estimate 66 - 18.",
  options: ["40", "50", "60", "45"],
  answer: 1
},
{
  question: "Estimate 1,200 - 780.",
  options: ["300", "400", "500", "600"],
  answer: 1
},
{
  question: "A bag costs ₦197. About how much is it?",
  options: ["₦100", "₦200", "₦300", "₦150"],
  answer: 1
},
{
  question: "A phone costs ₦3,450. Estimate the cost.",
  options: ["₦3,000", "₦3,500", "₦4,000", "₦3,400"],
  answer: 0
},
{
  question: "A class has 49 students. About how many students?",
  options: ["40", "45", "50", "55"],
  answer: 2
},
{
  question: "A truck carries 1,480 bags. About how many?",
  options: ["1,000", "1,400", "1,500", "2,000"],
  answer: 2
},
{
  question: "Round 6.7 to the nearest whole number.",
  options: ["6", "7", "8", "5"],
  answer: 1
},
{
  question: "Round 4.3 to the nearest whole number.",
  options: ["4", "5", "3", "6"],
  answer: 0
},
{
  question: "The lower bound of 50 (nearest 10) is:",
  options: ["45", "50", "40", "55"],
  answer: 0
},
{
  question: "The upper bound of 300 (nearest 100) is:",
  options: ["350", "300", "250", "400"],
  answer: 0
},
{
  question: "Estimate the total of 98 + 102.",
  options: ["180", "200", "220", "210"],
  answer: 1
},
{
  question: "Estimate 29 × 5.",
  options: ["100", "150", "200", "120"],
  answer: 1
},
{
  question: "Estimate 88 ÷ 9.",
  options: ["5", "10", "15", "20"],
  answer: 1
},
{
  question: "Round 0.56 to the nearest tenth.",
  options: ["0.5", "0.6", "0.55", "1.0"],
  answer: 1
},
{
  question: "Round 2.44 to the nearest whole number.",
  options: ["2", "3", "4", "1"],
  answer: 0
},
{
  question: "Round 9.51 to the nearest whole number.",
  options: ["9", "10", "8", "11"],
  answer: 1
},
{
  question: "Estimate 444 + 555.",
  options: ["900", "1,000", "1,100", "950"],
  answer: 1
},
{
  question: "Estimate 301 × 2.",
  options: ["500", "600", "700", "800"],
  answer: 1
},
{
  question: "Estimate 1,050 ÷ 5.",
  options: ["100", "200", "300", "250"],
  answer: 1
},
{
  question: "Round 7,890 to nearest 1,000.",
  options: ["7,000", "8,000", "7,500", "7,800"],
  answer: 1
},
{
  question: "Estimate 65 + 36.",
  options: ["90", "100", "110", "95"],
  answer: 1
},
{
  question: "Estimate 99 - 52.",
  options: ["40", "50", "60", "45"],
  answer: 1
},
      ],
      basic_operations: [
      {
  question: "45 + 27 = ?",
  options: ["62", "72", "82", "52"],
  answer: 1
},
{
  question: "93 - 48 = ?",
  options: ["45", "55", "35", "65"],
  answer: 0
},
{
  question: "7 × 8 = ?",
  options: ["54", "56", "49", "64"],
  answer: 1
},
{
  question: "72 ÷ 9 = ?",
  options: ["6", "7", "8", "9"],
  answer: 2
},
{
  question: "45 + 27 = ?",
  options: ["62", "72", "82", "52"],
  answer: 1
},
{
  question: "93 - 48 = ?",
  options: ["45", "55", "35", "65"],
  answer: 0
},
{
  question: "7 × 8 = ?",
  options: ["54", "56", "49", "64"],
  answer: 1
},
{
  question: "72 ÷ 9 = ?",
  options: ["6", "7", "8", "9"],
  answer: 2
},
{
  question: "(45 + 35) × 2 = ?",
  options: ["140", "150", "160", "170"],
  answer: 2
},
{
  question: "300 - (75 × 2) = ?",
  options: ["100", "150", "200", "250"],
  answer: 1
},
{
  question: "2/3 of 45 = ?",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "4.8 × 2.5 = ?",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  question: "540 ÷ (6 × 3) = ?",
  options: ["20", "25", "30", "35"],
  answer: 2
},
{
  question: "A trader buys 15 items at ₦120 each. How much did he pay?",
  options: ["₦1,700", "₦1,750", "₦1,800", "₦1,850"],
  answer: 2
},
{
  question: "(45 + 35) × 2 = ?",
  options: ["140", "150", "160", "170"],
  answer: 2
},
{
  question: "300 - (75 × 2) = ?",
  options: ["100", "150", "200", "250"],
  answer: 1
},
{
  question: "2/3 of 45 = ?",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "4.8 × 2.5 = ?",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  question: "540 ÷ (6 × 3) = ?",
  options: ["20", "25", "30", "35"],
  answer: 2
},
{
  question: "A trader buys 15 items at ₦120 each. How much did he pay?",
  options: ["₦1,700", "₦1,750", "₦1,800", "₦1,850"],
  answer: 2
},
  {
  question: "346 + 289 = ?",
  options: ["625", "635", "645", "655"],
  answer: 1
},
{
  question: "902 - 478 = ?",
  options: ["414", "424", "434", "444"],
  answer: 1
},
{
  question: "18 × 25 = ?",
  options: ["450", "425", "475", "400"],
  answer: 0
},
{
  question: "360 ÷ 12 = ?",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "5/6 of 36 = ?",
  options: ["25", "30", "32", "35"],
  answer: 1
},
{
  question: "7.5 + 2.35 = ?",
  options: ["9.75", "9.85", "9.95", "10.25"],
  answer: 1
},
{
  question: "15.6 - 8.9 = ?",
  options: ["6.7", "7.7", "5.7", "6.5"],
  answer: 0
},
{
  question: "27 × 14 = ?",
  options: ["368", "378", "388", "358"],
  answer: 1
},
{
  question: "480 ÷ 16 = ?",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "A pen costs ₦135. What is the cost of 6 pens?",
  options: ["₦700", "₦810", "₦820", "₦750"],
  answer: 1
},
{
  question: "125 × 4 = ?",
  options: ["450", "500", "550", "480"],
  answer: 1
},
{
  question: "720 ÷ 8 = ?",
  options: ["80", "85", "90", "95"],
  answer: 2
},
{
  question: "3/5 of 50 = ?",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "9.2 + 4.8 = ?",
  options: ["13", "14", "12", "15"],
  answer: 1
},
{
  question: "20.5 - 7.8 = ?",
  options: ["12.7", "13.7", "11.7", "14.7"],
  answer: 0
},
{
  question: "35 × 12 = ?",
  options: ["410", "420", "430", "440"],
  answer: 1
},
{
  question: "625 ÷ 25 = ?",
  options: ["20", "25", "30", "35"],
  answer: 1
},
{
  question: "If one bag costs ₦2,400, what is the cost of 3 bags?",
  options: ["₦7,000", "₦7,200", "₦7,500", "₦7,300"],
  answer: 1
},
{
  question: "0.75 × 100 = ?",
  options: ["7.5", "75", "0.75", "750"],
  answer: 1
},
{
  question: "1,200 ÷ 24 = ?",
  options: ["40", "45", "50", "55"],
  answer: 2
},
{
  question: "(120 + 80) ÷ 4 = ?",
  options: ["40", "45", "50", "60"],
  answer: 2
},
{
  question: "600 - (45 × 4) = ?",
  options: ["400", "420", "430", "440"],
  answer: 1
},
{
  question: "3/4 of 64 = ?",
  options: ["42", "48", "52", "54"],
  answer: 1
},
{
  question: "6.4 × 3.5 = ?",
  options: ["21.4", "22.4", "23.4", "24.4"],
  answer: 1
},
{
  question: "900 ÷ (5 × 6) = ?",
  options: ["20", "25", "30", "35"],
  answer: 2
},
{
  question: "A worker earns ₦3,250 per week. How much in 8 weeks?",
  options: ["₦24,000", "₦25,000", "₦26,000", "₦27,000"],
  answer: 2
},
{
  question: "(45 × 6) + 120 = ?",
  options: ["370", "380", "390", "400"],
  answer: 2
},
{
  question: "1,500 - (250 × 3) = ?",
  options: ["600", "650", "700", "750"],
  answer: 3
},
{
  question: "4/5 of 125 = ?",
  options: ["90", "95", "100", "105"],
  answer: 2
},
{
  question: "7.2 × 4 = ?",
  options: ["26.8", "27.8", "28.8", "29.8"],
  answer: 2
},
{
  question: "840 ÷ (7 × 4) = ?",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "A trader bought 24 items at ₦175 each. Total cost?",
  options: ["₦4,000", "₦4,100", "₦4,200", "₦4,300"],
  answer: 2
},
{
  question: "(96 ÷ 8) × 5 = ?",
  options: ["50", "55", "60", "65"],
  answer: 2
},
{
  question: "2/3 of 90 minus 10 equals?",
  options: ["40", "50", "60", "70"],
  answer: 1
},
{
  question: "15% of 200 = ?",
  options: ["20", "25", "30", "35"],
  answer: 2
},
{
  question: "(250 + 150) × 3 ÷ 6 = ?",
  options: ["150", "175", "200", "225"],
  answer: 2
},
      ],

      simple_equations:[
{
  question: "x + 5 = 12. Find x.",
  options: ["5", "6", "7", "8"],
  answer: 2
},
{
  question: "x - 4 = 9. Find x.",
  options: ["11", "12", "13", "14"],
  answer: 2
},
{
  question: "3x = 15. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 2
},
{
  question: "x ÷ 6 = 4. Find x.",
  options: ["18", "20", "22", "24"],
  answer: 3
},
{
  question: "x + 9 = 20. Find x.",
  options: ["9", "10", "11", "12"],
  answer: 2
},
{
  question: "x - 7 = 5. Find x.",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  question: "4x = 28. Find x.",
  options: ["6", "7", "8", "9"],
  answer: 1
},
{
  question: "x ÷ 5 = 6. Find x.",
  options: ["25", "30", "35", "40"],
  answer: 1
},
{
  question: "x + 13 = 25. Find x.",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  question: "x - 15 = 10. Find x.",
  options: ["20", "25", "30", "35"],
  answer: 1
},
{
  question: "2x = 18. Find x.",
  options: ["7", "8", "9", "10"],
  answer: 2
},
{
  question: "x ÷ 4 = 7. Find x.",
  options: ["24", "26", "28", "30"],
  answer: 2
},
{
  question: "x + 8 = 19. Find x.",
  options: ["9", "10", "11", "12"],
  answer: 2
},
{
  question: "x - 6 = 14. Find x.",
  options: ["18", "19", "20", "21"],
  answer: 2
},
{
  question: "5x = 35. Find x.",
  options: ["5", "6", "7", "8"],
  answer: 2
},
{
  question: "x ÷ 9 = 3. Find x.",
  options: ["18", "21", "24", "27"],
  answer: 3
},
{
  question: "x + 4 = 16. Find x.",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  question: "x - 12 = 8. Find x.",
  options: ["18", "19", "20", "21"],
  answer: 2
},
{
  question: "6x = 42. Find x.",
  options: ["6", "7", "8", "9"],
  answer: 1
},
{
  question: "x ÷ 3 = 11. Find x.",
  options: ["30", "31", "32", "33"],
  answer: 3
},
{
  question: "2x + 3 = 11. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "3x - 4 = 11. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "5x + 2 = 22. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "4x - 6 = 10. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "7 + 2x = 15. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "3x + 5 = 20. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "6x - 8 = 16. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "8 + 3x = 20. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "9x - 7 = 20. Find x.",
  options: ["2", "3", "4", "5"],
  answer: 1
},
{
  question: "5 + 4x = 21. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "2x - 9 = 7. Find x.",
  options: ["7", "8", "9", "10"],
  answer: 1
},
{
  question: "4x + 1 = 17. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "7x - 5 = 30. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "3 + 6x = 21. Find x.",
  options: ["2", "3", "4", "5"],
  answer: 1
},
{
  question: "10 + 2x = 18. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "5x - 3 = 17. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "4 + 3x = 19. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "8x - 4 = 36. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "6 + 5x = 31. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "9x - 8 = 28. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "2(x + 3) = 14. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "3(x - 2) = 12. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 2
},
{
  question: "4(x + 1) = 20. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "5(x - 3) = 10. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 1
},
{
  question: "2x + 5 = x + 9. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "3x - 4 = 2x + 5. Find x.",
  options: ["7", "8", "9", "10"],
  answer: 2
},
{
  question: "5x + 2 = 3x + 10. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "7x - 6 = 5x + 8. Find x.",
  options: ["6", "7", "8", "9"],
  answer: 1
},
{
  question: "x/3 = 5. Find x.",
  options: ["10", "12", "15", "18"],
  answer: 2
},
{
  question: "x/4 + 2 = 6. Find x.",
  options: ["12", "14", "16", "18"],
  answer: 2
},
{
  question: "A number plus 7 equals 20. Find the number.",
  options: ["11", "12", "13", "14"],
  answer: 2
},
{
  question: "Twice a number is 18. Find the number.",
  options: ["7", "8", "9", "10"],
  answer: 2
},
{
  question: "Three times a number minus 2 equals 16. Find the number.",
  options: ["5", "6", "7", "8"],
  answer: 1
},
{
  question: "Five times a number plus 3 equals 23. Find the number.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "2x + 3 = 3x - 5. Find x.",
  options: ["6", "7", "8", "9"],
  answer: 2
},
{
  question: "4x - 2 = 2x + 10. Find x.",
  options: ["5", "6", "7", "8"],
  answer: 1
},
{
  question: "6(x + 1) = 30. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 1
},
{
  question: "8(x - 2) = 32. Find x.",
  options: ["4", "5", "6", "7"],
  answer: 2
},
{
  question: "x/5 - 1 = 3. Find x.",
  options: ["15", "20", "25", "30"],
  answer: 1
},
{
  question: "2(x + 4) - 6 = 10. Find x.",
  options: ["3", "4", "5", "6"],
  answer: 0
}
      ],
      algebra:[
        {
  question: "Simplify: 3x + 2x",
  options: ["5", "5x", "6x", "x"],
  answer: 1
},
{
  question: "Simplify: 7a - 4a",
  options: ["3", "3a", "11a", "a"],
  answer: 1
},
{
  question: "Simplify: 5y + y + 2y",
  options: ["7y", "8y", "6y", "5y"],
  answer: 1
},
{
  question: "Simplify: 9b - 3b",
  options: ["6", "6b", "3b", "12b"],
  answer: 1
},
{
  question: "Simplify: 4m + 6m",
  options: ["10m", "24m", "2m", "10"],
  answer: 0
},
{
  question: "Simplify: 8p - p",
  options: ["7", "7p", "8", "p"],
  answer: 1
},
{
  question: "Simplify: 2x + 3 + 4x",
  options: ["6x + 3", "9x", "6x", "5x + 3"],
  answer: 0
},
{
  question: "Simplify: 10a - 2a + a",
  options: ["7a", "8a", "9a", "10a"],
  answer: 2
},
{
  question: "Simplify: 6k + 4 - 2k",
  options: ["4k + 4", "8k", "6k + 2", "4k"],
  answer: 0
},
{
  question: "Simplify: 3x + 5x - 2x",
  options: ["6x", "5x", "4x", "3x"],
  answer: 0
},
{
  question: "Expand: 2(x + 3)",
  options: ["2x + 3", "2x + 6", "x + 6", "2x + 9"],
  answer: 1
},
{
  question: "Expand: 3(a + 4)",
  options: ["3a + 12", "3a + 4", "a + 12", "7a"],
  answer: 0
},
{
  question: "Expand: 5(x - 2)",
  options: ["5x - 2", "5x - 10", "x - 10", "5x + 10"],
  answer: 1
},
{
  question: "Expand: 4(y + 6)",
  options: ["4y + 6", "4y + 24", "y + 24", "10y"],
  answer: 1
},
{
  question: "Expand: 6(a - 1)",
  options: ["6a - 6", "6a - 1", "a - 6", "6a + 6"],
  answer: 0
},
{
  question: "Simplify: 2x + 3x + 4",
  options: ["5x + 4", "9x", "6x + 4", "5x"],
  answer: 0
},
{
  question: "Simplify: 7a - 2a + 5a",
  options: ["10a", "9a", "8a", "7a"],
  answer: 0
},
{
  question: "Expand and simplify: 3(x + 2) + x",
  options: ["4x + 6", "3x + 2", "4x + 2", "3x + 6"],
  answer: 0
},
{
  question: "Expand and simplify: 2(a + 5) + 3a",
  options: ["5a + 10", "2a + 5", "5a + 5", "6a + 10"],
  answer: 0
},
{
  question: "Expand: 7(2x)",
  options: ["14x", "9x", "7x", "2x"],
  answer: 0
},
{
  question: "Simplify: 12x - 5x",
  options: ["6x", "7x", "17x", "5x"],
  answer: 1
},
{
  question: "Expand: 8(b + 3)",
  options: ["8b + 3", "8b + 24", "b + 24", "11b"],
  answer: 1
},
{
  question: "Simplify: 4y + 2 - y",
  options: ["3y + 2", "5y", "4y + 1", "2y + 2"],
  answer: 0
},
{
  question: "Expand: 9(x - 4)",
  options: ["9x - 36", "9x - 4", "x - 36", "9x + 36"],
  answer: 0
},
{
  question: "Simplify: 5a + 3 - 2a",
  options: ["3a + 3", "7a", "5a + 1", "3a"],
  answer: 0
},
{
  question: "Expand: 4(3x)",
  options: ["12x", "7x", "4x", "3x"],
  answer: 0
},
{
  question: "Simplify: 9k - 4k + 2",
  options: ["5k + 2", "13k", "7k + 2", "5k"],
  answer: 0
},
{
  question: "Expand and simplify: 2(x + 4) - x",
  options: ["x + 8", "x + 4", "2x + 8", "x + 6"],
  answer: 0
},
{
  question: "Expand: 3(2a + 1)",
  options: ["6a + 3", "6a + 1", "5a + 3", "3a + 1"],
  answer: 0
},
{
  question: "Simplify: 6x + 4x - 3x",
  options: ["7x", "10x", "6x", "9x"],
  answer: 0
},
{
  question: "Expand: 5(y - 3)",
  options: ["5y - 15", "5y - 3", "y - 15", "5y + 15"],
  answer: 0
},
{
  question: "Simplify: 8a + 2a - a",
  options: ["9a", "10a", "8a", "7a"],
  answer: 0
},
{
  question: "Expand: 2(4x + 5)",
  options: ["8x + 10", "8x + 5", "6x + 10", "4x + 10"],
  answer: 0
},
{
  question: "Simplify: 3b + 7 - b",
  options: ["2b + 7", "3b + 6", "4b + 7", "2b"],
  answer: 0
},
{
  question: "Expand and simplify: 4(x + 1) + 2x",
  options: ["6x + 4", "4x + 1", "6x + 1", "4x + 4"],
  answer: 0
},
{
  question: "Factorise: 6x + 12",
  options: ["6(x + 2)", "3(x + 4)", "2(3x + 6)", "6x(1 + 2)"],
  answer: 0
},
{
  question: "Factorise: 8a - 4",
  options: ["4(2a - 1)", "2(4a - 2)", "8(a - 4)", "4(a - 2)"],
  answer: 0
},
{
  question: "Factorise: 9x + 3",
  options: ["3(3x + 1)", "9(x + 3)", "3(x + 3)", "1(9x + 3)"],
  answer: 0
},
{
  question: "Expand: (x + 2)(x + 3)",
  options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6x + 6"],
  answer: 0
},
{
  question: "Expand: (x + 4)(x + 1)",
  options: ["x² + 5x + 4", "x² + 4x + 1", "x² + 6x + 4", "x² + 5x + 1"],
  answer: 0
},
{
  question: "Factorise: x² + 5x + 6",
  options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 3)(x + 4)", "(x + 2)(x + 4)"],
  answer: 0
},
{
  question: "Factorise: x² + 7x + 10",
  options: ["(x + 5)(x + 2)", "(x + 3)(x + 4)", "(x + 1)(x + 10)", "(x + 6)(x + 1)"],
  answer: 0
},
{
  question: "Expand: (x - 2)(x - 3)",
  options: ["x² - 5x + 6", "x² - 6x + 5", "x² - 5x - 6", "x² - x + 6"],
  answer: 0
},
{
  question: "Factorise: x² - 5x + 6",
  options: ["(x - 2)(x - 3)", "(x - 1)(x - 6)", "(x - 3)(x - 4)", "(x - 2)(x - 4)"],
  answer: 0
},
{
  question: "Expand: (2x + 1)(x + 3)",
  options: ["2x² + 7x + 3", "2x² + 6x + 1", "2x² + 5x + 3", "x² + 7x + 3"],
  answer: 0
}
      ],
    },

    english: {

      grammar: [
        {
          question: "Choose the noun:",
          options: ["Run", "Beauty", "Quickly", "Blue"],
          answer: 1
        }
      ]

    }

  }

};
