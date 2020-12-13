export const getContactConversations = (messages, from, to) => {
  return messages
    .filter(message =>
      (message.from === from && message.to === to)
      || (message.from === to && message.to === from)
    );
};

export const getContactConversationsLastMessage = (messages, from, to) => {
  const conversations = getContactConversations(messages, from, to);
  const lastMessage = conversations.slice(-1)[0] || {};
  return lastMessage;
};
