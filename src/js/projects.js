const proyectos = [
  // {
  //   'name': 'Agrolog',
  //   'icon': 'url_svg',
  //   'github_url': 'liinarodriguez/repo/etc',
  //   'description': 'a detailed description',
  //   'stack': ['js', 'tailwind', 'supabase', 'etc']
  // },
  {
    'name': 'movies go',
    'icon': 'url_svg',
    'github_url': 'https://github.com/LiinaRodriguez/movies-go',
    'description': 'a detailed description',
    'stack': ['reactjs', 'tailwind', 'golang']
  },
  {
    'name': 'coffe-shop',
    'icon': 'url_svg',
    'github_url': 'https://github.com/LiinaRodriguez/coffe-shop',
    'description': 'a detailed description',
    'stack':  [ 'django']
  }
]

function loadProjects() {
  const container = document.getElementById('projects-container')

  proyectos.forEach(project => {
    const proyectoDiv = document.createElement('div');
    proyectoDiv.classList.add('proyecto')
    proyectoDiv.innerHTML = `
    <div class="project-header">
    <h5> ${project.name} </h5>
    <a href=${project.github_url} target="_blank" title="GitHub">
      <img src="src/assets/icons/github.svg" alt="GitHub" class="icon">
    </a>
    </div>
    <div class="project-description">${project.description}</div>
    <div class="project-stack">${project.stack}</div>

  `;

    container.appendChild(proyectoDiv)

  })
}

window.onload = loadProjects;