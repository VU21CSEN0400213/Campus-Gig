const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatBody = document.getElementById('chat-body');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    addMessage('user', 'You', messageText);
    messageInput.value = '';
  }
});

function addMessage(type, name, message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('name');
  nameSpan.textContent = `${name}:`;

  const messageSpan = document.createElement('span');
  messageSpan.textContent = message;

  messageDiv.appendChild(nameSpan);
  messageDiv.appendChild(messageSpan);
  chatBody.appendChild(messageDiv);

  // Scroll to bottom when a new message is added
  chatBody.scrollTop = chatBody.scrollHeight;
}
