class Coin
{
    static NewCoin()
    {
        return new Coin([0,0,0,0]);
    }

    constructor(coins)
    {
        this.pp = coins[0];
        this.gp = coins[1];
        this.sp = coins[2];
        this.cp = coins[3];
    }

    ToString()
    {
        return "" + this.pp + "pp " + this.gp + "gp " + this.sp + "sp " + this.cp + "cp";
    }

    Multiply(multBy)
    {
        let toReturn = Coin.NewCoin();
        
        toReturn.pp = this.pp * multBy;
        toReturn.gp = this.gp * multBy;
        toReturn.sp = this.sp * multBy;
        toReturn.cp = this.cp * multBy;

        return toReturn;
    }

    Add(otherCoin)
    {
        let toReturn = Coin.NewCoin();

        toReturn.pp = this.pp + otherCoin.pp;
        toReturn.gp = this.gp + otherCoin.gp;
        toReturn.sp = this.sp + otherCoin.sp;
        toReturn.cp = this.cp + otherCoin.cp;

        return toReturn;
    }
}