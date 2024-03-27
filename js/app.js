
const chatBody = document.querySelector('.chat-body');
const txtInput = document.querySelector('#txtInput');
const send = document.querySelector('.send');

send.addEventListener("click", ()=> renderUserMessage());

txtInput.addEventListener("keyup",(event)=>{
    if(event.keyCode === 13){
        renderUserMessage();
    }
})

const renderUserMessage = () =>{
    const userInput = txtInput.value;
    renderMessageEle(userInput,"user");
    txtInput.value="";
    setTimeout(() => {
        renderChatBotResponse(userInput);
        setScrollPosition();
    }, 600);
}

const renderChatBotResponse = (userInput)=>{
    const res= getChatBotResponse(userInput);
   renderMessageEle(res);
}

const renderMessageEle = (txt, type)=>{
    let className="user-message";
    if(type !== "user"){
        className= "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
}

const getChatBotResponse = (userInput) => {
    return responseObj[userInput]== undefined ? "Por favor intente algo más ": responseObj[userInput];
}

const setScrollPosition = ()=>{
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}