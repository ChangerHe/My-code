<template>
  <div>
      <div class="app-header">
          <div class="app-head-inner">
              <img src="../assets/logo.png" alt="">
          </div>
          <div class="head-nav">
              <ul class="nav-list">
                  <li>登陆</li>
                  <li class="nav-pile"></li>
                  <li>注册</li>
                  <li class="nav-pile"></li>
                  <li>关于</li>
              </ul>
          </div>
      </div>
      <div class="app-content">
          <!-- 将访问过的组件进行缓存 -->
          <keep-alive>
            <router-view></router-view>

          </keep-alive>
      </div>
      <div class="app-footer">
          <p>&copy; 2017 ChangerHe MIT</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
.app-header {
    height: 80px;
    background: #333;
}

.app-head-inner {
    float: left;
    width: 80px;
    height: 80px;
}

.app-head-inner img {
    width: 60px;
    height: 60px;
    margin: 10px 0 0 40px; 
}

.head-nav {
    float: right;
    color: #fff;
}

.head-nav li {
    float: left;
    line-height: 80px;
    font-size: 24px;
    padding: 0 10px;
    cursor: pointer;
}

.app-footer {
    height: 89px;
    margin-top: 40px;
    line-height: 80px;
    background: #ccc;
    text-align: center;
}
</style>
