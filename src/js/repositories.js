async function loadGithubProjects() {
  const res = await fetch('https://api.github.com/users/liinarodriguez/repos?type=owner&sort=updated&per_page=15');
  const data = await res.json();

  const container = document.getElementById('repos-container');

  data.forEach(repo => {
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repo');
 
    repoDiv.innerHTML = `
      <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
      <p>${repo.description || 'No description available'}</p>
      <p>⭐ ${repo.stargazers_count} | ${repo.topics || 'Unknown language'}</p>
    `;

    container.appendChild(repoDiv);
  });
}

window.onload = loadGithubProjects;