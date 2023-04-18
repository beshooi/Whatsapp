let chat_dot=document.querySelector(".chat-dots")
let state_dot=document.querySelector(".state-dots")
let archieve= document.querySelector(".archive")
let chat_content= document.querySelector(".chat-content")
let chat_state= document.querySelector(".chat-states")
let text_chat= document.querySelector(".text-chat h2")

state_dot.addEventListener(("click"),()=>{
    state_dot.classList.toggle("focus")
    chat_dot.classList.remove("focus")
    chat_content.style.display="none "
    archieve.style.cssText="display:none !important;"
    chat_state.style.display="block"
    text_chat.innerHTML="State"
})

chat_dot.addEventListener(("click"),()=>{
    chat_dot.classList.toggle("focus")
    state_dot.classList.remove("focus")
    chat_content.style.display="block "
    archieve.style.cssText="display:flex !important ;color:white ; gap: 40px;"
    chat_state.style.display="none"
    text_chat.innerHTML="Chats"

})