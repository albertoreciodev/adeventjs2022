// Your code must start with "function".
// Do not put variables outside your function.
// Do not use arrow functions.

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

// Insert this code in the challenge #01
function wrapping(gifts) {
  const GIFTS_LENGTH = gifts.length;
  const WRAPPING_PAPER = "*";

  let giftsElements, giftsElementsLength;
  let newGifts = [];
  let wrappingFront = "**\n*";
  let wrappingRear = "*\n**";
  let wrappingPaperResult;

  for (let giftCounter = 0; giftCounter < GIFTS_LENGTH; giftCounter++) {
    giftsElements = gifts[giftCounter];

    giftsElementsLength = giftsElements.length;

    wrappingPaperResult = WRAPPING_PAPER.repeat(giftsElementsLength);

    giftsElements =
      wrappingPaperResult +
      wrappingFront +
      giftsElements +
      wrappingRear +
      wrappingPaperResult;

    newGifts.push(giftsElements);
  }

  return newGifts;
}

//console.log("======= wrapped =======");
//console.log(wrapped);
