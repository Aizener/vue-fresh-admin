<script setup lang="ts">
import { useMainStore } from '@/store/main';
import { useRouter } from 'vue-router';
import { useMessage } from '@/utils';

const mainStore = useMainStore();
const router = useRouter();
const message = useMessage();

const form = $ref([
  { type: 'input', prop: 'username', label: '用户名' },
  { type: 'password', prop: 'password', label: '密码' },
]);
const model = $ref<Record<string, unknown>>({
  username: '',
  password: '',
});
const rules = $ref({
  username: [{ required: true, message: '请输入用户名', trigger: ['blur', 'change'] }],
  password: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }]
});

const handleConfirm = async () => {
  const { username, password } = model;
  if (username === 'test' && password === 'test') {
    await mainStore.login({ username, password });
    router.push('/');
    message.success('登录成功');
  } else if (username === 'admin' && password === 'admin') {
    await mainStore.login({ username, password });
    router.push('/');
    message.success('登录成功');
  } else {
    message.warning('用户名或密码错误');
  }
}
</script>

<template>
  <div class="login">
    <div class="login-box">
      <h2>用户登录</h2>
      <CoForm
        :form="form"
        :model="model"
        :rules="rules"
        :show-cancel-button="false"
        @submit="handleConfirm"
      ></CoForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, rgb(252, 238, 209), rgb(211, 214, 252));
  h2 {
    margin-bottom: 30px;
  }
  &-box {
    width: 400px;
    border-radius: 6px;
    padding: 50px 60px 50px 35px;
    box-shadow: 0 0 15px #ccc;
    background-color: rgba(246, 247, 255, .5);
  }
}
</style>