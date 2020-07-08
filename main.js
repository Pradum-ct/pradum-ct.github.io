fetch("https://api.github.com/users/pradum-ct") //fetch default is GET method
	.then(response => response.json()) 
	.then(function(data){
		console.log(data)
		document.getElementById('myName').textContent = 'Name: ' + data['name']
	document.getElementById('myPic').src = data['avatar_url'] 
	/*document.getElementById('myName').textContent = data['name']

		document.getElementById('myBio').textContent = data['bio']
		document.getElementById('myGithubLink').href = data['html_url']*/
	})
		fetch("https://api.github.com/users/Pradum-ct/repos")
		.then(response => response.json())
		.then(function(data){
			//console.log(data)
			var tableBody = document.getElementById('tableBody');
			var statusHTML = '';
			data.forEach(Element => {
		    statusHTML += '<tr>';
		    statusHTML += '<td>' + Element['name'] + '</td>';
		    statusHTML += '<td>' + Element['html_url'] + '</td>';
		    statusHTML += '</tr>';
		});
		tableBody.innerHTML = statusHTML;

})

	