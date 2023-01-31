const addButton = document.querySelector("input[value='add']")
const removeButton = document.querySelector("input[value='remove']")
const outputList = document.querySelector("main section ol")
const participantInput = document.getElementById("participantInput")
const participantsList = []


addButton.addEventListener("click", () => {
    participantsList.push(participantInput.value)
    renderOutputList()
})
removeButton.addEventListener("click",()=>{
    participantsList.pop()
    renderOutputList()
})
participantInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        participantsList.push(participantInput.value)
        renderOutputList()
    }
  })


function renderOutputList() {
    participantInput.value =""
    participantInput.focus()
    if(participantsList.length === 0) return outputList.innerHTML= ""

    outputList.innerHTML = "<li>" + participantsList.join("</li><li>") + "</li>"


}