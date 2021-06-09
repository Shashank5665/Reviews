// Object lists here
let object_list = [
    {
        name: "James",
        age: 20,
        job: "web developer",
        info: "Hi I am a devloperLorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam saepe vel eos voluptatem ratione perferendis sit laboriosam totam?",
        src: "James.jpg"
    },
    {
        name: "Angela",
        age: 21,
        job: "Business analyst",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam saepe vel eos voluptatem ratione perferendis sit laboriosam totam? tione perferendis sit labor",
        src: "Angela.jpeg"
    },
    {
        name: "Dany",
        age: 19,
        job: "Chess GM",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam saepe vel eos voluptatem ratione perferendis sit laboriosam totam?",
        src:"dany.jpg"
    },
    {
        name: "Joe",
        age: 26,
        job: "Trader",
        info: "Lorem ipcilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a sit amet consectetur adipisicing elit.",
        src:"joe.jfif"
    },
    {
        name: "Jonh",
        age: 29,
        job: "Designer",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam sne perferendis sit laboriosam totam? rem ipsum dolor, sit amet consectetur adipisicing elit.",
        src:"jonh.jpg"
    },
    {
        name: "Perth",
        age: 37,
        job: "Sales Executive",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam saepe vel eos voluptatem rferendis sit laboriosam totam? rem ipsum dolor, sit amet consectetur adipisicing elit.",
        src:"perth.jfif"
    },
    {
        name: "Eminie",
        age: 17,
        job: "Intern @Facebook",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam saepe vel eoperferendis sit laboriosam totam? rem ipsum dolor, sit amet consectetur adipisicing elit.",
        src:"eminie.jfif"
    },
    {
        name: "Maya",
        age: 34,
        job: "Digital marketer",
        info: "Lorem ipsum dolor, sit amet consecteturilis hic provident, suscipit sapiente animi nostrum praesentium, quam, ea quasi a nam saepe vel eos voluptatem ratione perferendis sit laboriosam totam? rem ipsum dolor, sit amet consectetur adipisicing elit.",
        src:"maya.jfif"
    }
]

// Selecting the html elements that need to be changed
var class_first_p = document.querySelector(".first_p")
var class_name = document.querySelector(".name")
var class_age = document.querySelector(".age")
var class_job = document.querySelector(".job")
var class_info = document.querySelector(".info")
var image_src = document.querySelector(".image")
var leftButton = document.querySelector(".left");
var rightButton = document.querySelector(".right");

// Variable to track the array objects
let current=0

// Main logic
function display(){
    class_first_p.style.display = "none";
    class_name.innerHTML = object_list[current].name;
    class_age.innerHTML = object_list[current].age
    class_job.innerHTML = object_list[current].job;
    class_info.innerHTML = object_list[current].info;
    image_src.src = object_list[current].src;
}

leftButton.addEventListener("click", function(){
    current--
    if(current < 0){
        current = object_list.length-1;
    }
    display()
    console.log(current)  
})


rightButton.addEventListener("click", function(){
    current++
    if(current === object_list.length){
        current = 0;
    }
    display()
    console.log(current)
})