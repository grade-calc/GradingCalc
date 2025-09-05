const edgeAInput = document.getElementById('edgeA');
const edgeBInput = document.getElementById('edgeB');
const edgeAResult = document.getElementById('edgeAResult');
const edgeBResult = document.getElementById('edgeBResult');
const centeringGrade = document.getElementById('centeringGrade');
const resetButton = document.querySelector('.reset');

function calculate() {
  let a = parseFloat(edgeAInput.value) || 0;
  let b = parseFloat(edgeBInput.value) || 0;
  let total = a + b;

  if (total > 0) {
    let aPercent = ((a / total) * 100).toFixed(1);
    let bPercent = ((b / total) * 100).toFixed(1);

    edgeAResult.textContent = aPercent + '%';
    edgeBResult.textContent = bPercent + '%';

    // Main formula: l = (max(A,B) / (A+B)) * 100
    let l = ((Math.max(a, b) / total) * 100).toFixed(1);

    centeringGrade.textContent = getGrade(l);
    applyGradeColor(centeringGrade.textContent);
  } else {
    edgeAResult.textContent = "0%";
    edgeBResult.textContent = "0%";
    centeringGrade.textContent = "-";
    centeringGrade.style.color = "white";
  }
}

// Grading Scale
function getGrade(l) {
  let p = parseFloat(l);
  if (p >= 50 && p <= 55) return "10";
  if (p >= 56 && p <= 60) return "9";
  if (p >= 61 && p <= 65) return "8";
  if (p >= 66 && p <= 70) return "7";
  if (p >= 71 && p <= 80) return "6";
  if (p >= 81 && p <= 85) return "5";
  if (p > 85) return "4";
  return "-";
}

// Color coding by grade
function applyGradeColor(grade) {
  switch (grade) {
    case "10": centeringGrade.style.color = "#4CAF50"; break; // green
    case "9": centeringGrade.style.color = "#8BC34A"; break;
    case "8": centeringGrade.style.color = "#CDDC39"; break;
    case "7": centeringGrade.style.color = "#FFC107"; break;
    case "6": centeringGrade.style.color = "#FF9800"; break;
    case "5": centeringGrade.style.color = "#FF5722"; break;
    case "4": centeringGrade.style.color = "#F44336"; break; // red
    default: centeringGrade.style.color = "white";
  }
}

function resetValues() {
  edgeAInput.value = "";
  edgeBInput.value = "";
  edgeAResult.textContent = "0%";
  edgeBResult.textContent = "0%";
  centeringGrade.textContent = "-";
  centeringGrade.style.color = "white";
  edgeAInput.focus();
}

// Auto focus Edge A when page loads
window.onload = () => {
  edgeAInput.focus();
};

// Enter key navigation + reset
edgeAInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    edgeBInput.focus();
  }
});

edgeBInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    resetButton.focus();
  }
});

resetButton.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    resetValues();
  }
});

edgeAInput.addEventListener('input', calculate);
edgeBInput.addEventListener('input', calculate);
resetButton.addEventListener('click', resetValues);
