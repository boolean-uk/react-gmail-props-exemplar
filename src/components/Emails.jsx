import Email from "./Email";

export default function Emails({ emails, toggleRead, toggleStar, openEmail }) {
    return (
        <main className="emails">
            <ul>
                {emails.map((email, index) => (
                    <Email
                        key={index}
                        email={email}
                        toggleRead={toggleRead}
                        toggleStar={toggleStar}
                        openEmail={openEmail}
                    />
                ))}
            </ul>
        </main>
    )
}