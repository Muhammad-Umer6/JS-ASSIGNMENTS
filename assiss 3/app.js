       
       async function fetchUser() {  
            username = document.getElementById('username').value.trim();
            const userInfo = document.getElementById('user-info');
            const error = document.getElementById('error');
            
            // Clear previous results
            userInfo.style.display = 'none';
            error.textContent = '';
            
            if (!username) {
                error.textContent = 'Please enter a username';
                return;
            }
            
            try {
                // Fetch user data from GitHub API
                const response = await fetch(`https://api.github.com/users/${username}`);
                
                if (!response.ok) {
                    throw new Error('User not found');
                }
                
                const user = await response.json();
                
                // Display the user info
                document.getElementById('avatar').src = user.avatar_url;
                document.getElementById('name').textContent = user.name || user.login;
                document.getElementById('login').textContent = user.login;
                document.getElementById('followers').textContent = user.followers;
                document.getElementById('following').textContent = user.following;
                document.getElementById('repos').textContent = user.public_repos;
                
                userInfo.style.display = 'block';
                
            } catch (err) {
                error.textContent = err.message;
            }
        }
