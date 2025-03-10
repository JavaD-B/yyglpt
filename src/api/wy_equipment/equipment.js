import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/wy_equipment/equipment/page',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}

export const getDetail = (id) => {
  return request({
    url: '/api/wy_equipment/equipment/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/wy_equipment/equipment/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/wy_equipment/equipment/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/wy_equipment/equipment/submit',
    method: 'post',
    data: row
  })
}

export const jhsb = (row) => {
  return request({
    url: '/api/wy_equipment/equipment/perfect/info',
    method: 'post',
    data: row
  })
}

export const cxjhsb = (row) => {
  return request({
    url: '/api/wy_equipment/equipment/reactivate/info',
    method: 'post',
    data: row
  })
}

