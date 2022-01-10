// For this demo, we are using the UMD build of react-router-dom
const {
  HashRouter,
  Switch,
  Route,
  Link } =
ReactRouterDOM;

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
  { number: 8, name: "Рягузов Иван 191-363", position: "Участие в олимпиаде, разработка методического пособия, разработка документации" }],

  all: function () {return this.players;},
  get: function (id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  } };


// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("ul", null,

PlayerAPI.all().map((p) => /*#__PURE__*/
React.createElement("li", { key: p.number }, /*#__PURE__*/
React.createElement(Link, { to: `/roster/${p.number}` }, p.name)))));







// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = props => {
  const player = PlayerAPI.get(
  parseInt(props.match.params.number, 10));

  if (!player) {
    return /*#__PURE__*/React.createElement("div", null, "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
  }
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, player.name, " (#", player.number, ")"), /*#__PURE__*/
    React.createElement("h2", null, "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u043B: ", player.position), /*#__PURE__*/
    React.createElement(Link, { to: "/roster" }, "\u041D\u0430\u0437\u0430\u0434")));


};

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => /*#__PURE__*/
React.createElement(Switch, null, /*#__PURE__*/
React.createElement(Route, { exact: true, path: "/roster", component: FullRoster }), /*#__PURE__*/
React.createElement(Route, { path: "/roster/:number", component: Player }));



const Schedule = () => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("ul", null, /*#__PURE__*/
React.createElement("li", null, "\u041D\u0430\u0431\u0440\u0430\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438\u0437 \u043F\u043E\u0447\u0442\u0438 50 \u0447\u0435\u043B\u043E\u0432\u0435\u043A;"), /*#__PURE__*/
React.createElement("li", null, "\u0418\u0437\u0443\u0447\u0435\u043D\u043E \u043C\u043E\u0440\u0435 \u0442\u0435\u043E\u0440\u0438\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447;"), /*#__PURE__*/
React.createElement("li", null, "\u0420\u0435\u0448\u0435\u043D\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0434\u0430\u0447, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0441\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \"\u042F - \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\""), /*#__PURE__*/
React.createElement("li", null, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u043E\u0441\u043E\u0431\u0438\u0435 \u043F\u043E \u0432\u044B\u0441\u0448\u0435\u0439 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435 \u0434\u043B\u044F \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432.")));




const Home = () => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h1", null, "\u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \u043F\u043E \u0432\u044B\u0441\u0448\u0435\u0439 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435!"), /*#__PURE__*/
React.createElement("h3", null, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u043D\u043E\u0439 \u0448\u043A\u043E\u043B\u044B \u043F\u043E \u0432\u044B\u0441\u0448\u0435\u0439 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435 \u0434\u043B\u044F \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0430!"));



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => /*#__PURE__*/
React.createElement("main", null, /*#__PURE__*/
React.createElement(Switch, null, /*#__PURE__*/
React.createElement(Route, { exact: true, path: "/", component: Home }), /*#__PURE__*/
React.createElement(Route, { path: "/roster", component: Roster }), /*#__PURE__*/
React.createElement(Route, { path: "/schedule", component: Schedule })));




// The Header creates links that can be used to navigate
// between routes.
const Header = () => /*#__PURE__*/
React.createElement("header", null, /*#__PURE__*/
React.createElement("nav", null, /*#__PURE__*/
React.createElement("ul", null, /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/roster" }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")), /*#__PURE__*/
React.createElement("li", null, /*#__PURE__*/React.createElement(Link, { to: "/schedule" }, "\u0427\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043D\u043E?")))));





const App = () => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Header, null), /*#__PURE__*/
React.createElement(Main, null));



// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render( /*#__PURE__*/
React.createElement(HashRouter, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));