const app = new Vue({
  el: "#app",
  data: {
    newColor: "",
    colors: [],
  },
  computed: {
    styles: function () {
      return { color: this.newColor };
    },
  },
  methods: {
    addColor: function () {
      this.colors.push(this.newColor);
    },
  },
});
