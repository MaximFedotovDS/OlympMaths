// For this demo, we are using the UMD build of react-router-dom
const {
  HashRouter,
  Switch,
  Route,
  Link
} = ReactRouterDOM

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Федотов Максим 191-363", position: "Ведение проекта, организация и контроль процессов, коммуникации с заказчиками, участие в олимпиадах" },
    { number: 2, name: "Хромых Алена 191-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" },
    { number: 3, name: "Вербова Мария 201-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" },
    { number: 4, name: "Умерзакова Диана 191-331", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" },
    { number: 5, name: "Безменова Александра 201-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" },
    { number: 6, name: "Мадурова Мария 191-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" },
    { number: 7, name: "Оруджов Андрей 191-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" },
    { number: 8, name: "Рягузов Иван 191-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Не найдено</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Что делал: {player.position}</h2>
      <Link to='/roster'>Назад</Link>
    </div>
  )
}

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

const Schedule = () => (
  <div>
    <ul>
      <li>Набрали команду из почти 50 человек;</li>
      <li>Изучено море теории решения олимпиадных задач;</li>
      <li>Решено множество задач, включая участие в командной студенческой олимпиаде, а также в "Я - профессионал"</li>
      <li>Разработано методическое пособие по высшей математике для будущих студентов.</li>
    </ul>
  </div>
)

const Home = () => (
  <div>
    <h1>Олимпиадная школа по высшей математике!</h1>
    <h3>Добро пожаловать на сайт, посвященный проекту олимпиадной школы по высшей математике для студентов Московского Политеха!</h3>
  </div>
)

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/roster'>Участники</Link></li>
        <li><Link to='/schedule'>Что сделано?</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
