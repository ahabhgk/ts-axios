import { AxiosStatic, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'
import CancelToken from './cancel/CancelToken'
import Cancel, { isCancel } from './cancel/Cancel'

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const ctx = new Axios(config)
  const instance = Axios.prototype.request.bind(ctx)

  extend(instance, ctx)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config))
}

export default axios
