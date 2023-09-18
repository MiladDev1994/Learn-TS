


// const name: string = "Milad";

// const user: Object = {name: "Milad", family: "Goli"} 

// const number: number = 10;

// let userId: number = 112233.3
// userId = 222.4

// // console.log(userId.toFixed())

// function handel(errmsg: string): never {
//     throw new Error(errmsg)
//     console.log(errmsg)
// }
// handel("Milad")

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// type UserB = {
//     name: number,
//     email: string,
//     isActive: boolean,
// }

// function createUser(user: User): UserB{
//     return {name: user.name, email: user.email, isActive: user.isActive}
// }

// console.log(createUser({name: "1994", email: "Goli", isActive: true}))


// const arra: number[][][] = [
//     [
//         [1], [2], [3]
//     ]
// ] 

// const enum setChoice {
//     NAME = "2",
//     FAMILY = 10,
//     AGE
// }

// function identifyOne<M>(val: M): M {
//     return val;
// }
// interface Bootle {
//     brand: string,
//     type: string,
// }

// console.log(identifyOne<Bootle>({brand: "Milad", type: "gilo"}))






















// انواع تایپ ها در جاوااسکریپت
// String
// Number
// Boolean
// undefined
// function
// Array
// BigInt -> برای اعداد خیلی بزرگ
// Symbol -> symbol("Milad") !== symbol("Milad") = true -> دوتا سیمبل هرگز با هم برابر نیستن
// Object


// انواع تیاپ ها در تایپ اسکریپت
// String
// Number
// Boolean
// undefined
// never
// void
// null
// string[] یا Array<string>
// unknown
// object literal	eg { property: Type }
// T[]
// [T, T]
// (t: T) => U	functions
// ArrayLike<unknown> یعنی مانند آرایه هستش و تایپ مقادیر هم نامعلومه
// Data  -> new Data()

// HTMLCanvasElement  -> برای گرفتن یک بخش از داکیومنت (document.getElementById())
//     const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement; //یا 
//     const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");






// <string> => به این ساختار میگن ژنریک
// میتونیم داخل ژنریک آبجکت یا هرچیزی دیگه ای بذاریم و برای تک تک المان ها تایپ مشخص کنیم و یا میتونیم به طور کلی به هموشن یک تیپ رو بدیم








// Generick
// با این ژنریک ما میتونیم تایپ های داینامیک بسازیم و مثل فانکشن هر مقداری رو که میخوایم بهش پاس بدیم
// interface BackPack<T, U> {
//     name: T,
//     family: U,
// }
// const myObject:BackPack<number, string> = {name: 1, family: "2"}
// console.log(myObject)

// // برای فانکشن
// function ddd<T, U>(name: T, age: U){
//     return {
//         name,
//         age
//     }
// }
// console.log(ddd<string, number>("Milad", 29))





// کار نمیکنه
// تا جایی که من متوجه شدم ما از declare برای گلوبال کردن یک متغییر یا فانکشن استفاده میکنم
// بعدا باید بیشتر درموردش بخونم
// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }
// declare const backpack: Backpack<string>;
// backpack.add("23");






// توضیحی براش ندارم فقط میتونم بگم ما میتونیم اینترفیس هارو به صورتی که مشخص شده به فانکشن ها نسبت بدیم و خروجی مورد نظر رو ازش بگیریم
// البته ناگفته نماند که مار چقدر اطلاعات اضافی به فانکشن بدیم اون فقط مقادیری که تو قسمت اینترفیس براش مشخص کردیم رو ریترن میکنه
// interface Point {
//     x: number;
//     y: number;
// }

// function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }

// // logs "12, 26"
// const point = { x: 12, y: 26 };
// logPoint(point);


// const point3 = { x: 12, y: 26, z: 89 };
// logPoint(point3); // logs "12, 26"

// const rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect); // logs "33, 3"

// const color = { hex: "#187ABF" };
// logPoint(color);









// ساختار بالا رو میتونیم توی کلاس کامپوننت ها هم بگار بگیریم و تفاوتی خاصی در نحوه اجرا نداره
// class VirtualPoint {
//     x: number;
//     y: number;
    
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const newVPoint = new VirtualPoint(13, 56);
// logPoint(newVPoint); // logs "13, 56"








// نحوه مشخص کزدن تایپ اروفانکشن
// let fst: (a: any, b: any) => any = (a, b) => a;
// // or more precisely:
// let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;
// console.log(fst2(5, 10))









// نحوه مشخص کردن تایپ در آبجکت
// let o: { n: number; xs: object[] } = { n: 1, xs: [] };
// console.log(o)

// (1).toExponential();
// // equivalent to
// Number.prototype.toExponential.call(1);
// console.log(Number.prototype.toExponential.call(1))








// وقتی تایپ آرایه رو مشخص نکنیم به صورت دیفالت همه تایپ هارو قبول میکنه
// const anys:any[] = [];
// anys.push(1);
// anys.push("oh no");
// anys.push({ anything: "goes" });
// console.log(anys)







// یک مثال برای ترکیب تایپ با اینترفیس با کلاس
// type One = { p: string };
// interface Two {
// p: string;
// }
// class Three {
// p = "Hello";
// }

// let x: One = { p: "hi" };
// let two: Two = x;
// two = new Three();






// جهت آشنایی با اتحادیه ها
// function start(
//     arg: string | string[] | (() => string) | { s: string }
//   ): string {
//     // this is super common in JavaScript
//     if (typeof arg === "string") {
//       return commonCase(arg);
//     } else if (Array.isArray(arg)) {
//       return arg.map(commonCase).join(",");
//     } else if (typeof arg === "function") {
//       return commonCase(arg());
//     } else {
//       return commonCase(arg.s);
//     }
    
//     function commonCase(s: string): string {
//       // finally, just convert a string to another string
//       return s;
//     }
//   }

//   const functionHandler = (e: string): string => {
//     return e
//   }
//   console.log(start(functionHandler("function"))) // function
//   console.log(start("string")) // string
//   console.log(start(["a", "b", "c"])) // string array
//   console.log(start({ s: "object" })) // object







// ما میتونیم تایپ هارو با هم ترکیب کنیم
// type A = {
//     name: String
// }
// type B = {
//     age: number
// }
// type C = A & B
// const myDetail: C = {name: "Milad", age: 29}
// console.log(myDetail)






// ما حتی اجازه ساخت تایپ هم داریم
// type myType = "Milad" | "Ehsan" | "Ali"
// const name: myType = "Milad" 
// console.log(name)
// اگر به غیر از موارد مشخص شده مقدار دیگه ای وارد بشه با ارور مواجه میشیم







// **** قسمت مربوط به declare تو صفحه TS for Functional Programmers رو حتما دوباره بخونم







// روش تعیریف کردن تیپ برای آرایه 
// type forArray = [number, string]
// const testArray: forArray = [29, "Milad"] 







// روش شرط گذاری برای تایپ ها
// تایپ ها میتونن شرط هم داشته باشن
// type Shape =
//     { kind: "circle"; radius: number } |
//     { kind: "square"; x: number } |
//     { kind: "triangle"; x: number; y: number };

// const shapeTest = (a: Shape) => {
//     if (a.kind === "circle") {
//         return {kind: "circle", radius: a.radius}
//     } else if (a.kind === "square") {
//         return {kind: "circle", x: a.x}
//     } else {
//         return {kind: "square", x: a.x, y: a.y}
//     }
// } 
// console.log(shapeTest({kind: "circle", radius: 10}))
// console.log(shapeTest({kind: "square", x: 20}))
// console.log(shapeTest({kind: "triangle", x: 20, y: 30}))
    






// یه نکته خیییلی جالب => من اگر بخوام از length در ژنریک استفاده کنم باید اون رو از تایپی که انتخاب کردم extends کنم
// وقتی از extends استفاده مینیک تضمین میکنیم که تایپ مورد نظر حتما باید از چیزی که extends شده پیروی کنه
// مثلا اگر از ArrayLike<unknown> اکستند شده باشه حتما باید این شرط رو رعایت کنه
// یعنی باید ارثبری کنه از تایپی که انتخاب شده
// function firstish<T extends {length: number}>(t1: T, t2: T){
//     return t1.length > t2.length ? t1 : t2;
// }
// console.log(firstish<string>("Milad", "Golinejad"))







// با توجه به تعریفی که از ArrayLike داشتیم ، تو این مثال متوجه میشیم که هم میتونیم آرایه برگردونیم هم رشته 
// function length<T extends ArrayLike<unknown>>(t: T): T {
//     return t
// }
// console.log(length<Array<string>>(["5", "6"])) // or
// console.log(length<string>("5"))







// اگر اینترفیس به صورت readonly تعریف بشه دیگه اجازه تغییر مقدار اون متغییر رو ندارم
// مثال 1
// interface Rx {
//     readonly x: number;
// }
// let rx: Rx = { x: 1 };
// rx.x = 12; // error

// // مثال 2
// interface X {
//     x: number;
// }
// let rxb: Readonly<X> = { x: 1 };
// rxb.x = 12; // error

// // مثال 3
// let a: ReadonlyArray<number> = [1, 2, 3];
// let b: readonly number[] = [1, 2, 3];
// a.push(102); // error
// b[0] = 101; // error

// وقتی آرایه به صورت literal ساخته بشه دیگه اجازه تغییر دادن المان های خودش رو نمیده
// برای literal  کردن آرایه باید از as const استفاده کنیم
// let a: number[] = [1, 2, 3] as const;
// a.push(102); // error
// a[0] = 101; // error



// تایپ دیتا هم داریم :)
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
 
// greet("Brendan", new Date());





// اگر بخوایم یه فانکشن به صورت async بنویسیم باید تایپ promise رو بهش بدیم
// به یه ارور برخورد کردم --- فکر کنم بخاطر اینه که مقداری که بهش پاس میدم به صورت await نیست
// async function getFavoriteNumber(a: number): Promise<number> {
//     return a;
// }
// console.log(getFavoriteNumber(26))





// برای تشخیص وجود و یا عدم وجود یک تایپ میتونیم از یک شرط خیلی باحال یک خطی استفاده کنیم
// با این شرط اگر اون مقدار وجود داشت اون تایپ هم اجرا میشه
// function printName(obj: { first: string; last?: string }) {
//     return obj
// }
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });






// روش اختصاص دادن دو یا چند تایپ به یک متغییر
// استفاده از |
// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
// }
// printId(101); // ok
// printId("202"); // ok
// printId({ myID: 22342 }); // error






// تفاوت اینترفیس با تایپ در اینه که ما میتونیم یک اینتر فیس رو از یک اینتر فیس دیگه ارثبری کنیم اما در تایپ ها این امکان نیست
// interface Animal {
//     name: string;
// }
// interface Bear extends Animal {
//     honey: boolean;
// }

//همچنین میتونیم به اینترفیس ها مقادیر جدید اضافه کنیم
// interface Window {
//     title: string;
// }

// interface Window {
//     ts: TypeScriptAPI;
// }

// در عوض در تایپ ها میتونیم تایپ ها رو با علامت & با هم ترکیب کنیم
// type Animal = {
//     name: string;
// }

// type Bear = Animal & { 
//     honey: boolean;
// }




// خطا  -> اصلا نفهمیدمش
// let x = "hello" as string;
// const a = expr as any as T;








// declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);

//تو این کد ما با یک مشکل خیلی بچگانه روبه رو شدیم
// داخل آبجکت req مقدار Get رو به method دادیم
// اما باید به این نکته توجه کنیم که این مقدار داخل آبجکت به عنوان یک تایپی که خودمون تعریف کردیم شناسایی نمیشه و عملا به عنوان یک متن در نظر گرفته میشه


// راه حل 1
//const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method as "GET");

// راه حل 2
//const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);

// راه حل 3
// interface myType<T> {
//     url: T,
//     method: "GET" | "POST",
// }
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
// const req: myType<string> = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);

// به طور خلاصه میتونم توضیح بدم که برای اینکه اون آبجکت ، تایپی که من ساختم رو بشناسه باید به صورت as (assertion) ازش استفاده کنم









// Narrowing
// بیانگر الویت تایپ ها هستش وقتی از چنتا تایپ برای یک متغییر استفاده میکنیم


// نحوه استفاده از اپراتور in در فغحثسزقهحف
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function move(animal: Fish | Bird) {
//   console.log(animal)
//   if ("swim" in animal) {
//     return animal.swim();
//   }
 
//   return animal;
// }
// const swim = (e) => { return e }
// console.log(move({swim: swim("milad")}))







// جهت آشنایی با تایپ function
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };
 
// function move(animal: Fish | Bird | Human) {
//   if ("swim" in animal) {
//     return animal;
    
//   } else {
//     return animal;
    
//   }
// }
// const swim = (e) => { return e }
// console.log(move({swim: swim("milad"), fly: swim("fly")}))







// برای آشنایی با عملگر instanceof
// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());          
//   } else {
//     console.log(x.toUpperCase());        
//   }
// }
// logValue(new Date())






// نمیفهمم
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim;
// }
// const swim = (e) => { return e }
// console.log(isFish({swim: swim("milad")}))




// جهت آشنایی بیشتر با تعریف اینترفیس
// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     if (shape.radius) {
//         return shape.radius ** 2;
//     }
//   }
// }

// console.log(getArea({kind: "circle", radius: 5, sideLength: 10}))
///////////////////////////////////////////////////////////////////////////////////////////////
// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// interface Square {
//     kind: "square";
//     sideLength: number;
// }
   
// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     }
// }

// console.log(getArea({kind: "circle", radius: 5, sideLength: 10}))











// این هم خیلی جالب بود
// اگر شرایطی که میخوایم محیا نبود هم میشه یه چیزی ریترن کرد
// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// interface Square {
//     kind: "square";
//     sideLength: number;
// }
// type Shape = Circle | Square;
 
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }
// console.log(getArea({kind: "MIlad", radius: 5}))











// جهت تست بیشتر
// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// interface Square {
//     kind: "square";
//     sideLength: number;
// }

// interface Triangle {
//     kind: "triangle";
//     sideLength: number;
// }
   
// type Shape = Circle | Square | Triangle;
   
// function getArea(shape: Shape) {
//     switch (shape.kind) {
//       case "circle":
//         return Math.PI * shape.radius ** 2;
//       case "square":
//         return shape.sideLength ** 2;
//       default:
//         const _exhaustiveCheck: never = shape;

//         return _exhaustiveCheck;
//     }
// }

// console.log(getArea({kind: "triangle", sideLength: 5}))








// export {}