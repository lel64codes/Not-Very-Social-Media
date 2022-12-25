const MessageBox = document.getElementById("CurrentMessage");
const AddMessagesHere = document.getElementById("MessagesWrapper");
AssistanceBOT.Activate();
function SendText(Username = "Likely_A_Human", Message = MessageBox.value) {
  var NewElem = document.createElement("div");
  var UserNameElem = document.createElement("strong");
  var InnerNewElem = document.createElement("p");
  UserNameElem.textContent = Username + ": ";
  InnerNewElem.textContent = Message;
  NewElem.className = "Message";
  NewElem.appendChild(UserNameElem);
  NewElem.appendChild(InnerNewElem);
  AddMessagesHere.appendChild(NewElem);
  AddMessagesHere.appendChild(document.createElement("hr"));
  if (Message.toLowerCase() === "help") {
    AssistanceBOT.Activate();
  }
  else if (Message.toLowerCase() === "spam") {
    SpammerBOT.Activate();
  }
}
function SendHTML(Username = "Likely_A_Human", Message = MessageBox.value) {
  var NewElem = document.createElement("div");
  var UserNameElem = document.createElement("strong");
  var InnerNewElem = document.createElement("p");
  UserNameElem.textContent = Username + ": ";
  InnerNewElem.innerHTML = Message;
  NewElem.className = "Message";
  NewElem.appendChild(UserNameElem);
  NewElem.appendChild(InnerNewElem);
  AddMessagesHere.appendChild(NewElem);
  AddMessagesHere.appendChild(document.createElement("hr"));
}
function SendJS(Code = MessageBox.value) {
  try {
    alert("Eval results: " + eval(Code));
  }
  catch {
    alert("JS Error");
  }
}
function Clear() {
  MessageBox.value = "";
}
