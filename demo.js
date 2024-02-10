let Mylist = document.getElementById('Mylist');
let Inpt = document.getElementById('Inpt');
let Users = [];


function Add() {
    let Name = Inpt.value
    Users.push(Name) 
    Display();
}

function DeleteUser(index) {
    Users = Users.filter((e,i) => i!=index);
    Display();
}

function Display(e) {
    Mylist.innerHTML = "";
    Users.map((e,i) => {
        let L = document.createElement("li");
        L.innerHTML = e;
        let Dlt = document.createElement("button");
        Dlt.innerHTML = "Remove"
        Dlt.classList.add("delete");
        Dlt.onclick = () => {
            DeleteUser(i);
        };
        L.appendChild(Dlt);
        Mylist.appendChild(L);
    })
}
let tl = gsap.timeline();

tl.from("#hadding",{
    y:-200
})

tl.from("#upper",{
    x:-2000
})
tl.from("#Inpt",{
    x:-2000
})
tl.from("#button",{
    x:2000
})
tl.from("#down",{
    x:2000
})

