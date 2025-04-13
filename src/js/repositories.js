async function loadGithubProjects() {
  const res = await fetch('https://api.github.com/users/liinarodriguez/repos?type=owner&sort=updated&per_page=15');
  const data = await res.json();

  const container = document.getElementById('repos-container');

  data.forEach(repo => {
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repo');
 
    repoDiv.innerHTML = `
    <div class="project-header">
      <h3> ${repo.name} </h3>
      <a href=${repo.html_url} target="_blank" title="GitHub">
        <img src="assets/icons/github.svg" alt="GitHub" class="icon">
      </a>
    </div>
      <p class="project-description">${repo.description || 'No description'}</p>
      <p class="project-stack">  ${repo.topics || ''}</p>
    `;

    container.appendChild(repoDiv);
  });
}

window.onload = loadGithubProjects;