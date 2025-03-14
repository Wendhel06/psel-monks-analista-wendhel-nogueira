import { useState } from "react";
import { PhoneInput } from "./PhoneInput.jsx";

export function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    try {
      fetch("http://monkswendhelnogueiraapi.local/json/v1/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
          } else {
            return response.json();
          }
        })
        .then((json) => {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          console.log(json);
        });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-required="true"
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-required="true"
        required
      />

      <label htmlFor="phone">Telefone</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        name="phone"
        id="phone"
        aria-required="true"
        required
      />

      <label htmlFor="phone">Mensagem</label>
      <textarea
        type="textarea"
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-required="true"
        required
        rows={1}
      />
      <button type="submit" id="submit-button" aria-live="polite">
        Enviar
      </button>
    </form>
  );
}
