import '../Message.css'

function Message({ title, text }) {
    return (
        <div className='message'>
            <h1 className='message_title'>{title}</h1>
            <p className='message_text'>{text}</p>
        </div>
    );
}

export default Message;