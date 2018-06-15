import React, { Component } from 'react';
import './App.css';
import ChoixImg from "./ChoixImg";
import Resultat from "./Resultat";

class App extends Component {
  constructor(props) {
    super(props);
    this.imgTest = React.createRef;
    this.state = {
      choix: ["rock", "paper", "scissors"],
      joueurMe: "",
      joueurNull: "",
      decideWinner: ""
    }
  }

  choiceAdverse = () => {
    this.setState({ joueurNull: this.state.choix[Math.floor(Math.ramdom() * 3)] })
  }

  click = (event) => {
    this.setState({ joueurNull: this.state.choix[Math.floor(Math.random() * 3)] }, () => {
      console.log("Moi : ", this.state.joueurMe);
      console.log("joueurAdverse : ", this.state.joueurNull);
      this.decideWinner();
    })
  }

  decideWinner = () => {
    //destructuration du state
    const { joueurMe, joueurNull } = this.state;
    //egalité
    if (joueurNull == joueurMe) {
      return this.setState({ decideWinner: "Egalité !" })
    }
    //regle shifumi pour joueurNull
    else if ((joueurNull === "rock" && joueurMe === "scissors") ||
      (joueurNull === "paper" && joueurMe === "rock") ||
      (joueurNull === "scissors" && joueurMe === "paper")
    ) {
      return this.setState({ decideWinner: "Vous avez perdu!" })
    } else //si cas different = player blue win
      return this.setState({ decideWinner: "Vous avez gagné !" })
  }

  returnPhoto = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>SHIFUMI</h1>
        <div className="allImg">
          <img onClick={() => this.setState({ joueurMe: "rock" }, () => this.click())} src="./img/rock.png" alt="" />
          <img onClick={() => this.setState({ joueurMe: "paper" }, () => this.click())} src="./img/paper.png" alt="" />
          <img onClick={() => this.setState({ joueurMe: "scissors" }, () => this.click())} src="./img/scissors.png" alt="" />
        </div>

        <div className="choix">
          <ChoixImg choix={this.state.joueurMe} nom={"Vous"} />
          <ChoixImg choix={this.state.joueurNull} nom={"Adversaire"} />
        </div>

        <div>
          <Resultat resultat={this.state.decideWinner}/>
        </div>
      </div>
    );
  }
}

export default App;
