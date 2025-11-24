//Bài 4
class Player {
  name: string;
  position: string;
  number: number;
  constructor(name, position, number) {
    this.name = name;
    this.position = position;
    this.number = number;
  }}

class Team {
  name: string;
  player: [];
  constructor(name: string, player: []) {
    this.name = name;
    this.player = [];
  }
}