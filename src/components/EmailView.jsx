import backArrow from '../assets/back-arrow.png'
import rubbishButton from '../assets/rubbish-bin-delete-button.png'
import '../styles/EmailView.css'

export default function EmailView({ email, backBtn }) {
    return (
        <main className="email-view">
            <nav className="email-toolbar">
                <ul>
                    <li>
                        <img onClick={backBtn} className="icon" src={backArrow} alt="reply button" />
                    </li>
                    <li>
                        <img className="icon" src={rubbishButton} alt="delete button" />
                    </li>
                </ul>
                <div className="space"></div>
                <div>
                    <p>1 of 25</p>
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </nav>

            <article className="email-content">
                <div className="title">
                    <h1>{email.title}</h1>
                </div>

                <header className="email-content--header">
                    <div className="avatar"></div>
                    <div className="email-info">
                    <div className="sender-info">
                        <h2>{email.sender}</h2>
                        <em>&lt;{email.sender}&gt;</em>
                    </div>
                    <div className="user-info">
                        <p>
                        to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                        </p>
                    </div>
                    </div>
                    <div className="date-info">
                    <p>17 March 2021, 09:33</p>
                    </div>
                    <div className="email-action-icons">
                    <ul>
                        <li>
                        <img className="icon" src={backArrow} alt="reply button" />
                        </li>
                        <li>
                        <div className="star"></div>
                        </li>
                        <li>
                        <img
                            className="icon"
                            src={rubbishButton}
                            alt="delete button"
                        />
                        </li>
                    </ul>
                    </div>
                </header>

                <section className="email-body">
                    <div className="content">
                        <p>Nullness</p>
                        {/* <img src={flaticonWelcomeImage} alt="Flaticon welcome message" /> */}
                    </div>
                </section>

                <section className="email-actions">
                    <button>Reply</button>
                    <button>Forward</button>
                </section>
            </article>
      </main>
    )
}