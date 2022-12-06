<script setup lang="ts">

</script>

<template>
  <div class="not-found">
    <div class="box">
      <div class="content">
        <p class="title">4</p>
        <div class="light">
          <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
          <div class="mouth"></div>
        </div>
        <p class="title">4</p>
      </div>
      <div class="tips">您访问的页面不见啦o(╥﹏╥)o...</div>
      <router-link class="link" to="/" :replace="true">返回首页</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgb(80, 50, 139), rgb(123, 66, 196), rgb(123, 66, 196));
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100px);
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes light {
    0% {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 80px #f17;
    }
    50% {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 100px #f17;
    }
    100% {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 80px #f17;

    }
  }
  .light {
    width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 50px;
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 100px #f17;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 80px #f17;
    position: relative;
    animation: light 3s infinite linear;
    @keyframes rotateEye {
      0% { transform: rotate(0); }
      50% { transform: rotate(-5deg); }
      100% { transform: rotate(0); }
    }
    .eyes {
      position: absolute;
      left: 40px;
      top: 50px;
      width: 85px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      animation: rotateEye 3s infinite linear;
      transform-origin: 50% 50%;
    }
    .eye {
      width: 30px;
      height: 15px;
      border: 4px solid #5c3191;
      border-radius: 0 0 100px 100px;
      border-top: 0;
      transform: rotate(0);
      &:nth-child(1) {
        left: 30px;
        top: 60px;
      }
      &:nth-child(2) {
        right: 30px;
        top: 60px;
      }
    }
    @keyframes scaleMouth {
      0% {
        border-radius: 50%;
        transform: rotate(15deg);
      }
      50% {
        border-radius: 50% 50% 50% 0;
        transform: rotate(20deg) scale(1.5);
      }
      100% {
        border-radius: 50%;
        transform: rotate(15deg);
      }
    }
    .mouth {
      position: absolute;
      left: 80px;
      bottom: 35px;
      width: 16px;
      height: 16px;
      background-color: #5c3191;
      border-radius: 50%;
      transform: rotate(15deg);
      animation: scaleMouth 3s infinite linear;
    }
  }
  .title {
    color: #fff;
    font-size: 130px;
    letter-spacing: 10px;
    font-family: fantasy;
  }
  .tips {
    color: #fff;
    font-size: 24px;
    margin-top: 50px;
  }
  .link {
    color: #fff;
    font-size: 18px;
    padding: 5px 15px;
    border-radius: 5px;
    border: 2px solid #fff;
    margin-top: 30px;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
}
</style>
