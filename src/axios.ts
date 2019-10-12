import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const ctx = new Axios()
  const instance = Axios.prototype.request.bind(ctx)

  extend(instance, ctx)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
