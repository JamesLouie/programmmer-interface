class I implements TeamPlayer {
  focusOnTeamAchievements() {
    will("value team wins over personal wins")
    will("help team members achieve wins")
    will("look for opportunities that my team will win")
  }
  provideTeamFeedback() {
    will("will provide feedback on how team can improve")
  }
  assumePositiveIntent() {
    will("assume that my team has best interest in me")
    will("provide positive intent back to my team members")
  }
}

const will = (saying) => console.log(`I will ${saying}`);

module.exports = I;