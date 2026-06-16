import React from "react";

const ChatIntro = () => {
  return (
    <div className="flex flex-col gap-5 max-w-2xl text-center mx-auto">
      <div className="flex justify-center items-center gap-5 text-sm">
        <div className="h-[1.5px] w-9 bg-gray-500" />

        <p className="uppercase text-xs tracking-widest">
          A portfolio, in conversation
        </p>

        <div className="h-[1px] w-9 bg-gray-500" />
      </div>
      <h1 className="text-7xl tracking-wide font-imbue">
        Hi, I'm Kyle.
        <br />
        Ask me anything.
      </h1>

      <p className="text-lg">
        This chat is trained on my work, projects, and how I think about
        building product. Use it to get to know me faster than a résumé — then
        reach out if we're a fit.
      </p>
    </div>
  );
};

export default ChatIntro;

const Watchlist = ({ tickers }) => {
  const [prices, setPrices] = useState({});
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      tickers.forEach((ticker) => {
        fetchPrice(ticker).then((price) => {
          setPrices({ ...prices, [ticker]: price });
        });
      });
    }, 1000);
  }, [tickers]);

  const toggleSelect = (ticker) => {
    if (selected.includes(ticker)) {
      selected.splice(selected.indexOf(ticker), 1);
      setSelected(selected);
    } else {
      setSelected([...selected, ticker]);
    }
  };

  const totalSelected = selected.length;

  return (
    <div>
      <p>
        Watching {tickers.length} tickers · {totalSelected} selected
      </p>
      {tickers.map((ticker) => (
        <div onClick={() => toggleSelect(ticker)}>
          <span>{ticker}</span>
          <span>{prices[ticker]}</span>
        </div>
      ))}
    </div>
  );
};
