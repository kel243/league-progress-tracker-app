import React, { useState, useRef } from "react";
import Axios from "axios";

function MatchForm(props) {
  const [result, setResult] = useState("Victory");
  const [champion, setChampion] = useState("Aatrox");
  const [opponent, setOpponent] = useState("Aatrox");
  const [lane, setLane] = useState("Top");
  const [lp, setLp] = useState(0);
  const [promo, setPromo] = useState(true);
  const [notes, setNotes] = useState("");

  const formRef = useRef(null);
  const btnRef = useRef(null);
  const xRef = useRef(null);

  const onClickHandler = () => {
    formRef.current.classList.toggle("invisible");
    btnRef.current.classList.toggle("invisible");
  };

  function handleResultChange(e) {
    setResult(e.target.value);
  }

  function handleChampionChange(e) {
    setChampion(e.target.value);
  }

  function handleOpponentChange(e) {
    setOpponent(e.target.value);
  }

  function handleLaneChange(e) {
    setLane(e.target.value);
  }

  function handleLPChange(e) {
    setLp(e.target.value);
  }

  function handlePromosChange(e) {
    setPromo(e.target.value);
  }

  function handleNotesChange(e) {
    setNotes(e.target.value);
  }

  const championList = () => {
    return (
      <React.Fragment>
        <option value="Aatrox">Aatrox</option>
        <option value="Ahri">Ahri</option>
        <option value="Akali">Akali</option>
        <option value="Alistar">Alistar</option>
        <option value="Amumu">Amumu</option>
        <option value="Anivia">Anivia</option>
        <option value="Annie">Annie</option>
        <option value="Aphelios">Aphelios</option>
        <option value="Ashe">Ashe</option>
        <option value="ASol">Aurelion Sol</option>
        <option value="Azir">Azir</option>
        <option value="Bard">Bard</option>
        <option value="Blitzcrank">Blitzcrank</option>
        <option value="Brand">Brand</option>
        <option value="Braum">Braum</option>
        <option value="Caitlyn">Caitlyn</option>
        <option value="Camille">Camille</option>
        <option value="Cassiopeia">Cassiopeia</option>
        <option value="Chogath">Cho'Gath</option>
        <option value="Corki">Corki</option>
        <option value="Darius">Darius</option>
        <option value="Diana">Diana</option>
        <option value="Draven">Draven</option>
        <option value="DrMundo">Dr.Mundo</option>
        <option value="Ekko">Ekko</option>
        <option value="Evelynn">Evelynn</option>
        <option value="Ezreal">Ezreal</option>
        <option value="Fiddlesticks">Fiddlesticks</option>
        <option value="Fiora">Fiora</option>
        <option value="Fizz">Fizz</option>
        <option value="Galio">Galio</option>
        <option value="Gangplank">Gangplank</option>
        <option value="Garen">Garen</option>
        <option value="Gnar">Gnar</option>
        <option value="Gragas">Gragas</option>
        <option value="Graves">Graves</option>
        <option value="Hecarim">Hecarim</option>
        <option value="Heimerdinger">Heimerdinger</option>
        <option value="Illaoi">Illaoi</option>
        <option value="Irelia">Irelia</option>
        <option value="Ivern">Ivern</option>
        <option value="Janna">Janna</option>
        <option value="JarvanIV">JarvanIV</option>
        <option value="Jax">Jax</option>
        <option value="Jayce">Jayce</option>
        <option value="Jhin">Jhin</option>
        <option value="Jinx">Jinx</option>
        <option value="Kaisa">Kai'Sa</option>
        <option value="Kalista">Kalista</option>
        <option value="Karma">Karma</option>
        <option value="Karthus">Karthus</option>
        <option value="Kassadin">Kassadin</option>
        <option value="Katarina">Katarina</option>
        <option value="Kayle">Kayle</option>
        <option value="Kayn">Kayn</option>
        <option value="Kennen">Kennen</option>
        <option value="Khazix">Kha'Zix</option>
        <option value="Kindred">Kindred</option>
        <option value="Kled">Kled</option>
        <option value="Kogmaw">Kog'Maw</option>
        <option value="Leblanc">Leblanc</option>
        <option value="Leesin">Lee Sin</option>
        <option value="Leona">Leona</option>
        <option value="Lillia">Lillia</option>
        <option value="Lissandra">Lissandra</option>
        <option value="Lucian">Lucian</option>
        <option value="Lulu">Lulu</option>
        <option value="Lux">Lux</option>
        <option value="Malphite">Malphite</option>
        <option value="Malzahar">Malzahar</option>
        <option value="Maokai">Maokai</option>
        <option value="MasterYi">Master Yi</option>
        <option value="MissFortune">Miss Fortune</option>
        <option value="Mordekaiser">Mordekaiser</option>
        <option value="Morgana">Morgana</option>
        <option value="Nami">Nami</option>
        <option value="Nasus">Nasus</option>
        <option value="Nautilus">Nautilus</option>
        <option value="Neeko">Neeko</option>
        <option value="Nidalee">Nidalee</option>
        <option value="Nocturne">Nocturne</option>
        <option value="Nunu">Nunu</option>
        <option value="Olaf">Olaf</option>
        <option value="Orianna">Orianna</option>
        <option value="Pantheon">Pantheon</option>
        <option value="Poppy">Poppy</option>
        <option value="Pyke">Pyke</option>
        <option value="Qiyana">Qiyana</option>
        <option value="Quinn">Quinn</option>
        <option value="Quinn">Quinn</option>
        <option value="Rakan">Rakan</option>
        <option value="Rammus">Rammus</option>
        <option value="Reksai">Rek'Sai</option>
        <option value="Renekton">Renekton</option>
        <option value="Rengar">Rengar</option>
        <option value="Riven">Riven</option>
        <option value="Rumble">Rumble</option>
        <option value="Ryze">Ryze</option>
        <option value="Sejuani">Sejuani</option>
        <option value="Senna">Senna</option>
        <option value="Sett">Sett</option>
        <option value="Shaco">Shaco</option>
        <option value="Shen">Shen</option>
        <option value="Shyvana">Shyvana</option>
        <option value="Singed">Singed</option>
        <option value="Sion">Sion</option>
        <option value="Sivir">Sivir</option>
        <option value="Skarner">Skarner</option>
        <option value="Sona">Sona</option>
        <option value="Soraka">Soraka</option>
        <option value="Swain">Swain</option>
        <option value="Sylas">Sylas</option>
        <option value="Syndra">Syndra</option>
        <option value="Tahmkench">Tahm Kench</option>
        <option value="Taliyah">Taliyah</option>
        <option value="Talon">Talon</option>
        <option value="Taric">Taric</option>
        <option value="Teemo">Teemo</option>
        <option value="Thresh">Thresh</option>
        <option value="Tristana">Tristana</option>
        <option value="Trundle">Trundle</option>
        <option value="Tryndamere">Tryndamere</option>
        <option value="TwistedFate">Twisted Fate</option>
        <option value="Twitch">Twitch</option>
        <option value="Udyr">Udyr</option>
        <option value="Urgot">Urgot</option>
        <option value="Varus">Varus</option>
        <option value="Vayne">Vayne</option>
        <option value="Veigar">Veigar</option>
        <option value="Velkoz">Vel'Koz</option>
        <option value="Vi">Vi</option>
        <option value="Viktor">Viktor</option>
        <option value="Vladimir">Vladimir</option>
        <option value="Volibear">Volibear</option>
        <option value="Warwick">Warwick</option>
        <option value="Wukong">Wukong</option>
        <option value="Xayah">Xayah</option>
        <option value="Xerath">Xerath</option>
        <option value="Xinzhao">Xin Zhao</option>
        <option value="Yasuo">Yasuo</option>
        <option value="Yone">Yone</option>
        <option value="Yorick">Yorick</option>
        <option value="Yuumi">Yuumi</option>
        <option value="Zac">Zac</option>
        <option value="Zed">Zed</option>
        <option value="Ziggs">Ziggs</option>
        <option value="Zilean">Zilean</option>
        <option value="Zoe">Zoe</option>
        <option value="Zyra">Zyra</option>
      </React.Fragment>
    );
  };

  const resetForm = () => {
    setResult("Victory");
    setChampion("Aatrox");
    setOpponent("Aatrox");
    setLane("Top");
    setLp(0);
    setPromo(true);
    setNotes("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("/api/match", {
      id: props.accountId,
      result: result,
      champion: champion,
      opponent: opponent,
      lane: lane,
      lp: lp,
      notes: notes,
      promo: promo,
    }).then((response) => {
      if (response.data.success) {
        formRef.current.classList.toggle("invisible");
        btnRef.current.classList.toggle("invisible");
        resetForm();
        Axios.get(`/api/match/${props.accountId}`).then((response) => {
          if (response.data.success) {
            props.updateMatches();
          }
        });
      } else {
        alert("Failed to get create new match");
      }
    });
  };

  return (
    <div>
      <button
        className="account-add-match"
        onClick={onClickHandler}
        ref={btnRef}
      >
        Add New Match
      </button>

      <div className="account-add-match-box invisible" ref={formRef}>
        <span
          className="account-form-close"
          ref={xRef}
          onClick={onClickHandler}
        >
          x
        </span>
        <form className="account-add-match-form" onSubmit={onSubmitHandler}>
          <label className="account-label" htmlFor="result">
            Result
            <select
              className="account-input"
              value={result}
              name="result"
              id="result"
              onChange={handleResultChange}
            >
              <option value="Victory">Victory</option>
              <option value="Defeat">Defeat</option>
            </select>
          </label>

          <label className="account-label" htmlFor="champion">
            Champion
            <select
              className="account-input"
              value={champion}
              name="champion"
              id="champion"
              onChange={handleChampionChange}
            >
              {championList()}
            </select>
          </label>

          <label className="account-label" htmlFor="opponent">
            Opponent
            <select
              className="account-input"
              name="opponent"
              value={opponent}
              id="opponent"
              onChange={handleOpponentChange}
            >
              {championList()}
            </select>
          </label>

          <label className="account-label" htmlFor="lane">
            Lane
            <select
              className="account-input"
              name="lane"
              value={lane}
              id="lane"
              onChange={handleLaneChange}
            >
              <option value="Top">Top</option>
              <option value="Jungle">Jungle</option>
              <option value="Mid">Mid</option>
              <option value="ADC">ADC</option>
              <option value="Support">Support</option>
            </select>
          </label>

          <label className="account-label" htmlFor="lp">
            LP Change
            <input
              className="account-input"
              type="number"
              name="lp"
              id="lp"
              value={lp}
              onChange={handleLPChange}
            ></input>
          </label>

          <label className="account-label" htmlFor="promo">
            Promos
            <select
              className="account-input"
              name="promo"
              id="promo"
              value={promo}
              onChange={handlePromosChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>
          <div className="account-notes">
            <label
              className="account-label account-label-notes"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
          </div>
          <div style={{ width: "100%" }}>
            <button type="submit" className="account-add-match">
              Create Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MatchForm;
