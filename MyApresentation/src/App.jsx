import {useState, useEffect} from 'react'
import './assets/global.css'

function App() {

  // Lógica do MENU
  const[openMenu, setOpenMenu] = useState(false)

  function presentationMenu() {
    if(openMenu == true) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
    console.log("Testando aqui...")
  }

  // Lógica do formulário de contato
 // useState para pegar os valores dos inputs
const [name, definyName] = useState(null);
const [email, definyEmail] = useState(null);

//para colocar as mensagem nos inputs
const [textName, setName] = useState("")
const [textEmail, setEmail] = useState("")

// CONSTRUIR USE EFECT NOVO AQUI

  function verifyEmail() {
    var tostore = /\S+@\S+\.\S+/;
    return !tostore.test(email) ? false : true;
    }

  function verifyName() {
    if(name == null) {
      return false
    } else if(name.length < 3) {
      return false
    } else if(/^-?\d+$/.test(name)) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div>
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      </div>
      {/* Abaixo, o parâmetro é a tecla que é digitada e esta arrow function pode enviar este resultado para ser manipulado*/}

      {/* TO DO: Continuar pesquisando como resolver a tecla basckspace no menu e outros elementos da página */}

      <div className="l-app" 
      onKeyDown={(backspaceEvent) => {
        if(backspaceEvent == "space") {

        }
      }}>

        {/* 1. Esta sessão deverá ser apresentada
        sempre que houver o click no botão MENU: */}

        {/* <button 
        className="l-sidebar__btn" 
        type="button" 
        onClick={() => console.log("Testando onClick")

        }
        >Menu</button> */}

        <div className={ openMenu ? "l-sidebar--open" : "l-sidebar--close"} >
          <h1 className="l-logo">seu nome</h1>
          <nav className="c-sidebar">
            <a className="c-nav__item" href="#sobre-mim">sobre mim</a>
            <a className="c-nav__item" href="#contatos">contatos</a>
          </nav>
        </div>

        {/* 1.1. Quando houver o click do usuário,
        a sidebar deverá ser apresentada. */}

        {/* <div className="l-sidebar">
          ...
        </div> */}

        {/* <button className="l-sidebar__btn" type="button">Menu</button> */}
        <button className="l-sidebar__btn" 
        type="button" 
        onClick={() => presentationMenu()
        }>Menu</button>


        {/* 2. O usuário poderá usar o teclado para abrir ou fechar
        a sidebar. No caso, as tecla Space.

        3. O usuário poderá usar o mouse para abrir ou fechar
        a sidebar e, também, no caso, um duplo click na própria sidebar irá abri-la.*/}

        <div className="l-content">

          {/* Sessão Principal */}
          <div className="l-page bg__profile">
            <main>
              <h1 className="title">Olá, me chamo fulano</h1>
              <p className="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="">Github</a>
                <a className="c-nav__item" href="">Linkedin</a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a>
            </main>
          </div>

          {/* Sessão Sobre mim */}
          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">Sobre mim</h1>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Per aumento de cachacis, eu reclamis.Casamentiss faiz malandris se pirulitá.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
              <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.</p>
              <p>Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Sapien in monti palavris qui num significa nadis i pareci latim.</p>
            </article>
          </div>

          {/* Sessão Contatos */}
          <div className="l-page" id="contatos">
            <section>
              <h1 className="title">Posso te ajudar?</h1>

              <nav className="c-nav">
                <a className="c-nav__item" href="">Github</a>
                <a className="c-nav__item" href="">Linkedin</a>
                <a className="c-nav__item" href="tel:+5521972190000">Telefone</a>
              </nav>
              <form
                onSubmit={(event) => {
                  if(!verifyEmail()||!verifyName()) {
                    event.preventDefault();
                      if(!verifyEmail()&&!verifyName()) {
                        setEmail("E-mail inválido!")
                        setName("Nome inválido!")
                      } else if(verifyName()) {
                        setName("");
                       } else if(verifyEmail()) {
                        setEmail("");
                       } else if(!verifyEmail()) {
                        setEmail("E-mail inválido!")
                      }else if(!verifyName()) {
                        setName("Nome invalido!")
                      }} else if(verifyEmail() || verifyName()) {
                         alert("Ação bem sucedida!")
                         setEmail("");
                         setName("");
                       } 
                   }}
       
                name="contact"
                className="c-form"

              >
                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">Nome</label>
                  <input 
                  type="text" 
                  placeholder="Digite seu nome" 
                  id="name" 
                  className="c-form__control" 
                  // value={formValues.name}
                  onChange={(event) => {
                    definyName(event.target.value)
                  }}
                  />
                </div>
                <div>{textName}</div>
                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">E-mail</label>
                  <input 
                  type="text" 
                  placeholder="Digite seu e-mail" 
                  id="email" 
                  className="c-form__control"
                  onChange={(event) => {
                    definyEmail(event.target.value)
                  }}
                  />
                </div>
                <div>{textEmail}</div>
                <div className="c-form__group">
                  <label 
                  htmlFor="subject" 
                  className="c-form__label"
                  // value={formValues.subject}
                  // onChange={handleChange}
                  >Assunto</label>
                  <select id="subject" className="c-form__control">
                    <option value disabled></option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div className="c-form__group">
                  <label 
                  htmlFor="messager" 
                  className="c-form__label"
                  >Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit">Enviar</button>
                </div>
              </form>
            </section>

            <footer className="u-my-3">
              <span>Todos os direitos reservados - Rodrigo Ferreira - 2022.</span>
            </footer>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
