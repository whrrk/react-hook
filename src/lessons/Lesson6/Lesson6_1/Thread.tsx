import { useRef } from "react";
import { useOptimistic } from "react";
import { Message } from "./Lesson6_1";

const Thread = ({
  messages, 
  sendMessage,
} : {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(
    messages,
    (state, newMessageText) => [
      ...state, 
      {
        text: newMessageText, 
        sending: true, 
        key: state.length + 1
      }]
  );

  const formAction = async (formData: FormData) => {
    const value = formData.get("message");

    if (typeof value === "string" && value.trim() !== "") {
      addOptimisticMessage(value);
    }

    formRef.current?.reset();
    await sendMessage(formData);
  };

  return (
    <div>
      {optimisticMessages.map((message: Message, index: number) => (
        <div key={index}>{message.text} {!!message.sending && <small>(Sending...)</small>}</div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 border-2 px-2 py-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
};

export default Thread;
