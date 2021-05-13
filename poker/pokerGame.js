function ObjectPokerGame()
{
	this.defaultPokerCounts=[3,5,7];

	this.player1="玩家1";
	this.player2="玩家2";

	this.currentPokerCounts=Array.from(this.defaultPokerCounts);

	this.currentPlayer=this.player1;
	this.winner="";

	this.resetGameData=resetGameData;
	function resetGameData()
	{
		this.currentPokerCounts=Array.from(this.defaultPokerCounts);

		this.currentPlayer=this.player1;
		this.winner="";
	}

	this.nextPlayer=nextPlayer;
	function nextPlayer()
	{
		if(this.currentPlayer===this.player1)
		{
			this.currentPlayer=this.player2;
		}
		else
		{
			this.currentPlayer=this.player1;
		}
	}

	//当前玩家完成动作，状态转到下一个玩家时检查游戏是否结束
	this.detectGameOver=detectGameOver;
	function detectGameOver()
	{

		if(this.currentPokerCounts.every((pokerCount)=>pokerCount===0))
		{
			this.winner=this.currentPlayer
			alert("游戏结束，获胜者为："+this.winner);

			return true;
		}

		return false;
	}

	this.takeFromPoker=takeFromPoker;
	function takeFromPoker(pokerIndex,num)
	{
		//检查是否游戏结束
		if(this.detectGameOver())
		{
			return;
		}

		if(this.currentPokerCounts[pokerIndex]===0)
		{
			alert("本行已经拿完，请从另一行拿");
			return;
		}

		if(num<=0)
		{
			alert("至少要拿一张或以上");
			return;
		}

		if(num>this.currentPokerCounts[pokerIndex])
		{
			alert("拿不了那么多，最多只能拿"+this.currentPokerCounts[pokerIndex]);
			return;
		}

		this.currentPokerCounts[pokerIndex]=this.currentPokerCounts[pokerIndex]-num;

		this.nextPlayer();
		//检查是否游戏结束
		this.detectGameOver();
	}
}
