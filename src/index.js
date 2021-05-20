import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import gf_main from "./gf_main.png";

import image2 from "./Image_2.JPG";
import image3 from "./Image_3.JPG";

const sections = [
  {
    title: "Причины создания моей фанатской версии",
    passage: "В конце 2015 года я узнал, что 2 сезон-последний сезон Гравити Фолз. Тем не менее я ждал и надеялся о появлении третьего сезона, а также 20ую серию 2го сезона. Посмотрев последнюю серию, я был в недоумении. У меня оставалось еще много вопросов, на которые я хотел услышать ответы. И вот моя фантазия начала создавать сюжет, объясняющий мои вопросы: откуда взялось силовое поле, откуда НЛО, неужели Пайнсы навсегда уничтожили Билла?",
    image: image2,
    capt: "Странногедон и силовое поле"
  },
  {
    title: "Немного о разработке",
    passage: "Первым же делом я начал планировать основной сюжет. Как оказалось, придумать его очень легко. Далее я начал расписывать каждую серию- сюжет, герои, аномалии. Мне оказал помощь мой друг-\"Мастер\", придумавший одного из героев и место событий некоторых серий. Самым сложным было написать по плану целую серию. Для этого нужно иметь огромное терпение, свободное время и вдохновение. И хотелось написать в стиле настоящего Гравити Фолз, но все равно были явные отличия. Изначально я задумывал свою версию для моих друзей, интеренсующихся этим мультсериалом. Но позже пришла идея вдобавок создать сайт. Надеюсь, что вам понравится моя версия.",
    image: image3,
    capt: "Приблизительная карта Гравити Фолз"
  }
]

function Header(props) {
  return(
    <div className="header">
      <div className="logo">
        <h1>Gravity Falls</h1>
        <p className="sublogo">Fan Edition</p>
      </div>
      <nav>
      <NavButton button="HOME"/>
      <NavButton button="SEASONS"/>
      <NavButton button="BLOG"/>
      <NavButton button="CHARACTERS"/>
      <NavButton button="THEORIES"/>
      </nav>
    </div>
  )
}

function NavButton(props) {
  return(
    <div>
      <a className="nav-button" href="/">{props.button}</a>
    </div>
  )
}

function Body(props) {
  return (
  <div className="main">
    <img src={gf_main} width="720px" alt="gravity falls" />
    <section className="first-sect">
      <div>
    <h2 className="passage-title">Гравити Фолз</h2>
    <p>Мультсериал, созданный в 2012 году Алексом Хиршем. 
      Состоит из 2х сезонов по 20 серий. Главные герои- близнецы Диппер и Мейбл
      Пайнс на время летних каникул приезжают к своему двоюродному дядюшке
      Стену- владельцу "Хижины чудес". Вскоре герои узнают, что в городке
      происходит нечто сверхъестественное. Большенство ответов содежится
      в дневнике.
    </p>
    </div>
    </section>
    <Section title={sections[0].title} passage={sections[0].passage} image={sections[0].image} capt={sections[0].capt}/>
    <Section title={sections[1].title} passage={sections[1].passage} image={sections[1].image} capt={sections[1].capt}/>
    <section className="first-sect">
      <div style={{marginBottom: "5vh"}}>
      <h2 className="passage-title">Авторы фанатской версии</h2>
      <p>
        "М.Сиров"	
        <br />
        "Мастер"
      </p>
      </div>
    </section>
  </div>
  )
}

function Section(props) {
  return(
    <section className="first-sect">
      <div>
      <h2 className="passage-title">{props.title}</h2>
      <p>{props.passage}</p>
      </div>
      <figure>
      <img src={props.image} width="400px" alt=""/>
      <figcaption>{props.capt}</figcaption>
      </figure>

    </section>
  )
}

function App(props) { 
  return(
  <>
    <Header/>
    <Body/>
  </>
  )
}

ReactDOM.render( <App/>,document.getElementById('root')
);

