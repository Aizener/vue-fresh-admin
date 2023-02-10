import { ElMessage } from 'element-plus';

export const useMessage = (): {
  success: (message: string) => void,
  warning: (message: string) => void
} => {
  return {
    success: (message: string) => {
      ElMessage.success({ message, type: 'success' });
    },
    warning: (message: string) => {
      ElMessage.warning({ message, type: 'warning' });
    }
  }
}