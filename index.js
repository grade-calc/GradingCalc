const edgeAInput = document.getElementById('edgeA');
const edgeBInput = document.getElementById('edgeB');
const edgeAResult = document.getElementById('edgeAResult');
const edgeBResult = document.getElementById('edgeBResult');
const centeringGrade = document.getElementById('centeringGrade');

// Autofocus Edge A when page loads
window.onload = () => {
  edgeAInput.focus();
};

// Enter in Edge A moves to Edge B
edgeAInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    edgeBInput.focus();
  }
});

// Enter in Edge B calculates
edgeBInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }
});

function calculate() {
  let a = parseFloat(edgeAInput.value) || 0;
  let b = parseFloat(edgeBInput.value) || 0;
  let total = a + b;

  if (total > 0) {
    let aPercent = ((a / total) * 100).toFixed(1);
    let bPercent = ((b / total) * 100).toFixed(1);

    edgeAResult.textContent = aPercent + '%';
    edgeBResult.textContent = bPercent + '%';

    // Main formula (round UP)
    let l = Math.ceil((Math.max(a, b) / total) * 100);

    centeringGrade.textContent = getGrade(l);
    applyGradeColor(centeringGrade.textContent);
  } else {
    edgeAResult.textContent = "0%";
    edgeBResult.textContent = "0%";
    centeringGrade.textContent = "-";
    centeringGrade.style.color = "white";
  }
}

function getGrade(l) {
  if (l >= 50 && l <= 55) return "10";
  if (l >= 56 && l <= 60) return "9";
  if (l >= 61 && l <= 65) return "8";
  if (l >= 66 && l <= 70) return "7";
  if (l >= 71 && l <= 80) return "6";
  if (l >= 81 && l <= 85) return "5";
  if (l >= 86 && l <= 90) return "4";
  if (l >= 91) return "MC";
  return "-";
}

function applyGradeColor(grade) {
  switch (grade) {
    case "10": centeringGrade.style.color = "#4CAF50"; break;
    case "9": centeringGrade.style.color = "#8BC34A"; break;
    case "8": centeringGrade.style.color = "#CDDC39"; break;
    case "7": centeringGrade.style.color = "#FFC107"; break;
    case "6": centeringGrade.style.color = "#FF9800"; break;
    case "5": centeringGrade.style.color = "#FF5722"; break;
    case "4": centeringGrade.style.color = "#F44336"; break;
    case "MC": centeringGrade.style.color = "#E91E63"; break;
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

// Live calculation
edgeAInput.addEventListener('input', calculate);
edgeBInput.addEventListener('input', calculate);
