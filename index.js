let x = "YXZ";
let user = "XYz";

const ourFunction = (x,y)=>{
    let xSplit = x.split("");
    let userSplit = y.split("");

    let resultUser = userSplit.sort().join("").toUppercase();
    let resultX = xSplit.sort().join("").toUppercase();

    if(resultUser === resultX){
        return true;
    }else{
        return false;
    }
};
console.log(ourFunction(x,user));

let a = [1,4,3,7,11,19,15];
console.log(a.map((student)=>{
    return student;
}));
console.log(a.sort((a,b)=>{
    return a-b;
}));
console.log(a.filter((student)=>{
    return student !== 19;
}));




const search = (arr,user)=>{
    let a= arr.filter((el)=>{
        return el.name === user;
    });
    return a;
};
const remove = (arr,id)=>{
    let a = arr.filter((el)=>{
        return el.id;
    });
    return a;
};
console.log(entry.map((el)=>{
    return el.name;
})
.sort((a,b)=>(b-a))
);
// let xx = Array.from({length:10},()=>{
//     let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@^%";

//     let score = Math.round(Math.random()*100);
//     let a1 = Math.round(Math.random()*a.length);

//     return{name: ${a[a1]},
//     score};
// });
// console.log(xx);






// let entry = [
//     {
//         id:1,
//         name:"mije",
//         age:10,
//     },
//     {
//         id:2,
//         name:"gift",
//         age:10,
//     },
//     {
//         id:5,
//         name:"gift",
//         age:15,
//     },
//     {
//         id:4,
//         name: "gift",
//         age:7,
//     },
//     {
//         id:3,
//         name:"john doe",
//         age:30,
//     },
// ];
// console.log(entry.map((entries)=>{
//     return entries.name;
// }));
