function setupToggleSkills(): void {
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLUListElement;

    toggleSkillsBtn.addEventListener('click', () => {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        } else {
            skillsList.style.display = 'none';
        }
    });
}

// Call the function to setup the toggle functionality
setupToggleSkills();
