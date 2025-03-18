// // if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.
// let a = 2,
//   b = 3,
//   c = 1;
// if ((a < b && c < a) || (b < a && c < b)) {
//   if (a < b) {
//     console.log(
//       `eng kichik son = ${c}, o'rtancha son = ${a}, eng katta son = ${b}`
//     );
//   } else {
//     console.log(
//       `eng kichik son = ${c}, o'rtancha son = ${b}, eng katta son = ${a}`
//     );
//   }
// } else if ((c < b && a < c) || (b < c && a < b)) {
//   if (c < b) {
//     console.log(
//       `eng kichik son = ${a}, o'rtancha son = ${c}, eng katta son = ${b}`
//     );
//   } else {
//     console.log(
//       `eng kichik son = ${a}, o'rtancha son = ${b}, eng katta son = ${c}`
//     );
//   }
// } else if ((c < a && b < c) || (a < c && b < a)) {
//   if (c < b) {
//     console.log(
//       `eng kichik son = ${b}, o'rtancha son = ${c}, eng katta son = ${a}`
//     );
//   } else {
//     console.log(
//       `eng kichik son = ${b}, o'rtancha son = ${a}, eng katta son = ${c}`
//     );
//   }
// } else {
//   console.log("error 505\nBirxil raqamlar qatnashga yoki boshqa xatolik.");
// }

// // ifsiz usuli

// let min = Math.min(a, b, c);
// let max = Math.max(a, b, c);

// let minimum = a + b + c - min - max;

// console.log(
//   `eng kichik son = ${min}, o'rtancha son = ${minimum}, eng katta son = ${max}`
// );

// // if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a = 1,
//   b = 2,
//   c = 2;

// if (a === b && a !== c) {
//   console.log("c, tartib raqami = 3");
// } else if (a === c && a !== b) {
//   console.log("b, tartib raqami = 2");
// } else if (b === c && b !== a) {
//   console.log("a, tartib raqami = 1");
// } else {
//   console.log("error 505\nhammasi bir xil yoki hammasi har xil.");
// }

// // if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// // agar x < -2 yoki x > 2 bo’lsa 2 * x
// // aks holda -3 * x;
// let x = 5;
// if (x < -2 || x > 2) {
//   console.log(2 * x);
// } else {
//   console.log(-3 * x);
// }

// // if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 12,
//   b = 6;
// if (a === b) {
//   a = 0;
//   b = 0;
//   console.log(a, b);
// } else {
//   if (a > b) {
//     b = a;
//     console.log(a, b);
//   } else {
//     a = b;
//     console.log(a, b);
//   }
// }

// if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.
// let a = 2,
//   b = 3,
//   c = 1;
// if ((a < b && c < a) || (b < a && c < b)) {
//   if (a < b) {
//     console.log(
//       ` o'rtancha son = ${a}, eng kichik son = ${c}, eng katta son = ${b}`
//     );
//   } else {
//     console.log(
//       ` o'rtancha son = ${b}, eng kichik son = ${c}, eng katta son = ${a}`
//     );
//   }
// } else if ((c < b && a < c) || (b < c && a < b)) {
//   if (c < b) {
//     console.log(
//       ` o'rtancha son = ${c}, eng kichik son = ${a}, eng katta son = ${b}`
//     );
//   } else {
//     console.log(
//       ` o'rtancha son = ${b}, eng kichik son = ${a}, eng katta son = ${c}`
//     );
//   }
// } else if ((c < a && b < c) || (a < c && b < a)) {
//   if (c < b) {
//     console.log(
//       ` o'rtancha son = ${c}, eng kichik son = ${b}, eng katta son = ${a}`
//     );
//   } else {
//     console.log(
//       ` o'rtancha son = ${a}, eng kichik son = ${b}, eng katta son = ${c}`
//     );
//   }
// } else {
//   console.log("error 505\nBirxil raqamlar qatnashga yoki boshqa xatolik.");
// }

// if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
// let year = 2000;

// let kyear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// if (kyear) {
//   console.log(year + " - kabisa yili.");
// } else {
//   console.log(year + " - kabisa yili emas.");
// }

// if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.
// let n = 56;

// if (n >= 1 && n <= 999) {
//   let dk = n < 10 ? "1 xona" : n < 100 ? "2 xona" : "3 xona";
//   let e = n % 2 === 0 ? "juft" : "toq";

//   console.log(`${dk} ${e} son.`);
// } else {
//   console.log("error 505");
// }
