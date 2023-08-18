const apiList = {
    workOrderSaving: '/api/workOrderSaving',//工单保存的接口
    userGetWorkOrderNum: '/api/userGetWorkOrderNum',//获取用户工单数量的接口(进行中、已完成、未开始)
    userGetWorkOrderDetailList: '/api/userGetWorkOrderDetailList',//工单详情列表
    userGetWorkOrderDetail: '/api/userGetWorkOrderDetail',//工单详情
    AdminGetWorkOrderDetailList: '/api/AdminGetWorkOrderDetailList',//查看所有的单据(分页、管理员权限)
    AdminAllowWorkOrder: '/api/AdminAllowWorkOrder',//管理员接受单据
}
export default apiList;