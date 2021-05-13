Vue.component('poker-game-component', {
  template: `
    <div>
      <div>两个玩家，玩家1，玩家2，每人每轮可以拿任意一行的任意几张扑克，拿最后一张扑克的即为输家</div>
      <div>当前玩家：{{pokerGame.currentPlayer}}</div>
      <div>赢家：{{pokerGame.winner}}</div>
      <table border="1">
        <tr><th>行</th><th>扑克牌数</th><th>操作</th></tr>
        <tr v-for="(pokerRow, pokerIndex) in pokerCounts">
          <td>行{{pokerIndex+1}}</td>
          <td>{{pokerGame.currentPokerCounts[pokerIndex]}}</td>
          <td><button type="button" @click="takeFromPokerUI(pokerIndex)">拿走</button></td>
        </tr>
      </table>
      <button type="button" @click="pokerGame.resetGameData()">重新开局</button>
    </div>
  `,
  props: ['pokerCounts'],
  data: function(){
    return {
      pokerGame:new ObjectPokerGame()
    }
  },
  created() {

  },
  mounted() {},
  methods: {
    takeFromPokerUI: function (pokerIndex) {
      //检查是否游戏结束
      if(this.pokerGame.detectGameOver())
      {
        return;
      }

      var num=prompt("请"+this.pokerGame.currentPlayer+"输入行"+(pokerIndex+1)+"要拿走的数量","1");
      if (num==null || num=="")
      {
        alert("输入为空，请重新操作！");
        return;
      }

      this.pokerGame.takeFromPoker(pokerIndex,Number(num));
    }
  }

})
