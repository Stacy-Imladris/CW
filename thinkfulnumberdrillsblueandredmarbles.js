const guessBlue = (blueStart, redStart, bluePulled, redPulled) => (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled))