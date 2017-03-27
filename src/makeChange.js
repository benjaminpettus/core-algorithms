export default function makeChange({price, amountGiven}) {

  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }

  let remainder;

  if( price > amountGiven ){
      console.log("not enough money")
  }

  const difference = amountGiven - price

  change.quarters += parseInt( difference /25 )
  remainder = difference - change.quarters * 25

  change.dimes += parseInt( remainder / 10 )
  remainder = remainder - change.dimes * 10

  change.nickels += parseInt( remainder / 5 );
  remainder = remainder - change.nickels * 5

  change.pennies += remainder

  return change
}
