import React from 'react'
import '../../styles/pageNotFound/index.css'
const PageNotFound = () => {
  return (
    // eslint-disable-next-line
    <a target='_blank'>
      <header class='top-header'></header>

      <div>
        <div class='starsec'></div>
        <div class='starthird'></div>
        <div class='starfourth'></div>
        <div class='starfifth'></div>
      </div>

      <div class='lamp__wrap'>
        <div class='lamp'>
          <div class='cable'></div>
          <div class='cover'></div>
          <div class='in-cover'>
            <div class='bulb'></div>
          </div>
          <div class='light'></div>
        </div>
      </div>
      <section class='error'>
        <div class='error__content'>
          <div class='error__message message'>
            <h1 class='message__title'>Página No Encontrada</h1>
            <p class='message__text'>
              El URL solicitado no ha sido localizado en este servidor. Si usted tecleó el URL manualmente, por favor revise su ortografía y vuélvalo a
              intentar.
            </p>
          </div>
          <div class='error__nav e-nav'>
            {/* eslint-disable-next-line */}
            <a href='http://172.27.20.128:3001' target='_blanck' class='e-nav__link'></a>
          </div>
        </div>
      </section>
    </a>
  )
}

export default PageNotFound
