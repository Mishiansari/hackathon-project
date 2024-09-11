const skillsSection=document.getElementById('skills');
const toggleSkillsButton=document.getElementById('toggle-skills');
if (toggleSkillsButton){
    toggleSkillsButton.addEventListener('click',()=>{
        if(skillsSection?.style.display==='none'||skillsSection?.style.display===''){
            skillsSection.style.display='block';
            toggleSkillsButton.textContent='Hide Skills';
        }else{
            skillsSection.style.display='none';
            toggleSkillsButton.textContent='Show Skills';
        }
    });
}