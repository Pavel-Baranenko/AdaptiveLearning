import { $authHost, $host } from "@/utils/http";

export const registration = async (email, password, type = 'student') => {
  const { data } = await $host.post('/user/registration', { email, password, role: 'USER', type })
  localStorage.setItem('token', data.token)
  return data
}

export const login = async (email, password) => {
  const { data } = await $host.post('/user/login', { email, password })
  localStorage.setItem('token', data.token)
  return data
}

export const update = async (user) => {
  const { data } = await $authHost.put('/user/', user)
  return data
}

export const check = async () => {
  const { data } = await $authHost.get('/user/auth')
  localStorage.setItem('token', data.token)
  return data
}
