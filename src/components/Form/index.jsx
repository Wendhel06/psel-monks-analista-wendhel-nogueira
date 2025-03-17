import { useState } from "react";
import "./styles.css";

export function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [answerUser, setAnswerUser] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const num1 = 428;
  const num2 = 600;
  const somaTotal = num1 + num2;

  function isFormValid() {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      message.trim() !== "" &&
      answerUser.trim() !== ""
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Number(answerUser) === somaTotal) {
      setIsCorrect(true);
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
            console.log(json);
          });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAnswerUser("");
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
      }
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="hold-inputs">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
          required
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          placeholder="Telefone"
          id="phone"
          aria-required="true"
          required
        />

        <input
          type="text"
          name="message"
          placeholder="Mensagem"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-required="true"
          required
          rows={1}
        />
      </div>
      <div className="verification-form-container">
        <div className="hold-verification-input">
          <p className="verification-title">Verificação de segurança</p>
          <div className="hold-input-soma">
            <p className="verification-soma-text">428 + 600</p>
            <span className="equal">=</span>
            <input
              type="number"
              value={answerUser}
              placeholder="Resultado*"
              onChange={(e) => setAnswerUser(e.target.value)}
              required
            />
          </div>
        </div>
        {isCorrect === false && (
          <p style={{ color: "red" }}>
            Resultado da verificação de segurança incorreto.Tente novamente.
          </p>
        )}
      </div>
      <button
        type="submit"
        id="submit-button"
        aria-live="polite"
        disabled={!isFormValid()}
        className="button-submit"
      >
        Enviar
      </button>
    </form>
  );
}
