import React from "react";
import CharacterCard from "../CharacterCard";
import { connect } from "react-redux";

class CardList extends React.Component {
  render() {
    const { characters = [] } = this.props;
    return (
      <div>
        <h1>Characters</h1>
        <section className="card-list">
          {characters.map((item) => (
            <CharacterCard character={item} key={Math.random()} />
          ))}
        </section>
      </div>
    );
  }
}

//FAZER O MAP STATE TO PROPS
function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

// CONECTAR O REACT COM REDUX
export default connect(mapStateToProps)(CardList);
