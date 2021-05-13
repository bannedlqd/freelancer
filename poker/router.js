const PokerGameComponent = {
  template: `<poker-game-component :pokerCounts="[3,5,7]"></poker-game-component>`,
}
const routes=
[
  {
    path:'/',
    component:PokerGameComponent,
    name:'pokerGameComponent',
  }
]
const router = new VueRouter({
  routes
})
