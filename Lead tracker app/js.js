let mylead = [];
const inputel = document.getElementById("input-el");
let saveel = document.getElementById("save-el");
const ulel = document.getElementById("ul-el");
let deleteel = document.getElementById("delete-el");
const savetab = document.getElementById("save-tab");

    let leadsfromlocalstorage = JSON.parse(localStorage.getItem("mylead"))
    console.log(leadsfromlocalstorage)
    if(leadsfromlocalstorage){
        mylead = leadsfromlocalstorage;
        render(mylead)
    }
    console.log(mylead)


savetab.addEventListener("click",function (){

    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){

        mylead.push(tabs[0].url);
        localStorage.setItem("mylead",JSON.stringify(mylead))
        render(mylead)
    })

})

saveel.addEventListener("click",function(){
     mylead.push(inputel.value);

     inputel.value = "";
      localStorage.setItem("mylead",JSON.stringify(mylead))
    render(mylead)
    console.log(localStorage.getItem("mylead"))
})

function render(lead) {
     let listitem = "";
     for (let i = 0; i < lead.length; i++) {
          listitem += `<li>
                        <a href='${lead[i]}' target='_blank'>
                        ${mylead[i]}
                        </a>
                        </li>`;
     }
     ulel.innerHTML = listitem;
}
    deleteel.addEventListener("dblclick",function (){
        localStorage.clear();
        mylead=[];
        render(mylead)
    })