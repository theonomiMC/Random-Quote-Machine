class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteText: "You can observe a lot just by watching.",
      author: "Yogi Berra",
      quoteData: []
    };


    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://type.fit/api/quotes").

      then(response => response.json()).
      then(data => { this.setState({ quoteData: data }); });
  }

  handleClick(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.quoteData.length);
    this.setState({
      quoteText: this.state.quoteData[randomNum].text,
      author: this.state.quoteData[randomNum].author
    });
  }
  render() {
    return (
      React.createElement("div", { className: "card" },
        React.createElement("h1", null, "  Random Quote Machine "),
        React.createElement("div", { className: "card-body", id: "text" },
          React.createElement("blockquote", { class: "blockquote mb-0" },
            React.createElement("i", { class: "fa fa-quote-left" }),
            React.createElement("p", null, this.state.quoteText),

            React.createElement("div", { className: "blockquote-footer", id: "author" },
              React.createElement("cite", { title: "Source Title" }, " ", this.state.author, " ")),
            React.createElement("div", { className: "raw" },
              React.createElement("div", { className: "column" },
                React.createElement("button", {
                  type: "button",
                  className: "btn btn-light",
                  id: "new-quote",
                  onClick: this.handleClick
                }, " New Quote")),


              React.createElement("div", { className: "column" },
                React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_blank" }, React.createElement("i", { class: "fa fa-2x fa-twitter", "aria-hidden": "true" }))))))));








  }
}


ReactDOM.render(React.createElement(App, null), document.getElementById('quote-box'));