import React, { useState } from 'react'
import Logo from './../img/Logo.png'

export const Footer = () => {
  const [speakWithUs, setSpeakWithUs] = useState({
    input_contact_me: '',
    textarea_contact_me: ''
  })

  const HandleContactMe = (event) => {
    setSpeakWithUs({
      ...speakWithUs,
      [event.target.name]: event.target.value
    })
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <footer>
      <div className="top">
        <div className="content">
          <div className="side_left">
            <img src={Logo} alt="Alura Geek" />
            <ul>
              <li><a href="#">Quienes somos</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Programa de fidelidad</a></li>
              <li><a href="#">Nuestras Tiendas</a></li>
              <li><a href="#">Quiero ser franquiciado</a></li>
              <li><a href="#">Anúncie aquí</a></li>
            </ul>
          </div>
          <form className="side_rigth" onSubmit={HandleSubmit}>
            <p>Hable con nosotros</p>

            <label htmlFor="input_contact_me" className="box box--input">
              <input
                type="text"
                id='input_contact_me'
                name='input_contact_me'
                value={speakWithUs.input_contact_me}
                onChange={HandleContactMe}/>
              <span
                className={(speakWithUs.input_contact_me === '') ? 'span--bottom' : ''}>Nombre</span>
            </label>

            <label htmlFor="textarea_contact_me" className="box box--textarea">
              <textarea
                id='textarea_contact_me'
                name='textarea_contact_me'
                value={speakWithUs.textarea_contact_me}
                onChange={HandleContactMe}></textarea>
              <span
                className={(speakWithUs.textarea_contact_me === '') ? 'span--bottom' : ''}>Escribe tu mensaje</span>
            </label>

            <input type="submit" value="Enviar mensaje" />

          </form>
        </div>
      </div>
      <div className="bottom">
        <a
          href="https://www.linkedin.com/in/ldulivo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por Leonardo D&apos;Ulivo<br/>2022
        </a>
      </div>
    </footer>
  )
}
