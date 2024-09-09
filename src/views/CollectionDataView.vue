<template>
  <main>
    <div class="b-example-divider"></div>
    <div class="flex-shrink-0 p-3 bg-white scrollable" style="width: 280px">
      <a><span class="fs-5 fw-semibold">选择算法</span></a>
      <ul class="list-unstyled ps-0">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li>
            <a
              href="javascript:void(0);"
              class="link-dark rounded"
              @click="selectForm('ob_measureDiv', '未知')"
              >未知</a
            >
          </li>
        </ul>
        <li class="mb-2">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            数值型
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_numericalDiv', 'duchi')"
                  >duchi</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_numericalDiv', 'pm')"
                  >PM</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_numericalDiv', 'laplace')"
                  >Laplace</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="mb-2">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            类别型
          </button>
          <div class="collapse" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'rr')"
                  >RR</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'sue')"
                  >SUE</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'oue')"
                  >OUE</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'blh')"
                  >BLH</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'olh')"
                  >OLH</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'he')"
                  >HE</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_discreteDiv', 'k-subset')"
                  >k-subset</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="mb-2">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#key-value-collapse"
            aria-expanded="false"
          >
            key-value型
          </button>
          <div class="collapse" id="key-value-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_key_valueDiv', 'privKVM')"
                  >PrivKVM</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_key_valueDiv', 'pckvUE')"
                  >PCKV-UE</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_key_valueDiv', 'pckvRR')"
                  >PCKV-RR</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="mb-2">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#set-collapse"
            aria-expanded="false"
          >
            集合型
          </button>
          <div class="collapse" id="set-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_setDiv', 'dPAPPOR')"
                  >d-PAPPOR</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_setDiv', 'OLHSampling')"
                  >OLH-Sampling</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_setDiv', 'OUESampling')"
                  >OUE-Sampling</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_setDiv', 'privSet')"
                  >PrivSet</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_setDiv', 'wheel')"
                  >Wheel</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="link-dark rounded"
                  @click="selectForm('ab_setDiv', 'ldpMinner')"
                  >LDP-Minner</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
        <router-link class="btn btn-link" to="/publishData"
          >发布数据</router-link
        >
      </ul>
    </div>
    <div class="b-example-divider"></div>
    <div class="flex-grow-1 p-3 bg-light scrollable">
      <form id="ldpForm" @submit.prevent="handleSubmit">
        <!--alg_name  算法名称 -->
        <div v-if="true" id="alg_name" class="mb-2">
          <h1 id="alg_name_title" class="fs-4">{{ data.alg_name.content }}</h1>
          <input
            type="hidden"
            name="alg_name"
            value="ob"
            v-model="data.alg_name.content"
          />
        </div>
        <!--alg_type  算法类别 -->
        <div v-if="false" id="alg_type">
          <input
            type="hidden"
            name="alg_type"
            value="ob"
            id="alg_type"
            v-model="data.alg_type.content"
          />
        </div>
        <!--input_type  输入类型 -->
        <div v-if="data.input_type.show" id="input_type" class="mb-2">
          <label class="form-label text-muted">输入类型:</label>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="input_type"
                value="single_discrete_input"
                v-model="data.input_type.content"
                checked
                id="single_discrete_input"
              />
              单个离散</label
            >
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="input_type"
                v-model="data.input_type.content"
                value="single_continuous_input"
                id="single_continuous"
              />
              单个连续</label
            >
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="input_type"
                v-model="data.input_type.content"
                value="discrete_set_input"
                id="discrete_set"
              />
              离散集合</label
            >
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="input_type"
                v-model="data.input_type.content"
                value="key_value_input"
                id="key_value_input"
              />
              键-值</label
            >
          </div>
        </div>

        <!--discrete_domain  离散输入域 -->
        <div
          v-if="
            data.discrete_domain.show ||
            (data.alg_type.content == 'ob_measureDiv' &&
              data.input_type.content == 'single_discrete_input')
          "
          id="discrete_domain"
          class="mb-2 d-flex align-items-center"
        >
          <label class="form-label mb-2 text-muted" style="white-space: nowrap"
            >离散输入域:</label
          >
          <input
            id="discrete_domain_input"
            name="discrete_domain"
            required="true"
            type="text"
            v-model="data.discrete_domain.content"
            class="form-control ms-2"
            style="flex: 1"
            placeholder="不同值以逗号分隔"
          />
        </div>

        <div
          v-if="
            data.continue_min_domain.show ||
            (data.alg_type.content == 'ob_measureDiv' &&
              data.input_type.content == 'single_continuous_input')
          "
          class="d-flex align-items-center mb-2"
        >
          <div id="continue_min_domain" class="d-flex align-items-center me-3">
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >最小输入值：</label
            >
            <input
              name="continue_min_domain"
              type="number"
              required="true"
              v-model="data.continue_min_domain.content"
              class="form-control ms-2"
              style="width: 120px"
            />
          </div>
          <div id="continue_max_domain" class="d-flex align-items-center">
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >最大输入值：</label
            >
            <input
              name="continue_max_domain"
              type="number"
              required="true"
              :min="data.continue_min_domain.content"
              v-model="data.continue_max_domain.content"
              class="form-control ms-2"
              style="width: 120px"
            />
          </div>
        </div>

        <div
          v-if="
            data.set_size_domain.show ||
            (data.alg_type.content == 'ob_measureDiv' &&
              data.input_type.content == 'discrete_set_input')
          "
          class="d-flex align-items-center mb-2"
        >
          <div id="set_size_domain" class="d-flex align-items-center me-3">
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >输入集合大小：</label
            >
            <input
              name="set_size_domain"
              v-model="data.set_size_domain.content"
              type="number"
              class="form-control ms-2"
              style="width: 120px"
            />
          </div>
          <div id="set_domain" class="d-flex align-items-center">
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >集合输入域：</label
            >
            <input
              name="set_domain"
              v-model="data.set_domain.content"
              type="text"
              class="form-control ms-2"
              style="width: 120px"
            />
          </div>
        </div>

        <div
          v-if="
            data.kv_domain.show ||
            (data.alg_type.content == 'ob_measureDiv' &&
              data.input_type.content == 'key_value_input')
          "
          id="kv_domain"
          class="d-flex align-items-center mb-2"
        >
          <label class="form-label mb-2 text-muted" style="white-space: nowrap"
            >kv 输入域：</label
          >
          <input
            name="kv_domain"
            v-model="data.kv_domain.content"
            type="text"
            required="true"
            class="form-control ms-2"
            style="width: 150px"
          />
        </div>
        <!--output_type  输出类型 -->
        <div v-if="data.output_type.show" id="output_type" class="mb-2">
          <label class="form-label text-muted">输出类型:</label>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="output_type"
                required="true"
                v-model="data.output_type.content"
                value="single_discrete_output"
                checked
                id="single_discrete_output"
              />
              单个离散</label
            >
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="output_type"
                required="true"
                v-model="data.output_type.content"
                value="single_continuous_output"
                id="single_continuous_output"
              />
              单个连续</label
            >
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                required="true"
                name="output_type"
                v-model="data.output_type.content"
                value="discrete_set_output"
                id="discrete_set_output"
              />
              离散集合</label
            >
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label"
              ><input
                class="form-check-input"
                type="radio"
                name="output_type"
                required="true"
                v-model="data.output_type.content"
                value="key_value_output"
                id="key_value_output"
              />
              键-值</label
            >
          </div>
        </div>
        <div id="call_method" class="d-flex align-items-center mb-3">
          <label class="form-label mb-2 text-muted me-3">请选择调用方式:</label>
          <div class="d-flex gap-2">
            <button
              type="button"
              class="btn btx"
              :class="{
                active: this.data.call_method.content === 'code_input',
              }"
              @click="showContent('code_')"
            >
              代码调用
            </button>
            <button
              type="button"
              class="btn btx"
              :class="{ active: this.data.call_method.content === 'exe_input' }"
              @click="showContent('exe_')"
            >
              可执行文件调用
            </button>
            <button
              type="button"
              class="btn btx"
              :class="{ active: this.data.call_method.content === 'api_input' }"
              @click="showContent('api_')"
            >
              远程 api 调用
            </button>
          </div>

          <input type="hidden" name="call_method" value="code_input" />
        </div>
        <!-- code 算法代码 -->
        <div v-show="data.code_file.show" id="code_file" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="code_file_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >算法代码：</label
            >
            <textarea
              id="code_file_input"
              name="code"
              v-model="data.code_file.content"
              type="text"
              class="form-control ms-2"
            ></textarea>
          </div>
        </div>

        <!-- code_init 算法初始化方法 -->
        <div v-if="data.code_init.show" id="code_init" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="code_init_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >算法的初始化调用：</label
            >
            <textarea
              id="code_init_input"
              name="code_init"
              v-model="data.code_init.content"
              class="form-control ms-2"
            ></textarea>
          </div>
        </div>
        <!-- code_encode 算法编码调用方法 -->
        <div v-if="data.code_encode.show" id="code_encode" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >代码命令行参数：<span>隐私预算,输入域,测试输入数量</span></label
            >
          </div>
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >代码输出格式：<span>
                <pre>
                {
                  // 编码值列表
                  "encode_list": [...],
                  // 扰动值列表
                  "perturb_list": [...]
                }</pre
                >
              </span></label
            >
          </div>
        </div>
        <!-- code_perturb 算法扰动调用方法 -->
        <div v-if="data.code_perturb.show" id="code_perturb" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="code_perturb_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >算法扰动调用方式：</label
            >
            <textarea
              id="code_perturb_input"
              name="code_perturb"
              v-model="data.code_perturb.content"
              type="text"
              required="true"
              class="form-control ms-2"
            ></textarea>
          </div>
        </div>
        <!-- code_whole 算法整体方法 -->
        <div v-if="data.code_whole.show" id="code_whole" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >算法运行参数：隐私预算,输入域,测试精度,测试输入数量<span></span>
            </label>
          </div>
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >代码输出格式：<span>
                <pre>
                {
                  // 输出值列表 3 维
                  "output_list": [...]
                }</pre
                >
              </span></label
            >
          </div>
        </div>
        <!-- exe_file 算法可执行文件 -->
        <div v-if="data.exe_file.show" id="exe_file" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="exe_file_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >请上传算法的可执行文件：</label
            >
            <!-- v-model="data.exe_file" -->
            <input
              id="exe_file_input"
              name="exe_file"
              type="file"
              required="true"
              class="form-control ms-2"
              @change="FileUpload"
            />
          </div>
        </div>

        <!-- exe_encode 算法可执行文件编码方式 -->
        <div v-if="data.exe_encode.show" id="exe_encode" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="exe_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >文件运行方式：
              <div>输入参数:隐私预算,输入域,测试输入数量</div></label
            >
          </div>
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >输出格式：<span>
                <pre>
                {
                  // 编码值列表
                  "encode_list": [...],
                  // 扰动值列表
                  "perturb_list": [...]
                }</pre
                >
              </span></label
            >
          </div>
        </div>

        <!-- exe_perturb 算法可执行文件扰动方式 -->
        <div v-if="data.exe_perturb.show" id="exe_perturb" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="exe_perturb_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >扰动运行方式：</label
            >
            <textarea
              id="exe_perturb_input"
              name="exe_perturb"
              v-model="data.exe_perturb.content"
              type="text"
              required="true"
              class="form-control ms-2"
            ></textarea>
          </div>
        </div>

        <!-- exe_whole 算法可执行文件整体方式 -->
        <div v-if="data.exe_whole.show" id="exe_whole" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="exe_whole_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >可执行文件的调用参数：<span
                >隐私预算,输入域,测试精度,测试输入数量</span
              ></label
            >
          </div>
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >代码输出格式：<span>
                <pre>
                {
                  // 输出值列表 3 维
                  "output_list": [...]
                }</pre
                >
              </span></label
            >
          </div>
        </div>

        <!-- api_file 算法调用 api -->
        <div v-if="data.api_file.show" id="api_file" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="api_file_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >算法调用 url：</label
            >
            <textarea
              id="api_file_input"
              name="api_file"
              v-model="data.api_file.content"
              type="text"
              required="true"
              class="form-control ms-2"
            >
            </textarea>
          </div>
        </div>

        <!-- api_encode 算法调用 api 编码 -->
        <div v-if="data.api_encode.show" id="api_encode" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="api_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >编码 url：epsilon=隐私预算&domain=输入域&n=测试输入数量</label
            >
          </div>
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >输出格式json：<span>
                <pre>
                {
                  // 编码值列表
                  "encode_list": [...],
                  // 扰动值列表
                  "perturb_list": [...]
                }</pre
                >
              </span></label
            >
          </div>
        </div>

        <!-- api_perturb 算法调用 api 扰动 -->
        <div v-if="data.api_perturb.show" id="api_perturb" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="api_perturb_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >扰动 url（输入为编码值）：</label
            >
            <textarea
              id="api_perturb_input"
              name="api_perturb"
              v-model="data.api_perturb.content"
              type="text"
              required="true"
              class="form-control ms-2"
            >
            </textarea>
          </div>
        </div>

        <!-- api_whole 算法调用 api 整体 -->
        <div v-if="data.api_whole.show" id="api_whole" class="mb-2">
          <div class="d-flex align-items-center">
            <label
              for="api_whole_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >调用 url（输入为输入域随机值）：<span
                >隐私预算,输入域,测试精度,测试输入数量</span
              ></label
            >
          </div>
          <div class="d-flex align-items-center">
            <label
              for="code_encode_input"
              class="form-label text-muted mb-2"
              style="white-space: nowrap"
              >代码输出格式：<span>
                <pre>
                {
                  // 输出值列表 3 维
                  "output_list": [...]
                }</pre
                >
              </span></label
            >
          </div>
        </div>

        <div class="d-flex align-items-center mb-2">
          <div
            v-if="data.epsilon.show"
            id="epsilon"
            class="d-flex align-items-center me-3"
          >
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >预设隐私预算：</label
            >
            <input
              type="number"
              name="epsilon"
              v-model="data.epsilon.content"
              min="0"
              step="0.1"
              class="form-control ms-2"
              required="true"
              style="width: 120px"
            />
          </div>
          <div
            v-if="data.accuracy.show"
            id="accuracy"
            class="d-flex align-items-center me-3"
          >
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >测试精度 0~1.0</label
            >
            <input
              type="number"
              name="accuracy"
              v-model="data.accuracy.content"
              min="0"
              max="1.0"
              step="0.1"
              class="form-control ms-2"
              required="true"
              style="width: 120px"
            />
          </div>
          <div
            v-if="data.whole_n.show"
            id="whole_n"
            class="d-flex align-items-center"
          >
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >测试输入数量：</label
            >
            <input
              type="number"
              name="whole_n"
              v-model="data.whole_n.content"
              min="0"
              step="1"
              class="form-control ms-2"
              required="true"
              style="width: 120px"
            />
          </div>
        </div>

        <div class="d-flex align-items-center mb-2">
          <div
            v-if="data.once_n.show"
            id="once_n"
            class="d-flex align-items-center"
          >
            <label
              class="form-label mb-2 text-muted"
              style="white-space: nowrap"
              >单个输入运行次数：</label
            >
            <input
              type="number"
              name="once_n"
              v-model="data.once_n.content"
              min="0"
              step="1"
              class="form-control ms-2"
              required="true"
              style="width: 120px"
            />
          </div>
        </div>
        <div class="d-flex align-items-center mb-3">
          <button type="submit" class="btn btn-primary">
            <!-- @click="submitForm('ldpForm', 'ldp_measure')" -->
            Submit
          </button>
        </div>
        <div class="error" id="ldpFormError"></div>
      </form>
    </div>
  </main>
</template>
<script>
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import bootstrap from "bootstrap";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css"; // 可以选择你喜欢的主题
import "codemirror/mode/python/python"; // Python 语言模式
import axios from "axios";
import router from "@/router";
import { mapActions } from "vuex";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      data: {
        input_type: {
          content: "",
          show: true,
        },
        output_type: {
          content: "",
          show: true,
        },
        alg_name: {
          content: "",
          show: true,
        },
        alg_type: {
          content: "",
          show: true,
        },
        call_method: {
          content: "",
          show: true,
        },
        discrete_domain: {
          content: "",
          show: true,
        },
        continue_min_domain: {
          content: "",
          show: true,
        },
        continue_max_domain: {
          content: "",
          show: true,
        },
        set_size_domain: {
          content: "",
          show: true,
        },
        set_domain: {
          content: "",
          show: true,
        },
        kv_domain: {
          content: "",
          show: true,
        },
        code_file: {
          content: "",
          show: true,
        },
        code_init: {
          content: "",
          show: true,
        },
        code_encode: {
          content: "",
          show: true,
        },
        code_perturb: {
          content: "",
          show: true,
        },
        code_whole: {
          content: "",
          show: true,
        },
        exe_file: {
          content: null,
          show: true,
        },
        exe_encode: {
          content: "",
          show: true,
        },
        exe_perturb: {
          content: "",
          show: true,
        },
        exe_whole: {
          content: "",
          show: true,
        },
        api_file: {
          content: "",
          show: true,
        },
        api_encode: {
          content: "",
          show: true,
        },
        api_perturb: {
          content: "",
          show: true,
        },
        api_whole: {
          content: "",
          show: true,
        },
        epsilon: {
          content: "",
          show: true,
        },
        accuracy: {
          content: "",
          show: true,
        },
        once_n: {
          content: "",
          show: true,
        },
        whole_n: {
          content: "",
          show: true,
        },
      },
      formElements: {
        ob_measureDiv: {
          input: new Set([
            "alg_name",
            "alg_type",
            "input_type",
            "output_type",
            "call_method",
            // "discrete_domain",
            "code_file",
            "code_whole",
            "epsilon",
            "accuracy",
            "once_n",
          ]),
          select: "code_",
          code_: ["code_file", "code_whole"],
          exe_: ["exe_file", "exe_whole"],
          api_: ["api_file", "api_whole"],
        },
        ab_discreteDiv: {
          input: new Set([
            "alg_name",
            "alg_type",
            "discrete_domain",
            "call_method",
            "code_file",
            // "code_init",
            "code_encode",
            // "code_perturb",
            "epsilon",
            "whole_n",
          ]),
          select: "code_",
          // code_: ["code_file", "code_init", "code_encode", "code_perturb"],
          // exe_: ["exe_file", "exe_encode", "exe_perturb"],
          // api_: ["api_file", "api_encode", "api_perturb"],
          code_: ["code_file", "code_encode"],
          exe_: ["exe_file", "exe_encode"],
          api_: ["api_file", "api_encode"],
        },
        ab_numericalDiv: {
          input: new Set([
            "call_method",
            "alg_name",
            "alg_type",
            "continue_min_domain",
            "continue_max_domain",
            "code_file",
            // "code_init",
            "code_encode",
            // "code_perturb",
            "epsilon",
            "whole_n",
          ]),
          select: "code_",
          code_: ["code_file", "code_encode"],
          exe_: ["exe_file", "exe_encode"],
          api_: ["api_file", "api_encode"],
        },
        ab_setDiv: {
          input: new Set([
            "input_type",
            "output_type",
            "alg_name",
            "call_method",
            "alg_type",
            "set_size_domain",
            "set_domain",
            "code_file",
            // "code_init",
            "code_encode",
            // "code_perturb",
            "epsilon",
            "whole_n",
          ]),
          select: "code_",
          // code_: ["code_file", "code_init", "code_encode", "code_perturb"],
          // exe_: ["exe_file", "exe_encode", "exe_perturb"],
          // api_: ["api_file", "api_encode", "api_perturb"],
          code_: ["code_file", "code_encode"],
          exe_: ["exe_file", "exe_encode"],
          api_: ["api_file", "api_encode"],
        },
        ab_key_valueDiv: {
          input: new Set([
            "alg_name",
            "call_method",
            "alg_type",
            "kv_domain",
            "code_file",
            // "code_init",
            "code_encode",
            // "code_perturb",
            "epsilon",
            "accuracy",
            "whole_n",
          ]),
          select: "code_",
          // code_: ["code_file", "code_init", "code_encode", "code_perturb"],
          // exe_: ["exe_file", "exe_encode", "exe_perturb"],
          // api_: ["api_file", "api_encode", "api_perturb"],
          code_: ["code_file", "code_encode"],
          exe_: ["exe_file", "exe_encode"],
          api_: ["api_file", "api_encode"],
        },
      },
      now_type: "ob_measureDiv",
      now_input: "code_",
      code1: null,
    };
  },
  methods: {
    FileUpload(event) {
      this.data.exe_file.content = event.target.files[0];
    },

    ...mapActions([
      "setData", // 引用 Vuex actions
    ]),
    // updateData(newData) {
    //   this.setData(newData);
    // },

    async handleSubmit() {
      try {
        // this.data.code_file.content = document.getElementById("code_file_input").value;
        // this.data.code_file.content = document.getElementById("code_file_input").value;
        // console.log(this.data.code_file.content);
        this.data.code_file.content = this.code1.getValue();

        const formData = new FormData();

        for (const key in this.data) {
          formData.append(key, this.data[key].content);
        }

        let response = await axios.post(
          "http://localhost:8000/api/ldp_measure",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // this.$router.replace({ name: "result", params: { result: response.data } });
        this.$router.push({
          name: "result",
          params: { result: response.data.response_data },
        });
        this.setData(response.data.response_data);
        console.log("Form Data:", response.data.response_data);
      } catch (error) {
        console.log(error);
      }
      // 这里可以添加发送数据到服务器的代码
    },
    selectForm(selectDiv, alg) {
      Object.keys(this.data).forEach((key) => {
        this.data[key].show = false;
        this.data[key].show = this.formElements[selectDiv].input.has(key);
      });

      console.log(this.data);

      this.data.alg_name.content = alg;
      this.data.alg_type.content = selectDiv;
      this.showContent("code_");
      this.data.call_method.content = "code_input";
      // this.show_code();
    },
    show_code() {
      this.code1 = CodeMirror.fromTextArea(
        document.getElementById("code_file_input"),
        {
          lineNumbers: true,
          mode: "python",
          theme: "default",
        }
      );
      this.code1.getWrapperElement().style.width = "100%";
    },

    // 选择算法调用方式
    showContent(select) {
      this.formElements[this.data.alg_type.content][
        this.formElements[this.data.alg_type.content].select
      ].forEach((key) => {
        this.data[key].show = false;
      });
      this.formElements[this.data.alg_type.content].select = select;
      this.formElements[this.data.alg_type.content][
        this.formElements[this.data.alg_type.content].select
      ].forEach((key) => {
        this.data[key].show = true;
      });
      this.data.call_method.content = select + "input";
      // this.show_code();
    },

    // 获取表单元素，提交
    submitForm(formId, url) {
      return formId;
    },
  },

  mounted() {
    (function () {
      "use strict";
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    })();
    this.selectForm("ob_measureDiv", "ob_measure");
    this.data.call_method.content = "code_" + "input";
    this.show_code();
    // this.data.discrete_domain.show = true
    // this.data.alg_type.content == "ob_measureDiv";
    this.data.input_type.content = "single_discrete_input";
    // alert(this.data.alg_type.content)
    // alert(this.data.input_type.content)
    // this.alg_type = "ob_measureDiv";
  },
});
</script>

<style scoped>
/* body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
} */

main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.b-example-divider {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border: 0;
}

.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}

.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}

.lh-tight {
  line-height: 1.25;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.hidden {
  display: none !important;
}

.scrollable {
  overflow-y: auto;
  max-height: 100vh;
}
.btx.active {
  color: white; /* 激活状态的文字颜色 */
  background-color: #316cf4; /* 激活状态的背景颜色 */
}
</style>
