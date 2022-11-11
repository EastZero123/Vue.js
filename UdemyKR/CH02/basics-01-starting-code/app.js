const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "뷰를 배워보자",
      courseGoalB: "뷰를 숙달하자",
      vueLink: "https://naver.com",
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    },
  },
})

app.mount("#user-goal")
