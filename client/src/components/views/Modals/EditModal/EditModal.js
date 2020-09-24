import React, { useState } from "react";
import Axios from "axios";
import "./EditModal.css";
import "../DeleteConfirm/DeleteConfirm.css";
import "../../AccountPage/AccountPage.css";

function EditModal(props) {
  const [result, setResult] = useState(props.result);
  const [champion, setChampion] = useState(props.champion);
  const [opponent, setOpponent] = useState(props.opponent);
  const [lane, setLane] = useState(props.lane);
  const [lp, setLp] = useState(props.lp);
  const [promo, setPromo] = useState(props.promo);
  const [notes, setNotes] = useState(props.notes);

  const [name, setName] = useState("");

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

  const onClickEditMatchHandler = () => {
    Axios.patch(`/api/match/${props.matchId}`, {
      result: result,
      champion: champion,
      opponent: opponent,
      lane: lane,
      lp: lp,
      notes: notes,
      promo: promo,
    }).then((response) => {
      if (response.data.success) {
        props.updateMatches();
        props.modalRef.current.style.display = "none";
      }
    });
  };

  const onClickEditAccHandler = () => {
    Axios.patch(`/api/account/${props.accountId}`, {
      name: name,
    }).then((response) => {
      if (response.data.success) {
        window.location.reload();
      }
    });
  };

  const onClickCancelHandler = () => {
    props.modalRef.current.style.display = "none";
  };

  const onChangeAccHandler = (e) => {
    setName(e.target.value);
  };

  function onResultChangeHandler(e) {
    setResult(e.target.value);
  }

  function onChampionChangeHandler(e) {
    setChampion(e.target.value);
  }

  function onOpponentChangeHandler(e) {
    setOpponent(e.target.value);
  }

  function onLaneChangeHandler(e) {
    setLane(e.target.value);
  }

  function onLPChangeHandler(e) {
    setLp(e.target.value);
  }

  function onPromosChangeHandler(e) {
    setPromo(e.target.value);
  }

  function onNotesChangeHandler(e) {
    setNotes(e.target.value);
  }

  const content = () => {
    if (props.mode === "account") {
      return (
        <div>
          <h2 className="modal-heading">Edit Account Name</h2>
          <div>
            <input
              className="modal-edit-name-input"
              name="name"
              value={name}
              onChange={onChangeAccHandler}
            ></input>
          </div>
          <div className="modal-btn-box">
            <button
              className="modal-btn modal-btn-cancel"
              onClick={onClickEditAccHandler}
            >
              Confirm
            </button>
            <button
              className="modal-btn modal-btn-cancel"
              onClick={onClickCancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="modal-heading">Edit Match</h2>
          <div className="modal-edit-match">
            <label className="account-label" htmlFor="result-edit">
              Result
              <select
                className="account-input modal-input"
                value={result}
                name="result-edit"
                id="result-edit"
                onChange={onResultChangeHandler}
              >
                <option value="Victory">Victory</option>
                <option value="Defeat">Defeat</option>
              </select>
            </label>

            <label className="account-label" htmlFor="champion-edit">
              Champion
              <select
                className="account-input modal-input"
                value={champion}
                name="champion-edit"
                id="champion-edit"
                onChange={onChampionChangeHandler}
              >
                {championList()}
              </select>
            </label>

            <label className="account-label" htmlFor="opponent-edit">
              Opponent
              <select
                className="account-input modal-input"
                name="opponent-edit"
                value={opponent}
                id="opponent-edit"
                onChange={onOpponentChangeHandler}
              >
                {championList()}
              </select>
            </label>

            <label className="account-label" htmlFor="lane-edit">
              Lane
              <select
                className="account-input modal-input"
                name="lane-edit"
                value={lane}
                id="lane-edit"
                onChange={onLaneChangeHandler}
              >
                <option value="Top">Top</option>
                <option value="Jungle">Jungle</option>
                <option value="Mid">Mid</option>
                <option value="ADC">ADC</option>
                <option value="Support">Support</option>
              </select>
            </label>

            <label className="account-label" htmlFor="lp-edit">
              LP Change
              <input
                className="account-input modal-input"
                type="number"
                name="lp-edit"
                id="lp-edit"
                value={lp}
                onChange={onLPChangeHandler}
              ></input>
            </label>

            <label className="account-label" htmlFor="promo-edit">
              Promos
              <select
                className="account-input modal-input"
                name="promo-edit"
                id="promo-edit"
                value={promo}
                onChange={onPromosChangeHandler}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </label>
            <div className="account-notes">
              <label
                className="account-label account-label-notes"
                htmlFor="notes-edit"
              >
                Notes
              </label>
              <textarea
                name="notes-edit"
                id="notes-edit"
                value={notes}
                onChange={onNotesChangeHandler}
              ></textarea>
            </div>
          </div>
          <div className="modal-btn-box">
            <button
              className="modal-btn modal-btn-cancel"
              onClick={onClickEditMatchHandler}
            >
              Confirm
            </button>
            <button
              className="modal-btn modal-btn-cancel"
              onClick={onClickCancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-box">{content()}</div>
    </div>
  );
}

export default EditModal;
