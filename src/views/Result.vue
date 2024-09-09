<template>
  <div id="container">
    <RouterLink to="/">返回</RouterLink>
    <h1>测试结果</h1>
    <div id="result">
      <pre>===================</pre>
      <pre>{{ params.result }}</pre>
      <pre>===================</pre>
    </div>
    <button id="sendButton" @click="sendJsonToBackend()">获取详细数据</button>
    <div id="result">
      <h3>Inputs:</h3>
      <ul id="inputsList">
        <li v-for="(input, index) in inputs" :key="index">{{ input }}</li>
      </ul>
      <h3>Outputs:</h3>
      <ul id="outputsList">
        <li v-for="(output, index) in outputs" :key="index">{{ output }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from 'vuex';

export default defineComponent({
  name: "ResultView",
  props: {
    result: Object,
  },
  data() {
    return {
      params: {},
      base_url: "http://localhost:8000/api/ldp_result",
      inputs: [],
      outputs: [],
    };
  },
  methods: {
    // getQueryParams() {
    //   window.location.search
    //     .substring(1)
    //     .split("&")
    //     .forEach((param) => {
    //       const [key, value] = param.split("=");
    //       this.params[decodeURIComponent(key)] = decodeURIComponent(value);
    //     });
    // },

    sendJsonToBackend() {
      const data = { id: this.params["id"] }; // 示例数据

      fetch(this.base_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.inputs = data.inputs;
          this.outputs = data.outputs;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  mounted() {
    // this.getQueryParams();
    console.log(result);
    this.params = this.data;
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
    }),
  },
});
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

#container {
  width: 90%;
  max-width: 600px;
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#result {
  text-align: left;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}
</style>
