//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw "Error!";
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript
function match(job, candidates) {
  return candidates.filter(
    (el) =>
      (job.equityMax > 0 || !el.desiresEquity) &&
      job.locations.some(
        (x) => el.currentLocation === x || el.desiredLocations.includes(x)
      )
  );
}
