// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './Board.css';
import Room from './room'
import Notebook from '../../components/notebook/Notebook';
// import kitchen from "../assets/img/room-img/kitchen.jpg";
// import ball from "../assets/img/room-img/ballroom.jpg";
// import billiards from "../assets/img/room-img/billiards.jpg";
// import conservatory from "../assets/img/room-img/conservatory.jpg";
// import dining from "../assets/img/room-img/dining.jpg";
// import hall from "../assets/img/room-img/hall.jpg";
// import library from "../assets/img/room-img/library.jpg";
// import lounge from "../assets/img/room-img/lounge.jpg";
// import study from "../assets/img/room-img/study.jpg";
// import center from "../assets/img/room-img/center.jpg";

import backgrnd from "../../assets/img/theme/backdrop.jpg";
import card0 from "../../assets/img/theme/pwr-card-back.png";

import green from "../../assets/img/char-img/green.png";
import mustard from "../../assets/img/char-img/mustard.png";
import peacock from "../../assets/img/char-img/peacock.png";
import plum from "../../assets/img/char-img/plum.png";
import scarlett from "../../assets/img/char-img/scarlett.png";
import white from "../../assets/img/char-img/white.png";

import card1 from "../../assets/img/char-cards/green.png";
import card2 from "../../assets/img/char-cards/mustard.png";
import card3 from "../../assets/img/char-cards/peacock.png";
import card4 from "../../assets/img/char-cards/plum.png";
import card5 from "../../assets/img/char-cards/scarlett.png";
import card6 from "../../assets/img/char-cards/white.png";

import card7 from "../../assets/img/weapon-cards/candlestick.png";
import card8 from "../../assets/img/weapon-cards/dagger.png";
import card9 from "../../assets/img/weapon-cards/pipe.png";
import card10 from "../../assets/img/weapon-cards/revolver.png";
import card11 from "../../assets/img/weapon-cards/rope.png";
import card12 from "../../assets/img/weapon-cards/wrench.png";

import card13 from "../../assets/img/room-cards/ball.png";
import card14 from "../../assets/img/room-cards/billiards.png";
import card15 from "../../assets/img/room-cards/conservatory.png";
import card16 from "../../assets/img/room-cards/dining.png";
import card17 from "../../assets/img/room-cards/hall.png";
import card18 from "../../assets/img/room-cards/kitchen.png";
import card19 from "../../assets/img/room-cards/library.png";
import card20 from "../../assets/img/room-cards/lounge.png";
import card21 from "../../assets/img/room-cards/study.png";

window.testSolve = [1, 7, 13];
window.playerSolve = [-1,-1,-1];
window.playerSolveString = ['','',''];
const cards = [card1, card2, card3, card4, card5, card6, card7,
  card8, card9, card10, card11, card12, card13,
  card14, card15, card16, card17, card18, card19,
  card20, card21];

const charHeadshots = [green, mustard, peacock, plum, scarlett, white];
var loadedChars = ["1","2","3","4","5","6"];



// window.onload = (event) => {
//   window.charTokenColors.splice(Number(window.playerCharacter)-1, 1);
//   console.log(window.charTokenColors);
// };
function Board() {
  const navigate = useNavigate();
  function exitGame(e) {
    navigate('/welcome');
  }
  function cardClick(e) {
    e.currentTarget.style.zIndex = "101";
  }
  function cardEnter(e) {
    e.currentTarget.style.transform = "translateY(-20px)";
  }
  function cardExit(e) {
    e.currentTarget.style.zIndex = "0";
    e.currentTarget.style.transform = "translateY(20px)";
  }
  function brighten() {
    var hallways = document.querySelectorAll('.hallway');
    hallways.forEach(hallway => {
      hallway.style.filter = "brightness(100%)";
    });
    // for (let i = 0; i < hallways.length; i++) {

    // }
    // hallways.style.filter = "brightness(100%)";
  }

  function noAllowDrop(e) {
    brighten();
    e.stopPropagation();
  }
  function allowHallwayDrop(e) {
    if ((e.target.lastElementChild.className === "starting-loc") || (e.target.lastElementChild.className === "hall-num")) {
      e.target.style.filter = "brightness(80%)";
      e.preventDefault();
    }
  }

  function allowCardDrop(e) {
    if (e.target.className === "card-container" || e.target.id === "card-reveal") {
      e.preventDefault();
    }
  }
  function dropCardReveal(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    document.getElementById("drop-preventer").style.display = "none";
  }

  function allowRoomDrop(e) {
    brighten();
    e.preventDefault();
  }
  function dragCard(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  function dropPrevent(e) {
    document.getElementById("drop-preventer").style.display = "unset";
  }
  function dropEnable(e) {
    document.getElementById("drop-preventer").style.display = "none";
  }
  return (
    <main className="wrapper">
      <section className="left-panel">
        <img id="bck" src={backgrnd} alt="Player Panel Background"></img>
        
        <div className="player-card-div">
          <div id="pc-headshot">
            <div id="player-idx" style={{backgroundColor: window.charColor}}>{window.playerCharacter}</div>
            <img id="pc" src={charHeadshots[Number(window.playerCharacter)-1]} alt="You"></img>
          </div>
          {/* <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 3 + "vh" }}>
            <img className="player-card" id="card-1" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div> */}
          {/* <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 15 + "vh" }}>
            <img className="player-card" id="card-2" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div> */}
          {/* <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 27 + "vh" }}>
            <img className="player-card" id="card-3" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div> */}
          <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 27 + "vh" }} onDragOver={allowCardDrop} onDrop={dropCardReveal}>
            <img className="player-card" id="card-1" src={cards[Math.floor(Math.random() * cards.length)]} onMouseDown={dropPrevent} onMouseUp={dropEnable} draggable="true" onDragStart={dragCard} onDragOver={noAllowDrop} alt="Card 1"></img>
          </div>
          <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 39 + "vh" }} onDragOver={allowCardDrop} onDrop={dropCardReveal}>
            <img className="player-card" id="card-2" src={cards[Math.floor(Math.random() * cards.length)]} onMouseDown={dropPrevent} onMouseUp={dropEnable} draggable="true" onDragStart={dragCard} onDragOver={noAllowDrop} alt="Card 2"></img>
          </div>
          <div className="card-container" style={{ top: 51 + "vh" }} onDragOver={allowCardDrop} onDrop={dropCardReveal}>
            <img className="player-card" id="card-3" src={cards[Math.floor(Math.random() * cards.length)]} onMouseDown={dropPrevent} onMouseUp={dropEnable} draggable="true" onDragStart={dragCard} onDragOver={noAllowDrop} alt="Card 3"></img>
          </div>
        </div>
 


        <div className="player-interact-div">
          {/* <button className="player-sugg-acc" id="suggestion-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Suggest</button> */}
          <Notebook />
          {/* <button className="player-sugg-acc" i d="accusation-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Accuse</button> */}
        </div>
      </section>
      <section className="board-div">
        <div className="game-board">
          <div id="drop-preventer"></div>
          <Room classId="room-div" styleId="room-1" roomId="Kitchen" handleDragOver={allowRoomDrop}
            secretPassage={{styleId:"secret-pass-1", text:"To Study", toId:"Study"}} />

          <Room classId="hallway" hallwayId="1" styleId="hall-1" roomId="Hallway1" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-1", handleDragOver:noAllowDrop}}/>
          
          <Room classId="room-div" styleId="room-2" roomId="Ballroom" handleDragOver={allowRoomDrop}/>

          <Room classId="hallway" hallwayId="2" styleId="hall-2" roomId="Hallway2" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-2", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-3" roomId="Conservatory" handleDragOver={allowRoomDrop}/>

          <Room classId="hallway" hallwayId="3" styleId="hall-3" roomId="Hallway3" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-3", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-4" roomId="Billiards" handleDragOver={allowRoomDrop}/>

          <Room classId="hallway" hallwayId="4" styleId="hall-4" roomId="Hallway4" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-4", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-5" roomId="Library" handleDragOver={allowRoomDrop}/>

          <Room classId="hallway" hallwayId="5" styleId="hall-5" roomId="Hallway5" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-5", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-6" roomId="Study" handleDragOver={allowRoomDrop}
            secretPassage={{styleId:"secret-pass-6", text:"To Kitchen", toId:"Kitchen"}} />

          <Room classId="hallway" hallwayId="6" styleId="hall-6" roomId="Hallway6" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-6", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-7" roomId="Hall" handleDragOver={allowRoomDrop}/>

          <Room classId="hallway" hallwayId="7" styleId="hall-7" roomId="Hallway7" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-7", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-8" roomId="Lounge" handleDragOver={allowRoomDrop}/>

          <Room classId="hallway" hallwayId="8" styleId="hall-8" roomId="Hallway8" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-8", handleDragOver:noAllowDrop}}/>

          <Room classId="hallway" hallwayId="9" styleId="hall-9" roomId="Hallway9" handleDragOver={allowHallwayDrop}
            startingLocation={{classId: "loc-9", handleDragOver:noAllowDrop}}/>

          <Room classId="room-div" styleId="room-9" roomId="Dining Room" handleDragOver={allowRoomDrop}/>


          <div className="room-div" id="room-0">
            <div id="solve-deck">
              <img className="card-0" src={card0} alt="Solve Envelope"></img>
              <img className="card-0" src={card0} alt="Solve Envelope"></img>
              <img className="card-0" src={card0} alt="Solve Envelope"></img>
            </div>
          </div>

          <Room classId="hallway" hallwayId="10A" styleId="hall-10A" roomId="Hallway10A" handleDragOver={allowHallwayDrop}/>
          <Room classId="hallway" hallwayId="10B" styleId="hall-10B" roomId="Hallway10B" handleDragOver={allowHallwayDrop}/>
          <Room classId="hallway" hallwayId="11" styleId="hall-11" roomId="Hallway11" handleDragOver={allowHallwayDrop}/>
          <Room classId="hallway" hallwayId="12A" styleId="hall-12A" roomId="Hallway12A" handleDragOver={allowHallwayDrop}/>
          <Room classId="hallway" hallwayId="12B" styleId="hall-12B" roomId="Hallway12B" handleDragOver={allowHallwayDrop}/>
          <Room classId="hallway" hallwayId="12C" styleId="hall-12C" roomId="Hallway12C" handleDragOver={allowHallwayDrop}/>
          <Room classId="hallway" hallwayId="13" styleId="hall-13" roomId="Hallway13" handleDragOver={allowHallwayDrop}/>
        </div>
      </section>
      <section className="right-panel">
        <img id="bck" src={backgrnd} alt="Player Panel Background"></img>
        <div id="card-reveal" onDragOver={allowCardDrop} onDrop={dropCardReveal}></div>
        <div id="opposing-chars">

        </div>
      </section>
      <div id="victory">
        <span id="victory-header">PLAYER {window.userName} WINS!</span>
        <div id="victory-reveal">
          {/* TODO: index cards to strings for alt tags */}
        <img className="victory-cards" src={cards[window.testSolve[0]]} alt="CARD1"></img>
        <img className="victory-cards" src={cards[window.testSolve[1]]} alt="CARD2"></img>
        <img className="victory-cards" src={cards[window.testSolve[2]]} alt="CARD3"></img>
        </div>
        <button id="close-victory" onClick={exitGame}>Exit Game</button>
      </div>
    </main>
  );
}

export default Board;