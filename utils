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
