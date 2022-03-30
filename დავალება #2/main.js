/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0; // false
const boolean1 = false; //false
const num2 = 5; // true
const emptyString = ""; // false
const boolean2 = false; //false
const text = "I'm Text"; //true
const text2 = "0"; // true


// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [num1, boolean1, boolean2, emptyString];
const isTrue = [num2, text, text2];




// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("azc" > "ah"); // კომპილატორი იწყებს შემოწმებას მარცნიდან - მარჯვნივ, ანუ  ჯერ  ამოწმებს პირველ სიმბოლოებს , 
//თუ პირველი სიმბოლო არის ტოლი, მაშინ გადადის შემდეგ სიმბოლოებზე თუ იპოვა ისეთი ასო რომელიც მისი ერთი ასო მეტია  მეორეზე სიტყვის  ასოზე მაშინ კომპილატორი წყვიტავს შემოწმებას .  მაგ: 

console.log((2 == "002")); //  === ამოწმებს ორივე მხარეს , როგორც მნიშვენლობით და როგორც  ტიპის სახით  ამშემთხვევაში იქნება true, თუ  ერთ = მოვაშორებთ და დავტოვებთ ორ ==  ამ შემთხვევაში იქნება True 


// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 

let age = 16;

if (age >= 18) {
  console.log("თქვენთვის სასმელი შეიძლება");
}



// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ


else if (age > 15 && age <= 18) {
  console.log("თქვენთვის წვენი შეიძლება : " + age);
}


//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

let ter = (age >= 18) ? 1 : 2;
console.log("Ternar Compare : " + ter);

//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ

if (colorId === 0) {
  console.log("შავი");
}
else if (colorId === 1) {
  console.log("ლურჯი");
}

else if (colorId === 2) {
  console.log("მწვანე");
}

else if (colorId === 3) {
  console.log("წითელი");
}

else if (colorId === 4) {
  console.log("თეთრი");
}

//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

let colorCompare = (colorId === 0) ? "შავი"
  : (colorId === 1) ? "ლურჯი"
    : (colorId === 2) ? "მწვანე"
      : (colorId === 3) ? "წითელი"
        : (colorId === 4) ? "თეთრი" : "";


console.log("Ternary Color iD : " + colorCompare);
//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ

switch (true) {
  case colorId === 0:
    console.log("შავი");
    break;

  case colorId === 1:
    console.log("ლურჯი");
    break;

  case colorId === 2:
    console.log("მწვანე");
    break;

  case colorId === 3:
    console.log("წითელი");
    break;

  case colorId === 4:
    console.log("თეთრი");
    break;

  default:
    console.log("Nothing")
    break;
}


//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())


function myFun() {
  let x = prompt("მე მზად  ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch

  switch (true) 
  {
    case x =="გამარჯობა":
     alert("გაგიმარჯოს");
      break;

    case x =="როგორ ხარ?":
     alert("რავი არამიშავს");
      break;

    case x =="რაშვები?":
     alert("ვმუშაობ");
      break;

    case x =="კარგი":
     alert("ნახვამდის");
      break;

    default:
     alert("Nothing");
      break;

  }
  //გამა

  // რეკურსიული ფუნქცია

  //myFun();
}

