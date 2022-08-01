//https://www.codewars.com/kata/56c2a067585d9ac8280003c9/train/javascript

function match(candidate, job) {
  for (let i = 0; i < job.skills.length; i++) {
    const jobSkill = job.skills[i];
    const subSkill = job.skills[i].substitutions;
    let match = candidate.skills.find((skill) => skill.name === jobSkill.name);
    if (match === undefined) {
      for (let j = 0; j < subSkill.length; j++) {
        match = candidate.skills.find(
          (skill) => skill.name === subSkill[j].name
        );
      }
    }
    if (match === undefined) return false;
    if (match.preference === "avoid") return false;
    const exp =
      match.preference === "desired"
        ? match.experience * 1.5
        : match.experience;
    if (exp < jobSkill.idealYears) return false;
  }
  return true;
}
