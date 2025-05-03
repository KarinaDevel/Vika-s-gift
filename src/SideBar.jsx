import React, { useEffect, useState } from 'react';
import party from 'party-js';
import './sideBar.scss';
import './sideBar-media.scss'

function SideBar(){

    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        <div className="gratulationgs">
            <img className='logo' src="/imgs/logo-princess.png" alt="princess-logo" />
            <h2>Dear, Victoria</h2>
            <p className='gratul-text'>
            Викусяяяяяяя, приветики, в качестве подарка я тебе создала сайт и я большe чем уверенна, что тебе такое еще никогда не делали и этот подарок переплюнет ВСЕХ (кроме телефона). НЕ ОТРЫВАЙ ЭТОТ САЙТ ПОКА НА ТЕЛЕФОНЕ. Я потом доделаю все (просто я не успеваю) ИНАЧЕ ЭТО БУДЕТ КРАХ МОЕЙ КАРЬЕРЫ. Хочу пожелать тебе невероятных эмоций в твой день рождения, И ЧТОБЫ НЕ ПЛАКАЛА МНЕ СЕГОДНЯ !!!! Я ТУТ СТАРАЛАСЬ ЧТОБЫ ТЕБЕ БЫЛО ХИ-ХИ-ХА-ХА А НЕ ПЛАКИ-ПЛАКИ !!!
            Мы уже дружим целых 2 года (сама только на днях от тебя узнала) и за это время мы не то, чтобы сблизились, мы стали однозначно больше и значимей друг для друга чем лучшие подруги. Я всегда была готова выслушать тебя и если это что-то срочное, я в любое время прийду или возьму трубку и поддержу тебя. Мы встретились случайностью, но это точно не так. Рассказываю про свою жизнь, приключения, идеи, ты вдохновляла меня и я это всегда буду вспоминать и ценить. Я никогда не буду готова рассказать тебе все свои проблемы как и ты мне ведь порой нам кажется, что кому-то это знать не стоит, кому-то неинтересно, а у кого-то и так куча своих проблем. Я всегда сдерживаю свои обещания и поэтому обещаю только то, что знаю, что сумею выполнить. Я бы закинула этот текст в ГПТ, чтобы он исправил мои ошибки, запятые и тд., но я хочу, чтобы ты чувствовала с какими эмоциями Я это пишу от ЧИСТОГО и абсолютно искреннего сердца. Никогда не бойся мне написать про кого-то, чтобы обсудить, помочь или что-то вместе решить. В канунные дни перед твоими экзаменами и во время, я буду тебя поддерживать как никогда, как то, чтобы я хотела услышать. Ты умная и я хочу, чтобы ты поступила куда хочешь. Я черствая на других людей, но на самых близких (ты определенно в этом числе) я возлагаю все надежды и не злюсь и не расстраиваюсь если что-то у кого-то не получилось и зависило это от меня, для меня или со мной. Я смеюсь если ты забыла поздравить меня с др, что-то не так поняла, прочитала и тд. ведь для меня это абсолютно не важно, для меня важна ТЫ. Я обожаю твой голос в твоих голосовых, потому что я люблю твою манеру и тебя как человека, и мне приятно слышать просто эти слова не важно с ошибками, со слезами, заиканиями или вообще  набор звуков от тебя. 
            В честь твоего дня воскрешения я хочу тебе пожелать, чтобы тебе НИКТО И НИКОГДА не завидовал, а только все радовались и не бросали камни  в твою яму с золотом. Чтобы весь материал, что тебе нужен, лез сам в голову и ты понимала все от А-Я ведь ты можешь. Больших тебе успехов в карьере и помни, что все, что не случается, то к лучшему 💋
            </p>
        </div>,
        <div className="chat-hison">
           <div className="hison-img-wrapper">
                <img className='photo-hison' src="/imgs/start.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с1.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с2.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с3.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с4.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с5.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с6.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с7.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с8.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с9.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с10.jpg" alt="" />
                <img className='photo-hison' src="/imgs/с11.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п1.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п2.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п3.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п4.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п5.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п6.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п7.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п8.jpg" alt="" />
                <img className='photo-hison' src="/imgs/п9.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б1.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б2.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б3.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б4.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б5.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б6.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б7.jpg" alt="" />
                <img className='photo-hison' src="/imgs/б8.jpg" alt="" />
           </div>
        </div>,

        <div className="memy">
            <h2>Наши мемы</h2>
            <div className="wrapper-meme">
                <div className="meme">
                    <p>1. —я такая умная,интеллигентная, а у меня сиська вылезет 😭😭😭😭😭💔💔💔</p>
                </div>
                <div className="meme">2. ✨КУЛАК В РОТ И ПОДНЯЛА ЗА ПЯТКУ!!</div>
                <div className="meme">3. ✨ —СНАЧАЛА НЕМНОГО ПОДУШИ, ПОТОМ ЕСЛИ НЕ БУДЕТ СЛУШАТЬСЯ НЕМНОГО ПОЦАРАПАЙ!!
                    <br />— ты станешь идеальной мамой…
                </div>
                <div className="meme">4. ✨ —о-ой… мне кто-то на ухо шепчет…
                    <br /> —я щас у мамы спрошу что это …
                    <br /> ЭТО ЖЕ ДУХ ПРОКЛЯТОГО ДУХА, НЕЧИСТЬ КОТОРАЯ ПИТАЕТСЯ ПРОКЛЯТОЙ ЭНЕРГИЕЙ, ЭТО ЖЕ ДОМОВОЙ!
                    <br /> —АААААААА😱😱😱😱😱😱😱😱😱😱😱😱
                    <br /> —БЕРИ ОБЛИВАЙСЯ СВЯТОЙ ВОДОЙ С БЕНЗИНОМ И НЕ СМЫВАЙ!!!</div>
                <div className="meme">5. ✨—kids (почки)
                    <br />—сперматозоиды???
                </div>
                <div className="meme">
                    6. ✨настала эра спорта и поноса - #НЕТУСКОЛИОЗА
                </div>
                <div className="meme">
                7. ✨Пов: МЫ ВО ФРАНЦИИ:✨
                    <br /> Я:
                    <br /> - бонжур силь бупле ☺️🥐🇫🇷
                    <br /> Ты:
                    <br /> - lundi! (Понедельник)
                    <br /> Я:
                    <br /> - О МОЙ ДУ СО Ф😮‍💨*типа харкнула*РОНСЕЕЕ
                    <br /> Ты:
                    <br /> -ДИМОНЖ
                    <br /> Я:
                    <br /> - ФОРМИДАБЛЕЕЕЕ, ФОООООРМИДАБЛЕЕЕЕЕ
                    <br /> Ты:
                    <br /> - please, кгуаСОООООООН 🥰
                    <br /> Я:
                    <br /> - Je t’iamo
                    <br /> Ты:
                    <br /> - ооооооо 😏😏😏😏 кгуаСОООООООООн 💋
                </div>
                <div className="meme">
                8. карина:
                    <br />-*играет как прошка, параллельно делает туториал по игре* 😈 🃏
                    <br /> я:
                    <br /> - ЭТО МУЖ И ЖЕНА???!?? 😱😱😱 ЭТО ЧТО ДВА МУЖА????😱 ЭТО ОДНОФАМИЛЬЦЫ 😱
                </div>
                <div className="meme">
                    9. 😮‍💨 *типа свистнула*
                </div>
                <div className="meme">
                    10. -*буллит димона покемона*
                    <br /> он:
                    <br /> -what do you need😡😡😡
                    <br /> - БЕЙ ЕГО БЕЙ !!!! И РУКИ ВЫТИРАЙ ОБ НЕГО, ТУДА ДИМОНА ПОКЕМОНА 👽
                </div>
                <div className="meme">
                    11. колбаской в глаз ✍🏻✍🏻записываю ххмммм✍🏻✍🏻✍🏻 пишу✍🏻✍🏻✍🏻✍🏻 еще пишу ✍🏻✍🏻✍🏻✍🏻✍🏻
                </div>
                <div className="meme">
                    12. БЭЙБИ ПУПСЯ МУПСЯ
                </div>
                <div className="meme">
                    13. У МЕНЯ СИСЬКА ЗАЧЕСАЛАСЬ
                </div>
                <div className="mem">
                    14. ПРИВЕТ СЭМПАЙ КУН
                </div>
                <div className="meme">
                    15. Сидят два интеллектуала, играют в красную дверь жёлтую дверь, диалог:
                        <br />-что ты видишь?
                        <br />-желтую дверь
                        <br />-как ты относишься к жёлтой двери?
                        <br />-плохо..😔
                </div>
            </div>
        </div>,
        <div className="associations">
            <h2>Ассоциации</h2>
            <div className="assoc-container">
            <div className="assoc-wrapper">
                <p>Animal:</p>
                <img className='assoc-photo' src="/imgs/as1.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Anime:</p>
                <img className="assoc-photo" src="/imgs/as2.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Song:</p>
                <img className="assoc-photo" src="/imgs/as3.jpeg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Country:</p>
                <img className="assoc-photo" src="/imgs/as4.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>School subject:</p>
                <img className="assoc-photo" src="/imgs/as5.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Emotion:</p>
                <img className="assoc-photo" src="/imgs/as6.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Thing in nature:</p>
                <img className="assoc-photo" src="/imgs/as7.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Movie character:</p>
                <img className="assoc-photo" src="/imgs/as8.webp" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Color:</p>
                <img className="assoc-photo" src="/imgs/as9.png" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Drink:</p>
                <img className="assoc-photo" src="/imgs/as10.png" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Food:</p>
                <img className="assoc-photo" src="/imgs/as11.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Activity:</p>
                <img className="assoc-photo" src="/imgs/as12.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Smell:</p>
                <img className="assoc-photo" src="/imgs/as13.webp" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Furniture:</p>
                <img className="assoc-photo" src="/imgs/as14.png" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Anime chracter:</p>
                <img className="assoc-photo" src="/imgs/as15.jpg" alt="" />
            </div>
            <div className="assoc-wrapper">
                <p>Photo in my gallery:</p>
                <img className="assoc-photo" src="/imgs/as16.jpg" alt="" />
            </div>
            </div>
        </div>,
        <div className="questions">
            <h2 className='q-header'>Пару вопросиков</h2>
        
            <div className="question-wrapper">
            <p>1. Как ты относишься к желтой двери ?</p>
            <textarea
                name="1"
                defaultValue={localStorage.getItem('q1') || ''}
                onBlur={(e) => localStorage.setItem('q1', e.target.value)}
            />
            </div>
        
            <div className="question-wrapper">
            <p>2. Что тебе подарил Шатлай-хуем болтай ?</p>
            <textarea
                name="2"
                defaultValue={localStorage.getItem('q2') || ''}
                onBlur={(e) => localStorage.setItem('q2', e.target.value)}
            />
            </div>
        
            <div className="question-wrapper">
            <p>3. Оцени насколько сильно тебе понравился мой подарок от 1/10 ?</p>
            <textarea
                name="3"
                defaultValue={localStorage.getItem('q3') || ''}
                onBlur={(e) => localStorage.setItem('q3', e.target.value)}
            />
            </div>
        
            <div className="question-wrapper">
            <p>4. Сколько лет вы планируете со мной еще продолжать дружбу ?</p>
            <textarea
                name="4"
                defaultValue={localStorage.getItem('q4') || ''}
                onBlur={(e) => localStorage.setItem('q4', e.target.value)}
            />
            </div>
            <div className="question-wrapper">
            <p>5. Каковы сейчас твои эмоции после увиденного сайта ?</p>
            <textarea
                name="5"
                defaultValue={localStorage.getItem('q5') || ''}
                onBlur={(e) => localStorage.setItem('q5', e.target.value)}
            />
            </div>
            <div className="question-wrapper">
            <p>6. Какой будет ваш подарок мне на др ?</p>
            <textarea
                name="6"
                defaultValue={localStorage.getItem('q6') || ''}
                onBlur={(e) => localStorage.setItem('q6', e.target.value)}
            />
            </div>
            <div className="question-wrapper">
            <p>6. Вы уже поставили себя plenty of напоминаний про моё др ?</p>
            <textarea
                name="6"
                defaultValue={localStorage.getItem('q6') || ''}
                onBlur={(e) => localStorage.setItem('q6', e.target.value)}
            />
            </div>
            <div className="question-wrapper">
            <p>7. Какой твою любимый цвет ?</p>
            <textarea
                name="7"
                defaultValue={localStorage.getItem('q7') || ''}
                onBlur={(e) => localStorage.setItem('q7', e.target.value)}
            />
            </div>
            <div className="question-wrapper">
            <p>8. Какой твой полный адресс ? 😈😈😈😈😈</p>
            <textarea
                name="8"
                defaultValue={localStorage.getItem('q8') || ''}
                onBlur={(e) => localStorage.setItem('q8', e.target.value)}
            />
            </div>
            <p className='finish-text'>Я надеюсь тебе понравился мой подарок, но попрошу еще не включать его на телефоне соей, а то адаптацию я сделала пока только на компе и планшет твой, поэтому о нем и спрашивала, чтобы узнать точные размеры. Я очень стала создавая твой подарок, поэтому я спатки, пока-покаааа и жду ответов на вопросы !!! Я написала так, чтобы они автоматически сохранялись, когд напишешь и кликнешь куда-то в другое место на этой же странице ❤️❤️❤️</p>
      </div>,
        <div className="photos">
            <h2>Совместные фоточки</h2>
            <div className="wrapper-ph">
                <img  className="photo" src="/imgs/1.jpg" alt="" />
                <img  className="photo" src="/imgs/2.jpg" alt="" />
                <img  className="photo" src="/imgs/3.jpg" alt="" />
                <img  className="photo" src="/imgs/4.jpg" alt="" />
                <img  className="photo" src="/imgs/5.jpg" alt="" />
                <img  className="photo" src="/imgs/6.jpg" alt="" />
                <img  className="photo" src="/imgs/7.jpg" alt="" />
                <img  className="photo" src="/imgs/8.jpg" alt="" />
                <img  className="photo" src="/imgs/9.png" alt="" />
                <img  className="photo" src="/imgs/10.jpg" alt="" />
                <img  className="photo" src="/imgs/11.png" alt="" />
            </div>
        </div>,
    ];

    function scrollingPages(pageIndex) {
        setCurrentPage(pageIndex)
    }
    

    useEffect(() => {
        // Запускаем эффект хлопушки при загрузке страницы
        party.confetti(document.body, {
          count: party.variation.range(50, 200), // Количество конфетти
          speed: party.variation.range(100, 1000), // Скорость конфетти
          angle: 90, // Направление (горизонтально)
          spread: 45, // Угол распыления
        });
      }, []);

    return(
        <div>
            <div className="wrapper">
                <button className='side-bar__btn' onClick={() => scrollingPages(0)}>Поздравление</button>
                <button className='side-bar__btn' onClick={() => scrollingPages(1)}>Переписка с Хисоном</button>
                <button className='side-bar__btn' onClick={() => scrollingPages(2)}>Наши мемы</button>
                <button className='side-bar__btn' onClick={() => scrollingPages(3)}>Ассоциации</button>
                <button className='side-bar__btn' onClick={() => scrollingPages(4)}>Пару вопросиков</button>
                <button className='side-bar__btn' onClick={() => scrollingPages(5)}>Фотки с игор</button>
            </div>

           <div className="content-page">
                {pages[currentPage]}
           </div>
        </div>
    )
}
export default SideBar