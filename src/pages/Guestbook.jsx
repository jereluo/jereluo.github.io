import { useState, useEffect } from "react";
import { db } from "/firebase";
import { ref, push, onValue } from "firebase/database";
import { FaThumbtack } from "react-icons/fa"; 
import './Guestbook.css';

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (name.trim().toLowerCase() === "admin") {
      alert("Nimimerkki 'admin' on varattu vain ylläpidon käyttöön!");
      return;
    }

    const messagesRef = ref(db, "guestbook");
    push(messagesRef, {
      name: name.trim(),
      text: message.trim(),
      timestamp: Date.now(),
    });

    setName("");
    setMessage("");
  };

  useEffect(() => {
    const messagesRef = ref(db, "guestbook");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setMessages([]);
        return;
      }

      const formatted = Object.entries(data).map(([id, msg]) => ({ id, ...msg }));

      const pinned = formatted.find(msg => msg.name?.toLowerCase() === "admin");
      const others = formatted
        .filter(msg => msg.name?.toLowerCase() !== "admin")
        .sort((a, b) => b.timestamp - a.timestamp);

      const finalMessages = pinned ? [pinned, ...others] : others;
      setMessages(finalMessages);
    });
  }, []);

  return (
    <div className="guestbook-wrapper">
      <h2 className="guestbook-title">Vieraskirja</h2>
      <form onSubmit={handleSubmit} className="guestbook-form">
        <input
          type="text"
          className="guestbook-input"
          value={name}
          onChange={(e) => {
            if (e.target.value.length <= 30) setName(e.target.value);
          }}
          placeholder="Nimimerkki (max 30 merkkiä)"
          required
        />
        <textarea
          className="guestbook-textarea"
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= 300) setMessage(e.target.value);
          }}
          placeholder="Kirjoita viestisi tähän... (max 300 merkkiä)"
          rows={4}
          required
        />
        <button type="submit" className="guestbook-button">Lähetä</button>
      </form>

      <div className="guestbook-messages">
        <h3 className="guestbook-messages-title">Edelliset viestit:</h3>
        {messages.length === 0 && <p className="guestbook-no-messages">Ei vielä viestejä.</p>}
        {messages.map((msg) => (
          <div key={msg.id} className="guestbook-message">
            <div className="guestbook-message-header">
              <div className="guestbook-message-name">{msg.name || "Nimetön"}</div>
              {msg.name?.toLowerCase() === "admin" && (
                <FaThumbtack className="pinned-icon" title="Kiinnitetty viesti" />
              )}
            </div>
            <div className="guestbook-message-timestamp">
              {new Date(msg.timestamp).toLocaleString()}
            </div>
            <div className="guestbook-message-text">{msg.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
