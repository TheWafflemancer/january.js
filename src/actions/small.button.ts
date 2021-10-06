import Button from "./button";

class Small extends Button {

  onPress(): void {
    console.log('playing smoll not')
    this.playNote();
  }

  public toString(): string {
    return "Chord";
}
}

const small = new Small();
export default small;