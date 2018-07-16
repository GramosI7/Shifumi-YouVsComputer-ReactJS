import React, { Component } from 'react';
import './App.css';
import ChoixImg from "./ChoixImg";
import Resultat from "./Resultat";
import AllChoix from "./AllChoix";

class App extends Component {
  constructor(props) {
    super(props);
    this.imgTest = React.createRef;
    this.state = {
      choix: ["rock", "paper", "scissors"],
      joueurMe: "",
      joueurNull: "",
      decideWinner: "",
     counterMe : 0,
     counterNull : 0
    }
  }

  choiceAdverse = () => {
    this.setState({ joueurNull: this.state.choix[Math.floor(Math.random() * 3)] },() => {
      this.decideWinner();
      // console.log("adverse :", this.state.joueurNull)
    })
  }

  click = (event) => {
    
    this.setState({joueurMe : event.currentTarget.name},() => {
      // console.log("Moi : ",this.state.joueurMe);
      
      this.choiceAdverse();
     
    })
    // this.setState({ joueurNull: this.state.choix[Math.floor(Math.random() * 3)] }, () => {
    //   console.log("Moi : ", this.state.joueurMe);
    //   console.log("joueurAdverse : ", this.state.joueurNull);
    // })
  }

  decideWinner = () => {
    //destructuration du state
    const { joueurMe, joueurNull } = this.state;
    //egalité
    if (joueurMe === joueurNull) {
      return this.setState({ decideWinner: "Egalité !" })
    }
    //regle shifumi pour joueurNull
    else if ((joueurNull === "rock" && joueurMe === "scissors") ||
      (joueurNull === "paper" && joueurMe === "rock") ||
      (joueurNull === "scissors" && joueurMe === "paper")
    ) {
      return this.setState({ decideWinner: "Vous avez perdu !" },() => {
        this.setState({counterNull : this.state.counterNull +1})
      });

    } else //si cas different = player blue win
      return this.setState({ decideWinner: "Vous avez gagné !"},() => {
        this.setState({counterMe : this.state.counterMe +1})
      });
  }



  render() {
    return (
      <div className="App">
        <h1>SHIFUMI</h1>
        <div className="allImg">
        {this.state.choix.map((element, index) => {
          return <AllChoix  function={this.click} key={index} img={element}/>
        })}
        </div>
       

        <div className="choix">
          <ChoixImg counter={this.state.counterMe} choix={this.state.joueurMe} nom={"Vous"} />
          <ChoixImg counter={this.state.counterNull} choix={this.state.joueurNull} nom={"Adversaire"} />
        </div>

        <div>
          <Resultat resultat={this.state.decideWinner}/>
        </div>
      </div>
    );
  }
}

export default App;
 