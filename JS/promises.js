// const result  = fetch('https://jsonplaceholder.typicode.com/posts');
// const ul = document.getElementById("ul");
// console.log(result);

// result.then(
//     data=>data.json().then
//     (data=>{
//         data.forEach(data => {
//             const li = document.createElement("li");
//             li.innerText = data.title;
//             ul.append(li);
//         });
//     }
// ));




// const result  = fetch('https://jsonplaceholder.typicode.com/posts/1');

// console.log("hello1");

// result.then(data=>{
//     const jsonfile = data.json();
//     jsonfile.then(data=>{
//         console.log(data.title);
//     })
// });

// console.log("hello2");



// function f1(callback)
// {
//     setTimeout(()=>{
//         console.log("account created");
//         callback();
//     },2000);
// }

// function f2(callback)
// {
//     setTimeout(()=>{
//         console.log("Payment done");
//         callback();
//     },3000);
// }

// function f3()
// {
//     setTimeout(()=>{
//         console.log("Recete Generate");
//     },1000);
// }


// f1(()=>{
//     f2(()=>{
//         f3();
//     })
// })


// async function f1()
// {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res("account done"),2000);
//     })
// }

// async function f2()
// {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>rej("payment failed"),3000);
//     })
// }

// async function f3()
// {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res("subscription"),1000);
//     })
// }


// f1().then(data=>console.log(data));
// f2().then(data=>console.log(data));
// f3().then(data=>console.log(data));


// f1().then(data=>{
//     console.log(data);
//     return f2();
// }).then(data=>{
//     console.log(data);
//     return f3();
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// setTimeout(()=>{
//     console.log("hello1")
// },0);

// const p1 = new Promise((res,rej)=>{
//     res("hello2");
// });

// console.log("hello3");

// p1.then(data=>console.log(data));

// setTimeout(()=>{
//     console.log("hello4")
// },1000);

// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello5")
//         res();
//     },1000);
// });

// console.log("hello6");



// setTimeout(()=>{
//     console.log("hello4");
// },0);

// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>res("prom1"),1500)
// });

// p1.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res("prom2"),1000)
//     });
// }).then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         setTimeout(()=>rej("err prom3"),2000)
//     });
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// setTimeout(()=>{
//     console.log("hello5");
// },1000)

// setTimeout(()=>{
//     console.log("hello6");
// },2000)

// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>res("prom1"))
// },0);



// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>res("prom3"),2000)
// });

// p1.then(data=>console.log(data));
// p2.then(data=>console.log(data));
// p3.then(data=>console.log(data));

// console.log("hello 1");

// setTimeout(()=>{
//     console.log("log 1");
// },1500);

// setTimeout(()=>{
//     console.log("log 2");
// },500);

// async function fn()
// {
//     console.log("hello 7");
//     const x1 = await p1;
//     console.log(x1);

//     const x2 = await p2;
//     console.log(x2);

//     const x3 = await p3;
//     console.log(x3);
// }

// fn();

// console.log("hello 2");

// function f1()
// {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res("account"),2000);
//     });
// }
// function f2()
// {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res("payment"),1000);
//     });
// }
// function f3()
// {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res("subscription"),3000);
//     });
// }


// f1().then((data)=>{
//     console.log(data);
//     return f2();
// }).then((data)=>{
//     console.log(data);
//     return f3();
// }).then((data)=>{
//     console.log(data);
// })

function f1()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>res("account"),2500);
    });
}
function f2()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>res("payment"),1500);
    });
}

setTimeout(()=>{
    console.log("hello1")
},2000);

setTimeout(()=>{
    console.log("hello2")
},1000);

console.log("hello3");

async function fn()
{
    console.log("hello 4");

    const data = await f1();
}
