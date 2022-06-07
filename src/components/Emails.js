import Email from "./Email"

function Emails({ emails, toggleRead, toggleStar }) {
    return (
        <ul>
          {emails.map((email, index) => (
            <li key={index} className={`email ${email.read ? 'read' : 'unread'}`}>
                <Email
                    email={email}
                    toggleRead={toggleRead}
                    toggleStar={toggleStar}
                />
            </li>
          ))}
        </ul>
    )
}

export default Emails
