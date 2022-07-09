let plus = document.getElementById("plus");
let list = document.getElementById("list");
let input = document.getElementById("input");

// takes input when the plus is clicked
plus.addEventListener("click", function () {

    // console.log(document.querySelector(".done").length);

    if(document.querySelector(".done") == null)
    {
        todo();
        return;
    }
    else if(document.querySelector(".done").length!=0)
    {
        document.querySelector("#list").innerHTML="";
    }
    todo();
});


// takes input after pressing Enter
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {


        if(document.querySelector(".done") == null)
        {
            todo();
            return;
        }
        else if(document.querySelector(".done").length!=0)
        {
            document.querySelector("#list").innerHTML="";
        }
        todo();
    }
});

function todo() {
    if (input.value.trim().length != 0) {
        // creating a <p></p>
        var para = document.createElement("li");
        // adding class for styling in para
        // para.classList.add("para-style");

        para.innerText = input.value+" ";

        var trash_button = document.createElement("a");
        trash_button.innerHTML='<i class="del-btn fa-solid fa-trash"></i>';
        // var trash = document.createElement("img");
        // trash.src ="static/icons/trash-can.svg";
        // trash_button.appendChild(trash);
        para.appendChild(trash_button);
        var lineBreak = document.createElement("hr");
        para.appendChild(lineBreak);
        list.appendChild(para);
        input.value = "";

        trash_button.addEventListener("click", function () {
            list.removeChild(para);
            if(document.querySelectorAll("#list li").length == 0)
            {
                document.querySelector("#list").innerHTML="<li class='done'>Hooray, No tasks left!!</li>";
            }
        });
    }
}
