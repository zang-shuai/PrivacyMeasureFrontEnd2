<template>
  <div>
    <form method="post" enctype="multipart/form-data" id="submitDataForm">
      <div class="form-section">
        <div>
          <label for="id_original_data">原始数据:</label>
          <input
            type="file"
            name="original_data"
            accept=".xls, .xlsx, .csv"
            onchange="handleFile(event, 'output1')"
            required
          />
        </div>

        <div>
          <label for="id_after_data">处理后数据:</label>
          <input
            type="file"
            name="after_data"
            accept=".xls, .xlsx, .csv"
            onchange="handleFile(event, 'output2')"
            required
          />
        </div>

        <div>
          <label for="privacy_column">隐私列:</label>
          <input type="text" name="privacy_column" required />
        </div>

        <div>
          <label for="quasi_identifier_column">准标识符列:</label>
          <input type="text" name="quasi_identifier_column" required />
        </div>

        <div>
          <label for="identifier_column">标识符列:</label>
          <input type="text" name="identifier_column" required />
        </div>

        <div>
          <label for="other_column">其他列:</label>
          <input type="text" name="other_column" />
        </div>

        <div>
          <label for="algorithm">隐私算法:</label>
          <select name="algorithm" required>
            <option value="k_anonymity">k-匿名</option>
            <option value="l_diversity">l-多样性</option>
            <option value="t_closeness">t-closeness</option>
            <option value="differential_privacy">差分隐私</option>
          </select>
        </div>
      </div>

      <div id="submitDataFormError" style="color: red; margin-top: 10px"></div>

      <button
        type="button"
        onclick="submitForm('submitDataForm', '/your-backend-endpoint')"
      >
        提交
      </button>
    </form>
    <div class="data-section">
      <div class="data-box" id="output1"></div>
      <div class="data-box" id="output2"></div>
    </div>
    <a href="index.html">本地数据</a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import { mapActions } from 'vuex';
import "codemirror/mode/python/python";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css"; // 可以选择你喜欢的主题
import "codemirror/mode/python/python"; // Python 语言模式
import axios from "axios";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  methods: {
    submitForm(formId, url) {
      const form = document.getElementById(formId);
      const inputs = form.getElementsByTagName("input");
      let allValid = true;
      let errorMessage = "";

      // 清除之前的错误消息
      const errorDiv = document.getElementById(formId + "Error");
      errorDiv.innerHTML = "";

      // 检查所有必填项是否填写
      for (let i = 0; i < inputs.length; i++) {
        if (
          inputs[i].hasAttribute("required") &&
          inputs[i].value.trim() === ""
        ) {
          allValid = false;
          inputs[i].style.borderColor = "red"; // 给未填写的输入框添加红色边框
          errorMessage += `请输入${inputs[i].name}<br>`;
        } else {
          inputs[i].style.borderColor = ""; // 恢复正常边框
        }
      }

      if (!allValid) {
        errorDiv.innerHTML = errorMessage;
        return;
      }

      // 获取表单数据并生成 URL 参数
      const formData = new FormData(form);
      console.log(formData);

      // 发送 POST 请求
      fetch("http://localhost:8000/api/" + url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          const params = new URLSearchParams(data).toString();
          window.location.href = `publishDataResult.html?${params}`;
        })
        .catch((error) => {
          console.error("Error:", error);
          errorDiv.innerHTML = "表单提交失败，请重试";
        });
    },
    handleFile(e, str) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        let data = new Uint8Array(event.target.result);
        let workbook = XLSX.read(data, { type: "array" });
        let firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        let jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        const rowsPerPage = 10;
        let currentPage = 1;
        let totalPages = Math.ceil(jsonData.length / rowsPerPage);

        function displayPage(page) {
          let table = document.createElement("table");
          let startRow = (page - 1) * rowsPerPage;
          let endRow = Math.min(startRow + rowsPerPage, jsonData.length);

          for (let i = startRow; i < endRow; i++) {
            let row = jsonData[i];
            let tr = document.createElement("tr");
            row.forEach(function (cell) {
              let td = document.createElement("td");
              td.textContent = cell;
              tr.appendChild(td);
            });
            table.appendChild(tr);
          }

          let outputDiv = document.getElementById(str);
          outputDiv.innerHTML = ""; // 清空之前的内容
          outputDiv.appendChild(table);

          // 创建分页控件
          let pagination = document.createElement("div");
          pagination.className = "pagination";

          function createPageButton(i, label = i) {
            let button = document.createElement("button");
            button.textContent = label;
            button.addEventListener("click", () => {
              currentPage = i;
              displayPage(currentPage);
            });
            return button;
          }

          pagination.appendChild(createPageButton(1)); // 第一页

          if (currentPage > 5) {
            pagination.appendChild(document.createTextNode(" ... ")); // 省略号
          }

          let startPage = Math.max(2, currentPage - 2);
          let endPage = Math.min(totalPages - 1, currentPage + 2);

          for (let i = startPage; i <= endPage; i++) {
            pagination.appendChild(createPageButton(i));
          }

          if (currentPage < totalPages - 4) {
            pagination.appendChild(document.createTextNode(" ... ")); // 省略号
          }

          if (totalPages > 1) {
            pagination.appendChild(createPageButton(totalPages)); // 最后一页
          }

          outputDiv.appendChild(pagination);
        }

        displayPage(currentPage);
      };
      reader.readAsArrayBuffer(file);
    },
  },
});
</script>

<style scoped>
/* 基础样式设置 */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f4f8;
  color: #333;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  color: #007bff;
}

form {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
}

input[type="text"],
input[type="file"] {
  width: calc(100% - 20px);
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* 布局样式 */
.form-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-section div {
  flex: 1 1 48%;
  margin-top: 10px;
}

.data-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.data-box {
  position: relative;
  border: 1px solid #1a1d20;
  border-radius: 8px;
  width: 48%;
  height: 500px;
  overflow: auto;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.pagination {
  position: absolute;
  bottom: 0; /* 固定在容器底部 */
  left: 0;
  width: 100%; /* 让分页按钮占据整个容器宽度 */
  text-align: center;
  padding: 10px 0;
  background-color: #f0f4f8;
  border-top: 1px solid #ddd; /* 分割线，提升视觉效果 */
}

.data-box table {
  width: 100%;
  border-collapse: collapse;
}

.data-box table,
.data-box th,
.data-box td {
  border: 1px solid #ccc;
}

.data-box th,
.data-box td {
  padding: 8px;
  text-align: left;
}

.data-box tr:nth-child(even) {
  background-color: #f9f9f9;
}

.data-box .pagination {
  margin-top: 10px;
  text-align: center;
}

.pagination button {
  margin: 2px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button:hover {
  background-color: #0056b3;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-section div {
    flex: 1 1 100%;
  }

  .data-box {
    width: 100%;
    margin-top: 20px;
  }

  .pagination {
    position: relative;
    bottom: auto;
    right: auto;
    width: auto;
  }
}
</style>
