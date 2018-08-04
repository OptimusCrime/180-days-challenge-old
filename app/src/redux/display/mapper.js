export const mapChallenges = challenges => challenges.map(challenge => ({
  identifier: challenge.identifier,
}));

export const mapCurrentChallenge = challenges => {
  const currentChallenge = challenges.find(challenge => challenge.progress.current);
  return currentChallenge ? currentChallenge.identifier : challenges[0].identifier;
};
