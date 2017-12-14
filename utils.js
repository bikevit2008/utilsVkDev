function sleep(ms) {
	ms += new Date().getTime()
	while (new Date() < ms){}
} 
function checkUserInGroup(userId, waitUpdateMs){
	document.getElementById('dev_const_user_id').value = ''
	document.getElementById('dev_const_user_id').value = userId
	document.getElementById('dev_req_run_btn').click()
	sleep(waitUpdateMs)
	return document.getElementsByClassName('dev_result_num')[0].innerHTML
}
function checkUsersInGroup(userIds, waitUpdateMs, waitRequestsMs){
	var result = []
	for(var i = 0; i < userIds.length; i++){
		var userId = userIds[i]
		result[i] = {userId: userId, member: checkUserInGroup(userId)}
		sleep(waitRequestsMs)
    }
    return result
}
